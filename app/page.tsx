'use client';

import { useEffect } from 'react';

export default function Page() {
	useEffect(() => {
		// Initialize AOS
		if (typeof window !== 'undefined' && (window as any).AOS) {
			const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			(window as any).AOS.init({ duration: 800, once: true, disable: prefersReduced });
		}

		// Initialize Feather Icons
		if (typeof window !== 'undefined' && (window as any).feather) {
			(window as any).feather.replace();
		}

		// Create floating orbs
		function createOrbs() {
			const colors = ['rgba(0, 245, 255, 0.3)', 'rgba(124, 58, 237, 0.3)'];
			const container = document.getElementById('orbs-container');
			if (!container) return;
			const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			const isSmall = window.matchMedia('(max-width: 640px)').matches;
			const count = prefersReduced ? 0 : (isSmall ? 3 : 6);

			for (let i = 0; i < count; i++) {
				const orb = document.createElement('div');
				orb.className = 'orb';
				const size = Math.random() * 200 + 100;
				orb.style.width = `${size}px`;
				orb.style.height = `${size}px`;
				orb.style.background = colors[Math.floor(Math.random() * colors.length)];
				orb.style.left = `${Math.random() * 100}%`;
				orb.style.top = `${Math.random() * 100}%`;
				container.appendChild(orb);

				if (!prefersReduced && (window as any).gsap) {
					(window as any).gsap.to(orb, {
						x: `${Math.random() * 200 - 100}`,
						y: `${Math.random() * 200 - 100}`,
						duration: Math.random() * 10 + 10,
						repeat: -1,
						yoyo: true,
						ease: 'sine.inOut'
					});
				}
			}
		}

		// Mouse move effect
		function setupMouseParallax() {
			const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			if (prefersReduced) return;
			let rafId: number | null = null;
			let lastEvent: MouseEvent | null = null;
			function onMove(e: MouseEvent) {
				lastEvent = e;
				if (rafId) return;
				rafId = requestAnimationFrame(() => {
					const orbs = document.querySelectorAll<HTMLDivElement>('.orb');
					orbs.forEach(orb => {
						const speed = parseFloat(orb.style.width) / 500;
						const x = (window.innerWidth - (lastEvent as MouseEvent).pageX * speed) / 100;
						const y = (window.innerHeight - (lastEvent as MouseEvent).pageY * speed) / 100;
						orb.style.transform = `translate(${x}px, ${y}px)`;
					});
					rafId = null;
				});
			}
			document.addEventListener('mousemove', onMove);
			return () => document.removeEventListener('mousemove', onMove);
		}

		// Animate countdown timer
		function animateTimer() {
			let time = 900;
			const timerElement = document.querySelector<HTMLDivElement>('.countdown-timer');
			if (!timerElement) return () => {};
			let hidden = false;
			const onVis = () => { hidden = document.hidden; };
			document.addEventListener('visibilitychange', onVis);
			const interval = setInterval(() => {
				time = Math.max(0, time - 1);
				const minutes = Math.floor(time / 60);
				const seconds = time % 60;
				const milliseconds = hidden ? 0 : Math.floor(Math.random() * 1000);
				timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
					.toString()
					.padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
				if (Math.random() > 0.95) {
					timerElement.classList.add('text-purple-400');
					setTimeout(() => timerElement.classList.remove('text-purple-400'), 200);
				}
			}, 33);
			return () => {
				clearInterval(interval);
				document.removeEventListener('visibilitychange', onVis);
			};
		}

		createOrbs();
		const cleanupParallax = setupMouseParallax();
		const cleanupTimer = animateTimer();
		return () => {
			cleanupParallax && cleanupParallax();
			cleanupTimer && cleanupTimer();
		};
	}, []);

	return (
		<div className="min-h-screen">
			<div className="grid-bg"></div>
			<div id="orbs-container"></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<nav className="flex justify-between items-center py-8">
					<div className="flex items-center space-x-2">
						<img src="/assets/Dytor_logo_name.png" alt="DYTOR" className="h-8 w-auto" />
					</div>
					<div className="hidden md:flex space-x-8">
						<a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
						<a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
						<a href="#comparison" className="text-gray-300 hover:text-white transition-colors">Use Cases</a>
					</div>
					<button className="px-6 py-2 rounded-full gradient-border hover:bg-gradient-to-r from-cyan-500/10 to-purple-500/10 transition-all">
						<span className="gradient-text font-medium">Download</span>
					</button>
				</nav>

				<section className="py-24 md:py-32 relative">
					<div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl opacity-40"></div>
					<div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl opacity-40"></div>

					<div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
						<h1 className="text-5xl md:text-7xl font-bold mb-6 hero-glow">
							<span className="gradient-text">DYTOR</span>
						</h1>
						<p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto">
							Professional show control and stage management—precise timers, remote coordination, and real-time sync for flawless productions.
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<a href="#demo" className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition-all shadow-lg shadow-cyan-500/20 font-medium text-center" aria-label="Try live demo">
								Try Live Demo
							</a>
							<a href="#pricing" className="px-8 py-4 rounded-full gradient-border hover:bg-gradient-to-r from-cyan-500/10 to-purple-500/10 transition-all font-medium text-center" aria-label="View pricing">
								View Pricing
							</a>
						</div>
						<div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
							<div className="glass-card rounded-xl p-3">
								<div className="text-2xl font-bold"><span className="gradient-text">50ms</span></div>
								<div className="text-xs text-gray-400">Remote command latency</div>
							</div>
							<div className="glass-card rounded-xl p-3">
								<div className="text-2xl font-bold"><span className="gradient-text">∞</span></div>
								<div className="text-xs text-gray-400">Devices in perfect sync</div>
							</div>
							<div className="glass-card rounded-xl p-3">
								<div className="text-2xl font-bold"><span className="gradient-text">8K</span></div>
								<div className="text-xs text-gray-400">Display‑ready visuals</div>
							</div>
							<div className="glass-card rounded-xl p-3">
								<div className="text-2xl font-bold"><span className="gradient-text">0 setup</span></div>
								<div className="text-xs text-gray-400">Scan QR to control</div>
							</div>
						</div>
					</div>
				</section>

				<section className="py-10" aria-label="Trusted by">
					<div className="glass-card rounded-2xl p-6">
						<div className="text-center text-xs tracking-widest text-gray-400 mb-4">TRUSTED BY PRODUCTION TEAMS</div>
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center opacity-80">
							<img src="/assets/Dytor_logo_name.png" alt="Brand" className="h-6 object-contain" loading="lazy" />
							<img src="/assets/Dytor_Icon_light_mode.png" alt="Brand" className="h-6 object-contain" loading="lazy" />
							<img src="/assets/Dytor_icon_dark_mode.png" alt="Brand" className="h-6 object-contain" loading="lazy" />
							<img src="/assets/Dytor_logo_name.png" alt="Brand" className="h-6 object-contain" loading="lazy" />
						</div>
					</div>
				</section>

				<section id="features" className="py-20">
					<div className="text-center mb-20" data-aos="fade-up">
						<h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Beyond Traditional Control</h2>
						<p className="text-gray-400 max-w-2xl mx-auto">Elevate your productions with technology that anticipates your needs before you do</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="feature-card glass-card p-8 rounded-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
							<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
								<i data-feather="clock" className="text-white"></i>
							</div>
							<h3 className="text-xl font-bold mb-3">Quantum Precision</h3>
							<p className="text-gray-400 mb-4">Millisecond-accurate timing with predictive algorithms that adapt to your production's rhythm.</p>
							<div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-4"></div>
							<p className="text-sm text-cyan-400">±0.001s accuracy</p>
						</div>

						<div className="feature-card glass-card p-8 rounded-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
							<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
								<i data-feather="cpu" className="text-white"></i>
							</div>
							<h3 className="text-xl font-bold mb-3">Neural Networks</h3>
							<p className="text-gray-400 mb-4">Multi-device orchestration through advanced WebSocket architecture that feels telepathic.</p>
							<div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-4"></div>
							<p className="text-sm text-purple-400">Real-time sync across ∞ devices</p>
						</div>

						<div className="feature-card glass-card p-8 rounded-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
							<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
								<i data-feather="monitor" className="text-white"></i>
							</div>
							<h3 className="text-xl font-bold mb-3">Holographic Displays</h3>
							<p className="text-gray-400 mb-4">Next-gen projection mapping with adaptive backgrounds that respond to environmental changes.</p>
							<div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-4"></div>
							<p className="text-sm text-cyan-400">8K resolution support</p>
						</div>

						<div className="feature-card glass-card p-8 rounded-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
							<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
								<i data-feather="calendar" className="text-white"></i>
							</div>
							<h3 className="text-xl font-bold mb-3">Temporal Intelligence</h3>
							<p className="text-gray-400 mb-4">AI-powered schedule optimization that learns from your patterns and predicts adjustments.</p>
							<div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-4"></div>
							<p className="text-sm text-purple-400">Adaptive scheduling</p>
						</div>

						<div className="feature-card glass-card p-8 rounded-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
							<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
								<i data-feather="message-square" className="text-white"></i>
							</div>
							<h3 className="text-xl font-bold mb-3">Telepathic Messaging</h3>
							<p className="text-gray-400 mb-4">Instant thought-to-screen communication that eliminates delays in crew coordination.</p>
							<div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-4"></div>
							<p className="text-sm text-cyan-400">50ms latency</p>
						</div>

						<div className="feature-card glass-card p-8 rounded-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
							<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
								<i data-feather="refresh-cw" className="text-white"></i>
							</div>
							<h3 className="text-xl font-bold mb-3">Dimensional Sync</h3>
							<p className="text-gray-400 mb-4">Cross-platform consciousness that transcends devices and maintains perfect state alignment.</p>
							<div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-4"></div>
							<p className="text-sm text-purple-400">Omnichannel awareness</p>
						</div>
					</div>
				</section>

				<section id="how" className="py-24">
					<div className="text-center mb-16" data-aos="fade-up">
						<h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">How It Works</h2>
						<p className="text-gray-400 max-w-2xl mx-auto">Three steps from zero to show‑ready. No installs required.</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="glass-card rounded-2xl p-6" data-aos="fade-up" data-aos-delay="50">
							<div className="text-sm text-cyan-400 font-semibold mb-2">1. Launch</div>
							<h3 className="text-xl font-bold mb-2">Open Controller</h3>
							<p className="text-gray-400 text-sm">Load the controller in your browser. Secondary display opens in a separate window.</p>
						</div>
						<div className="glass-card rounded-2xl p-6" data-aos="fade-up" data-aos-delay="150">
							<div className="text-sm text-cyan-400 font-semibold mb-2">2. Connect</div>
							<h3 className="text-xl font-bold mb-2">Scan Remote QR</h3>
							<p className="text-gray-400 text-sm">Team members scan a time‑limited QR to join with roles and permissions.</p>
						</div>
						<div className="glass-card rounded-2xl p-6" data-aos="fade-up" data-aos-delay="250">
							<div className="text-sm text-cyan-400 font-semibold mb-2">3. Orchestrate</div>
							<h3 className="text-xl font-bold mb-2">Run Your Show</h3>
							<p className="text-gray-400 text-sm">Start/pause/add time, trigger messages, and auto‑advance schedules — all in sync.</p>
						</div>
					</div>
				</section>

				<section id="comparison" className="py-24">
					<div className="text-center mb-16" data-aos="fade-up">
						<h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Why DYTOR Wins</h2>
						<p className="text-gray-400 max-w-2xl mx-auto">Designed for real productions — fast, reliable, and built for teams.</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						<div className="glass-card rounded-2xl p-6" data-aos="fade-up">
							<h3 className="text-xl font-bold mb-4">DYTOR</h3>
							<ul className="space-y-3 text-sm">
								<li className="flex items-start gap-2"><span className="text-emerald-400">✓</span><span>Role‑based remote dashboards (admin, queue manager, speaker, viewer)</span></li>
								<li className="flex items-start gap-2"><span className="text-emerald-400">✓</span><span>Secondary display with customizable background (color, image, video)</span></li>
								<li className="flex items-start gap-2"><span className="text-emerald-400">✓</span><span>Live messages with flash, presets, and visibility toggle</span></li>
								<li className="flex items-start gap-2"><span className="text-emerald-400">✓</span><span>Auto‑follow schedule with records of planned vs. actual</span></li>
								<li className="flex items-start gap-2"><span className="text-emerald-400">✓</span><span>BroadcastChannel + WebSocket sync for zero drift</span></li>
								<li className="flex items-start gap-2"><span className="text-emerald-400">✓</span><span>QR auth links with expiry for secure remote access</span></li>
							</ul>
						</div>
						<div className="glass-card rounded-2xl p-6" data-aos="fade-up" data-aos-delay="100">
							<h3 className="text-xl font-bold mb-4">Typical Stage Timer</h3>
							<ul className="space-y-3 text-sm">
								<li className="flex items-start gap-2"><span className="text-rose-400">✕</span><span>Single generic remote view without roles</span></li>
								<li className="flex items-start gap-2"><span className="text-rose-400">✕</span><span>Limited or no secondary display customization</span></li>
								<li className="flex items-start gap-2"><span className="text-rose-400">✕</span><span>No real message cueing or flashing</span></li>
								<li className="flex items-start gap-2"><span className="text-rose-400">✕</span><span>Weak or missing schedule automation and records</span></li>
								<li className="flex items-start gap-2"><span className="text-rose-400">✕</span><span>Inconsistent sync across devices</span></li>
								<li className="flex items-start gap-2"><span className="text-rose-400">✕</span><span>Manual credential sharing for access</span></li>
							</ul>
						</div>
					</div>
				</section>

				<section id="testimonials" className="py-24">
					<div className="text-center mb-16" data-aos="fade-up">
						<h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Loved by Show Runners</h2>
						<p className="text-gray-400 max-w-2xl mx-auto">What production teams say after switching to DYTOR.</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="glass-card rounded-2xl p-6" data-aos="fade-up">
							<p className="text-gray-300 mb-4">“Remote roles are a game‑changer. Our speakers see only what they need, and our queue manager moves lightning fast.”</p>
							<div className="text-sm text-gray-400">Production Lead, TechConf</div>
						</div>
						<div className="glass-card rounded-2xl p-6" data-aos="fade-up" data-aos-delay="100">
							<p className="text-gray-300 mb-4">“Messages with flash cues saved us multiple times. The sync never drifts, even with dozens of devices.”</p>
							<div className="text-sm text-gray-400">Stage Manager, ArenaLive</div>
						</div>
						<div className="glass-card rounded-2xl p-6" data-aos="fade-up" data-aos-delay="200">
							<p className="text-gray-300 mb-4">“The schedule records are gold — planned vs actual at a glance. Post‑mortems are effortless.”</p>
							<div className="text-sm text-gray-400">Show Director, BroadcastOne</div>
						</div>
					</div>
				</section>

				<section id="pricing" className="py-24">
					<div className="text-center mb-16" data-aos="fade-up">
						<h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Simple Pricing</h2>
						<p className="text-gray-400 max-w-2xl mx-auto">Start free. Upgrade when you need advanced remote control and team features.</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="glass-card rounded-2xl p-6 flex flex-col" data-aos="fade-up">
							<h3 className="text-xl font-bold mb-2">Starter</h3>
							<div className="text-3xl font-extrabold mb-4">$0</div>
							<ul className="text-sm text-gray-300 space-y-2 mb-6">
								<li>Local controller</li>
								<li>Secondary display</li>
								<li>Basic messages</li>
							</ul>
							<a href="#demo" className="mt-auto px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition text-center">Get Started</a>
						</div>
						<div className="glass-card rounded-2xl p-6 ring-1 ring-cyan-500/40 flex flex-col" data-aos="fade-up" data-aos-delay="100">
							<h3 className="text-xl font-bold mb-2">Pro</h3>
							<div className="text-3xl font-extrabold mb-4">$12<span className="text-base font-semibold text-gray-400">/mo</span></div>
							<ul className="text-sm text-gray-300 space-y-2 mb-6">
								<li>Remote dashboards + roles</li>
								<li>QR auth links</li>
								<li>Message flashing & presets</li>
								<li>Schedule automation</li>
								<li>Records & exports</li>
							</ul>
							<a href="#contact" className="mt-auto px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition text-center">Start Pro</a>
						</div>
						<div className="glass-card rounded-2xl p-6 flex flex-col" data-aos="fade-up" data-aos-delay="200">
							<h3 className="text-xl font-bold mb-2">Enterprise</h3>
							<div className="text-3xl font-extrabold mb-4">Custom</div>
							<ul className="text-sm text-gray-300 space-y-2 mb-6">
								<li>On‑prem or offline mode</li>
								<li>SSO and audit logs</li>
								<li>Priority support</li>
							</ul>
							<a href="#contact" className="mt-auto px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition text-center">Contact Sales</a>
						</div>
					</div>
				</section>

				<section id="faq" className="py-24">
					<div className="text-center mb-16" data-aos="fade-up">
						<h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Frequently Asked Questions</h2>
						<p className="text-gray-400 max-w-2xl mx-auto">Everything you need to know before your next show.</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="glass-card rounded-2xl p-6" data-aos="fade-up">
							<h3 className="font-semibold mb-2">Do I need to install anything?</h3>
							<p className="text-gray-400 text-sm">No installs. Controller, remotes, and displays run in the browser. Tauri desktop available for offline workflows.</p>
						</div>
						<div className="glass-card rounded-2xl p-6" data-aos="fade-up" data-aos-delay="100">
							<h3 className="font-semibold mb-2">How secure is remote access?</h3>
							<p className="text-gray-400 text-sm">Remotes join with short‑lived QR tokens. Roles and explicit permissions ensure least‑privilege control.</p>
						</div>
						<div className="glass-card rounded-2xl p-6" data-aos="fade-up" data-aos-delay="200">
							<h3 className="font-semibold mb-2">Will the timer stay in sync?</h3>
							<p className="text-gray-400 text-sm">Yes. DYTOR combines BroadcastChannel and WebSocket updates to maintain drift‑free synchronization.</p>
						</div>
						<div className="glass-card rounded-2xl p-6" data-aos="fade-up" data-aos-delay="300">
							<h3 className="font-semibold mb-2">Can I customize the display?</h3>
							<p className="text-gray-400 text-sm">Choose solid colors, imagery, or video backgrounds with opacity control. Title and timer sizes are adjustable.</p>
						</div>
					</div>
				</section>

				<section id="demo" className="py-20">
					<div className="glass-card rounded-2xl overflow-hidden">
						<div className="p-12 flex flex-col md:flex-row items-center">
							<div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
								<h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">See Tomorrow, Today</h2>
								<p className="text-gray-400 mb-8 max-w-md">Neural-linked precision timing in action. Witness how DYTOR maintains perfect sync across all elements of your production.</p>
								<button className="px-6 py-3 rounded-full gradient-border hover:bg-gradient-to-r from-cyan-500/10 to-purple-500/10 transition-all">
									<span className="gradient-text font-medium">Request Private Demo</span>
								</button>
							</div>
							<div className="md:w-1/2 flex justify-center" data-aos="fade-left">
								<div className="relative">
									<div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
									<div className="relative bg-gray-900/80 rounded-xl p-8 backdrop-blur-sm border border-gray-800">
										<div className="countdown-timer text-6xl font-mono font-bold gradient-text mb-4">15:00.000</div>
										<div className="flex justify-between text-sm text-gray-500">
											<span>CUE 24</span>
											<span>SYNC ACTIVE</span>
											<span>LIVE</span>
										</div>
										<div className="mt-6 h-2 rounded-full bg-gray-800 overflow-hidden">
											<div className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full pulse-animation" style={{ width: '75%' }}></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="contact" className="py-32 text-center">
					<div className="max-w-3xl mx-auto" data-aos="zoom-in">
						<h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">Ready to Transcend?</h2>
						<p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
							Join the pioneers who've already stepped into the future of show control
						</p>
						<button className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition-all shadow-xl shadow-cyan-500/30 font-medium text-lg">
							Launch Into Tomorrow
						</button>
					</div>
				</section>

				<footer className="py-12 border-t border-gray-800">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex items-center space-x-2 mb-4 md:mb-0">
							<img src="/assets/Dytor_logo_name.png" alt="DYTOR" className="h-8 w-auto" />
						</div>
						<div className="flex space-x-6">
							<a href="#" className="text-gray-400 hover:text-white transition-colors">
								<i data-feather="twitter"></i>
							</a>
							<a href="#" className="text-gray-400 hover:text-white transition-colors">
								<i data-feather="github"></i>
							</a>
							<a href="#" className="text-gray-400 hover:text-white transition-colors">
								<i data-feather="linkedin"></i>
							</a>
							<a href="#" className="text-gray-400 hover:text-white transition-colors">
								<i data-feather="youtube"></i>
							</a>
						</div>
					</div>
					<div className="mt-8 text-center text-gray-500 text-sm">
						© 2023 DYTOR Technologies. All rights reserved.
					</div>
				</footer>
			</div>
		</div>
	);
}


