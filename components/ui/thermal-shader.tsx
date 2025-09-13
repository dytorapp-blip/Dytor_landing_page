/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import * as THREE from 'three' 
import React, { useEffect, useRef } from "react" 

interface ThermalEffectProps {
  width?: number
  height?: number 
  className?: string
  logoUrl?: string
}

const ThermalEffect: React.FC<ThermalEffectProps> = ({
  width = 400,
  height = 400,
  className = "",
  logoUrl = "/assets/Dytor_icon_dark_mode.png",
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const engineRef = useRef<ThermalEffectEngine | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const initEngine = async () => {
      try {
        const engine = new ThermalEffectEngine(containerRef.current!, logoUrl)
        await engine.init()
        engineRef.current = engine
      } catch (error) {
        console.error("Failed to initialize thermal effect:", error)
      }
    }

    initEngine()

    return () => {
      if (engineRef.current) {
        engineRef.current.dispose()
        engineRef.current = null
      }
    }
  }, [logoUrl])

  return (
    <div className={`flex w-full h-full justify-center ${className}`}>
      <div ref={containerRef} style={{ width, height }} />
    </div>
  )
}

export { ThermalEffect }

class ThermalEffectEngine implements Disposable {
  private renderer: THREE.WebGLRenderer
  private logoUrl: string
  private scene: THREE.Scene
  private camera: THREE.OrthographicCamera
  private drawRenderer!: DrawRenderer
  private interactionManager!: InteractionManager
  private thermalMaterial!: ThermalMaterial
  private heatMesh!: THREE.Mesh
  private maskTexture!: THREE.Texture
  private logoTexture!: THREE.Texture
  private container: HTMLElement
  private heatUp = 0
  private parameters: EffectParameters = { ...DEFAULT_PARAMETERS }
  private animationId: number | null = null
  private lastTime = 0
  private animationValues: AnimationValues = {
    blendVideo: { value: 1, target: 1 },
    amount: { value: 0, target: 1 },
    mouse: {
      position: new THREE.Vector3(0, 0, 0),
      target: new THREE.Vector3(0, 0, 0),
    },
    move: { value: 1, target: 1 },
    scrollAnimation: {
      opacity: { value: 1, target: 1 },
      scale: { value: 1, target: 1 },
      power: { value: 0.8, target: 0.8 },
    },
  }
  
  private resizeHandler = () => {
    const rect = this.container.getBoundingClientRect()
    this.renderer.setSize(rect.width, rect.height)
    this.onResize(rect.width, rect.height)
  }
  
