"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedGradientBackgroundProps {
    className?: string;
    children?: React.ReactNode;
    intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
    hue: number;
    pulse: number;
    pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
    const angle = -35 + Math.random() * 10;
    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height * 1.5 - height * 0.25,
        width: 30 + Math.random() * 60,
        length: height * 2.5,
        angle: angle,
        speed: 0.6 + Math.random() * 1.2,
        opacity: 0.12 + Math.random() * 0.16,
        hue: 190 + Math.random() * 70,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
    };
}

export function BeamsBackground({
    className,
    intensity = "strong",
    children,
}: AnimatedGradientBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<number>(0);
    // Performance knobs
    const MAX_DEVICE_PIXEL_RATIO = 1.5;
    const INTERNAL_RESOLUTION_SCALE = 0.75; // render at 75% resolution to reduce fill cost
    const TARGET_FPS = 30; // throttle to ~30fps
    const FRAME_INTERVAL_MS = 1000 / TARGET_FPS;

    // Tune beam counts by intensity for lower cost
    const BASE_BEAMS_BY_INTENSITY: Record<NonNullable<AnimatedGradientBackgroundProps["intensity"]>, number> = {
        subtle: 10,
        medium: 16,
        strong: 22,
    };

    const opacityMap = {
        subtle: 0.7,
        medium: 0.85,
        strong: 1,
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Track last draw time for FPS throttling
        let lastFrameTime = 0;

        const updateCanvasSize = () => {
            const rawDpr = window.devicePixelRatio || 1;
            const dpr = Math.min(rawDpr, MAX_DEVICE_PIXEL_RATIO);

            const cssWidth = Math.floor(window.innerWidth);
            const cssHeight = Math.floor(window.innerHeight);

            const internalWidth = Math.max(1, Math.floor(cssWidth * dpr * INTERNAL_RESOLUTION_SCALE));
            const internalHeight = Math.max(1, Math.floor(cssHeight * dpr * INTERNAL_RESOLUTION_SCALE));

            // Reset any existing transform before resizing and scaling
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            canvas.width = internalWidth;
            canvas.height = internalHeight;
            canvas.style.width = `${cssWidth}px`;
            canvas.style.height = `${cssHeight}px`;
            ctx.scale((internalWidth / cssWidth), (internalHeight / cssHeight));

            const totalBeams = BASE_BEAMS_BY_INTENSITY[intensity];
            beamsRef.current = Array.from({ length: totalBeams }, () =>
                createBeam(canvas.width, canvas.height)
            );
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        function resetBeam(beam: Beam, index: number, totalBeams: number) {
            if (!canvas) return beam;
            
            const column = index % 3;
            const spacing = canvas.width / 3;

            beam.y = canvas.height + 100;
            beam.x =
                column * spacing +
                spacing / 2 +
                (Math.random() - 0.5) * spacing * 0.5;
            beam.width = 100 + Math.random() * 100;
            beam.speed = 0.5 + Math.random() * 0.4;
            beam.hue = 190 + (index * 70) / totalBeams;
            beam.opacity = 0.2 + Math.random() * 0.1;
            return beam;
        }

        function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            // Calculate pulsing opacity
            const pulsingOpacity =
                beam.opacity *
                (0.8 + Math.sin(beam.pulse) * 0.2) *
                opacityMap[intensity];

            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

            // Enhanced gradient with multiple color stops
            gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`);
            gradient.addColorStop(
                0.1,
                `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`
            );
            gradient.addColorStop(
                0.4,
                `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`
            );
            gradient.addColorStop(
                0.6,
                `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`
            );
            gradient.addColorStop(
                0.9,
                `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`
            );
            gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        }

        let isVisible = true; // page visibility and intersection combined

        function animate(now: number) {
            if (!canvas || !ctx) return;

            // Throttle to target FPS and pause when not visible
            if (!isVisible) {
                animationFrameRef.current = requestAnimationFrame(animate);
                return;
            }
            if (now - lastFrameTime < FRAME_INTERVAL_MS) {
                animationFrameRef.current = requestAnimationFrame(animate);
                return;
            }
            lastFrameTime = now;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Lower blur to reduce GPU cost
            ctx.filter = "blur(14px)";

            const totalBeams = beamsRef.current.length;
            beamsRef.current.forEach((beam, index) => {
                beam.y -= beam.speed;
                beam.pulse += beam.pulseSpeed;

                // Reset beam when it goes off screen
                if (beam.y + beam.length < -100) {
                    resetBeam(beam, index, totalBeams);
                }

                drawBeam(ctx, beam);
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        }

        // Pause when tab is hidden
        const onVisibility = () => {
            isVisible = !document.hidden;
        };
        document.addEventListener("visibilitychange", onVisibility);

        // Pause when component is out of viewport
        const host = canvas.parentElement || canvas;
        const io = new IntersectionObserver((entries) => {
            const entry = entries[0];
            isVisible = entry.isIntersecting && !document.hidden;
        }, { root: null, threshold: 0 });
        io.observe(host);

        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            document.removeEventListener("visibilitychange", onVisibility);
            io.disconnect();
        };
    }, [intensity]);

    return (
        <div
            className={cn(
                "relative min-h-screen w-full overflow-hidden bg-neutral-950",
                className
            )}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0"
                style={{ filter: "blur(8px)" }}
            />

            <motion.div
                className="absolute inset-0 bg-neutral-950/5"
                animate={{
                    opacity: [0.04, 0.12, 0.04],
                }}
                transition={{
                    duration: 12,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                }}
                style={{
                    backdropFilter: "blur(24px)",
                }}
            />

            {children && (
                <div className="relative z-10">
                    {children}
                </div>
            )}
        </div>
    );
}