  constructor(container: HTMLElement, logoUrl: string) {
    this.container = container
    this.logoUrl = logoUrl
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      logarithmicDepthBuffer: false,
    })
    this.renderer.outputColorSpace = (THREE as any).SRGBColorSpace ?? this.renderer.outputColorSpace
    this.renderer.setClearColor(0x000000, 0)
    this.scene = new THREE.Scene()
    this.camera = new THREE.OrthographicCamera(
      CAMERA_CONFIG.LEFT,
      CAMERA_CONFIG.RIGHT,
      CAMERA_CONFIG.TOP,
      CAMERA_CONFIG.BOTTOM,
      CAMERA_CONFIG.NEAR,
      CAMERA_CONFIG.FAR
    )
    this.camera.position.z = CAMERA_CONFIG.POSITION_Z
    this.setupRenderer()
    this.setupResizeHandler()
  }
  
  private setupRenderer(): void {
    const rect = this.container.getBoundingClientRect()
    this.renderer.setSize(rect.width, rect.height)
    this.renderer.setPixelRatio(window.devicePixelRatio || 1)
    this.renderer.domElement.style.pointerEvents = "auto" // Enable pointer events
    this.container.appendChild(this.renderer.domElement)
  }
  
  private setupResizeHandler(): void {
    window.addEventListener("resize", this.resizeHandler)
  }
  
  async init(): Promise<void> {
    const isMobile = isTouchDevice()
    this.drawRenderer = new DrawRenderer(256, { radiusRatio: 1000, isMobile })
    const [maskTexture, logoTexture] = await Promise.all([
      loadTexture(this.logoUrl),
      loadTexture(this.logoUrl),
    ])
    this.maskTexture = maskTexture
    this.logoTexture = logoTexture
    this.createThermalEffect()
    this.setupMaterialTextureBasedUniforms()
    this.setupInteractionManager()
    const rect = this.container.getBoundingClientRect()
    this.onResize(rect.width, rect.height)
    this.startAnimationLoop()
  }
  
  private setupMaterialTextureBasedUniforms(): void {
    if (!this.thermalMaterial || !this.maskTexture) return
    const uniforms = this.thermalMaterial.getUniforms?.()
    const texWidth =
      (this.maskTexture.image && (this.maskTexture.image as any).width) ||
      (this.maskTexture.userData && this.maskTexture.userData.width) ||
      512
    const glowRadiusUV = 10 / Math.max(1, texWidth)
    if (uniforms && uniforms.glowRadius) {
      uniforms.glowRadius.value = glowRadiusUV
    }
    if (uniforms && uniforms.glowIntensity) {
      uniforms.glowIntensity.value = 0.7
    }
  }
  
  private createThermalEffect(): void {
    this.thermalMaterial = new ThermalMaterial({
      drawTexture: this.drawRenderer.getTexture(),
      maskTexture: this.maskTexture,
    })
    this.heatMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      this.thermalMaterial.getMaterial()
    )
    this.heatMesh.position.set(0, 0, 0)
    this.scene.add(this.heatMesh)
  }
  
  private setupInteractionManager(): void {
    this.interactionManager = new InteractionManager({
      container: this.container,
      hitContainer: this.container,
      onPositionUpdate: (position, direction) => {
        this.animationValues.mouse.target.copy(position)
        this.drawRenderer.updateDirection(direction)
      },
      onInteractionChange: (isInteracting) => {
        this.animationValues.move.target = isInteracting
          ? INTERACTION.HOLD_MOVE_TARGET
          : INTERACTION.RELEASE_MOVE_TARGET
        this.animationValues.scrollAnimation.power.target = isInteracting
          ? INTERACTION.HOLD_POWER_TARGET
          : INTERACTION.RELEASE_POWER_TARGET
      },
    })
  }
  
  private startAnimationLoop(): void {
    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - this.lastTime) / 1000
      this.lastTime = currentTime
      this.update(deltaTime)
      this.render()
      this.animationId = requestAnimationFrame(animate)
    }
    this.animationId = requestAnimationFrame(animate)
  }
  
  private update(deltaTime: number): void {
    this.updateAnimationValues(deltaTime)
    this.updateHeatInteraction(deltaTime)
    this.updateThermalMaterial()
    this.updateMeshTransform()
    this.updateDrawRenderer()
    this.thermalMaterial.updateTime(this.lastTime / 1000)
  }
  
  private updateAnimationValues(deltaTime: number): void {
    this.animationValues.mouse.position.lerp(
      this.animationValues.mouse.target,
      lerpSpeed(ANIMATION.MOUSE_INTERPOLATION_SPEED, deltaTime)
    )
    this.animationValues.move.value = lerp(
      this.animationValues.move.value,
      this.animationValues.move.target,
      lerpSpeed(ANIMATION.MOVEMENT_INTERPOLATION_SPEED, deltaTime)
    )
    this.animationValues.scrollAnimation.power.value = clamp(
      lerp(
        this.animationValues.scrollAnimation.power.value,
        this.animationValues.scrollAnimation.power.target,
        lerpSpeed(ANIMATION.POWER_INTERPOLATION_SPEED, deltaTime)
      ),
      ANIMATION.POWER_MIN,
      ANIMATION.POWER_MAX
    )
    this.animationValues.scrollAnimation.opacity.value = lerp(
      this.animationValues.scrollAnimation.opacity.value,
      this.animationValues.scrollAnimation.opacity.target *
        this.animationValues.move.value,
      lerpSpeed(ANIMATION.SCROLL_INTERPOLATION_SPEED, deltaTime)
    )
    this.animationValues.scrollAnimation.scale.value = lerp(
      this.animationValues.scrollAnimation.scale.value,
      this.animationValues.scrollAnimation.scale.target,
      lerpSpeed(ANIMATION.SCROLL_INTERPOLATION_SPEED, deltaTime)
    )
    if (this.animationValues.amount.value < 0.99999) {
      this.animationValues.amount.value = lerp(
        this.animationValues.amount.value,
        this.animationValues.amount.target,
        ANIMATION.FADE_IN_SPEED * deltaTime * ANIMATION.TARGET_FPS
      )
    }
  }
  
  private updateHeatInteraction(deltaTime: number): void {
    const interactionState = this.interactionManager.getInteractionState()
    const mouseState = this.interactionManager.getMouseState()
    this.drawRenderer.updatePosition(mouseState.position, true)
    if (interactionState.hold) {
      this.heatUp +=
        this.parameters.heatSensitivity * deltaTime * ANIMATION.TARGET_FPS
      this.heatUp = Math.min(this.heatUp, ANIMATION.HEAT_MAX_VALUE)
    }
    this.drawRenderer.updateDraw(this.heatUp)
    this.heatUp *= this.parameters.heatDecay
    if (this.heatUp < INTERACTION.HEAT_CLEANUP_THRESHOLD) {
      this.heatUp = 0
    }
    this.interactionManager.updateMousePosition(
      lerpSpeed(ANIMATION.MOUSE_INTERPOLATION_SPEED, deltaTime)
    )
  }
  
  private updateThermalMaterial(): void {
    if (!this.thermalMaterial) return
    this.thermalMaterial.updateUniforms({
      opacity: this.animationValues.scrollAnimation.opacity.value,
      amount: this.animationValues.amount.value,
      power: this.parameters.contrastPower,
      blendVideo: this.parameters.videoBlendAmount,
      randomValue: Math.random(),
    })
    this.thermalMaterial.updateFromParameters(this.parameters)
  }
  
  private updateMeshTransform(): void {
    const scale = this.animationValues.scrollAnimation.scale.value
    if (this.heatMesh) this.heatMesh.scale.set(scale, scale, scale)
  }
  
  private updateDrawRenderer(): void {
    this.drawRenderer.updateDirection({ x: 0, y: 0 })
  }
  
  private render(): void {
    if (this.drawRenderer) {
      const rect = this.container.getBoundingClientRect()
      this.drawRenderer.resize(rect.width, rect.height)
      this.drawRenderer.render(this.renderer)
    }
    this.renderer.autoClear = true
    this.renderer.render(this.scene, this.camera)
  }
  
  private onResize(width: number, height: number): void {
    const aspectRatio = width / height
    let cameraWidth: number, cameraHeight: number
    if (aspectRatio >= 1) {
      cameraHeight = 1
      cameraWidth = aspectRatio
    } else {
      cameraWidth = 1
      cameraHeight = 1 / aspectRatio
    }
    this.camera.left = -cameraWidth / 2
    this.camera.right = cameraWidth / 2
    this.camera.top = cameraHeight / 2
    this.camera.bottom = -cameraHeight / 2
    this.camera.updateProjectionMatrix()
  }
  
  getParameters(): Readonly<EffectParameters> {
    return { ...this.parameters }
  }
  
  setParameter(name: keyof EffectParameters, value: number): void {
    this.parameters[name] = value
  }
  
  resetParameters(): void {
    this.parameters = { ...DEFAULT_PARAMETERS }
  }
  
  dispose(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId)
      this.animationId = null
    }
    window.removeEventListener("resize", this.resizeHandler)
    this.drawRenderer?.dispose()
    this.interactionManager?.dispose()
    this.thermalMaterial?.dispose()
    if (this.heatMesh) {
      if (this.heatMesh.geometry) this.heatMesh.geometry.dispose()
    }
    this.scene.remove(this.heatMesh)
    if (this.maskTexture) this.maskTexture.dispose()
    if (this.logoTexture) this.logoTexture.dispose()
    this.renderer.dispose()
    if (this.container.contains(this.renderer.domElement)) {
      this.container.removeChild(this.renderer.domElement)
    }
  }
}

interface ThermalMaterialConfig {
  drawTexture: THREE.Texture
  maskTexture: THREE.Texture
}

class ThermalMaterial implements Disposable {
  private material: THREE.ShaderMaterial
  private uniforms: ThermalShaderUniforms

  constructor(config: ThermalMaterialConfig) {
    this.uniforms = this.createUniforms(config)
    this.material = this.createMaterial()
  }

  private createUniforms(config: ThermalMaterialConfig): ThermalShaderUniforms {
    const colors = THERMAL_PALETTE.map(hexToRGB) as [
      [number, number, number],
      [number, number, number],
      [number, number, number],
      [number, number, number],
      [number, number, number],
      [number, number, number],
      [number, number, number],
    ]

    return {
      blendVideo: { value: 0 },
      drawMap: { value: config.drawTexture },
      textureMap: { value: config.drawTexture },
      maskMap: { value: config.maskTexture },
      scale: { value: [1, 1] },
      offset: { value: [0, 0] },
      opacity: { value: 1 },
      amount: { value: 0 },
      color1: { value: colors[0] },
      color2: { value: colors[1] },
      color3: { value: colors[2] },
      color4: { value: colors[3] },
      color5: { value: colors[4] },
      color6: { value: colors[5] },
      color7: { value: colors[6] },
      blend: { value: [...GRADIENT_CONFIG.BLEND_POINTS] as [number, number, number, number] },
      fade: { value: [...GRADIENT_CONFIG.FADE_RANGES] as [number, number, number, number] },
      maxBlend: { value: [...GRADIENT_CONFIG.MAX_BLEND] as [number, number, number, number] },
      power: { value: 0.8 },
      rnd: { value: 0 },
      heat: { value: [0, 0, 0, 1.02] },
      stretch: { value: [1, 1, 0, 0] },
      effectIntensity: { value: 1.0 },
      colorSaturation: { value: 1.3 },
      gradientShift: { value: 0.0 },
      interactionSize: { value: 1.0 },
      time: { value: 0.0 },
      glowRadius: { value: 0.02 },
      glowIntensity: { value: 0.7 },
      blurAmount: { value: 0.005 },
      animationSpeed: { value: 1.0 },
      animationIntensity: { value: 0.5 },
      waveFrequency: { value: 8.0 },
      pulseSpeed: { value: 2.0 },
      baseAnimationLevel: { value: 0.3 },
      animationBlendMode: { value: 1.0 },
    }
  }

  private createMaterial(): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: thermalVertexShader,
      fragmentShader: thermalFragmentShader,
      depthTest: false,
      transparent: true,
    })
  }

  updateUniforms(updates: {
    opacity?: number
    amount?: number
    power?: number
    blendVideo?: number
    effectIntensity?: number
    colorSaturation?: number
    gradientShift?: number
    interactionSize?: number
    randomValue?: number
  }): void {
    if (updates.opacity !== undefined) this.uniforms.opacity.value = updates.opacity
    if (updates.amount !== undefined) this.uniforms.amount.value = updates.amount
    if (updates.power !== undefined) this.uniforms.power.value = updates.power
    if (updates.blendVideo !== undefined) this.uniforms.blendVideo.value = updates.blendVideo
    if (updates.effectIntensity !== undefined) this.uniforms.effectIntensity.value = updates.effectIntensity
    if (updates.colorSaturation !== undefined) this.uniforms.colorSaturation.value = updates.colorSaturation
    if (updates.gradientShift !== undefined) this.uniforms.gradientShift.value = updates.gradientShift
    if (updates.interactionSize !== undefined) this.uniforms.interactionSize.value = updates.interactionSize
    if (updates.randomValue !== undefined) this.uniforms.rnd.value = updates.randomValue
  }

  updateTextures(textures: {
    videoTexture?: THREE.VideoTexture
    drawTexture?: THREE.Texture
    maskTexture?: THREE.Texture
  }): void {
    if (textures.videoTexture) this.uniforms.textureMap.value = textures.videoTexture
    if (textures.drawTexture) this.uniforms.drawMap.value = textures.drawTexture
    if (textures.maskTexture) this.uniforms.maskMap.value = textures.maskTexture
  }

  updateTransform(transform: { scale?: [number, number]; offset?: [number, number] }): void {
    if (transform.scale) this.uniforms.scale.value = transform.scale
    if (transform.offset) this.uniforms.offset.value = transform.offset
  }

  updateTime(time: number): void {
    this.uniforms.time.value = time
  }

  updateFromParameters(parameters: EffectParameters): void {
    this.updateUniforms({
      effectIntensity: parameters.effectIntensity,
      colorSaturation: parameters.colorSaturation,
      gradientShift: parameters.gradientShift,
      interactionSize: parameters.interactionRadius,
      power: parameters.contrastPower,
      blendVideo: parameters.videoBlendAmount,
    })
  }

  getMaterial(): THREE.ShaderMaterial {
    return this.material
  }

  getUniforms(): ThermalShaderUniforms {
    return this.uniforms
  }

  dispose(): void {
    this.material.dispose()
  }
}
