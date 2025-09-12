'use client';

import { HeroSection } from "@/components/blocks/hero-section-1";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section Demo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Hero Section Component</h2>
          <HeroSection />
        </div>
      </section>

      {/* Text Effect Demos */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Text Effect Animations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fade Effect */}
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Fade Effect</h3>
              <TextEffect 
                preset="fade" 
                className="text-lg text-gray-300"
                as="h4"
              >
                Professional show control and stage management
              </TextEffect>
            </div>

            {/* Slide Effect */}
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Slide Effect</h3>
              <TextEffect 
                preset="slide" 
                className="text-lg text-gray-300"
                as="h4"
              >
                Precise timers, remote coordination, and real-time sync
              </TextEffect>
            </div>

            {/* Blur Effect */}
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Blur Effect</h3>
              <TextEffect 
                preset="blur" 
                className="text-lg text-gray-300"
                as="h4"
              >
                For flawless productions
              </TextEffect>
            </div>

            {/* Scale Effect */}
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Scale Effect</h3>
              <TextEffect 
                preset="scale" 
                className="text-lg text-gray-300"
                as="h4"
              >
                Own your show
              </TextEffect>
            </div>

            {/* Character Animation */}
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Character Animation</h3>
              <TextEffect 
                preset="fade" 
                per="char"
                className="text-lg text-gray-300"
                as="h4"
              >
                DYTOR
              </TextEffect>
            </div>

            {/* Word Animation */}
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Word Animation</h3>
              <TextEffect 
                preset="slide" 
                per="word"
                className="text-lg text-gray-300"
                as="h4"
              >
                Stage Timer Show Control Remote Cues
              </TextEffect>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Group Demos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Animated Group Components</h2>
          
          {/* Fade Group */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6">Fade Animation</h3>
            <AnimatedGroup preset="fade" className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg text-white">
                <h4 className="text-xl font-bold mb-2">Feature 1</h4>
                <p>Quantum precision timing with predictive algorithms</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-lg text-white">
                <h4 className="text-xl font-bold mb-2">Feature 2</h4>
                <p>Multi-device orchestration through WebSocket architecture</p>
              </div>
              <div className="bg-gradient-to-r from-pink-500 to-red-600 p-6 rounded-lg text-white">
                <h4 className="text-xl font-bold mb-2">Feature 3</h4>
                <p>Next-gen projection mapping with adaptive backgrounds</p>
              </div>
            </AnimatedGroup>
          </div>

          {/* Slide Group */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6">Slide Animation</h3>
            <AnimatedGroup preset="slide" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
                <h4 className="text-xl font-bold text-white mb-2">Starter Plan</h4>
                <p className="text-gray-300 mb-4">Perfect for small productions</p>
                <div className="text-3xl font-bold text-white mb-4">$0</div>
                <Button className="w-full">Get Started</Button>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg border border-blue-500">
                <h4 className="text-xl font-bold text-white mb-2">Pro Plan</h4>
                <p className="text-gray-300 mb-4">Advanced features for teams</p>
                <div className="text-3xl font-bold text-white mb-4">$12<span className="text-lg text-gray-400">/mo</span></div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Pro</Button>
              </div>
            </AnimatedGroup>
          </div>

          {/* Scale Group */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6">Scale Animation</h3>
            <AnimatedGroup preset="scale" className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Sparkles className="mr-2 h-4 w-4" />
                Features
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Play className="mr-2 h-4 w-4" />
                Demo
              </Button>
              <Button className="bg-indigo-600 hover:bg-indigo-500">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </AnimatedGroup>
          </div>

          {/* Blur Slide Group */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6">Blur Slide Animation</h3>
            <AnimatedGroup preset="blur-slide" className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-slate-800/50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-400 mb-2">50ms</div>
                <div className="text-sm text-gray-400">Remote command latency</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-400 mb-2">∞</div>
                <div className="text-sm text-gray-400">Devices in perfect sync</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-400 mb-2">8K</div>
                <div className="text-sm text-gray-400">Display-ready visuals</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-400 mb-2">0 setup</div>
                <div className="text-sm text-gray-400">Scan QR to control</div>
              </div>
            </AnimatedGroup>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Interactive Demo</h2>
          <TextEffect 
            preset="fade" 
            className="text-2xl text-gray-300 mb-8"
            as="p"
          >
            This page demonstrates all the animation components working together
          </TextEffect>
          <AnimatedGroup preset="bounce" className="flex justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600">
              <Sparkles className="mr-2 h-5 w-5" />
              Try DYTOR
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </AnimatedGroup>
        </div>
      </section>
    </div>
  );
}
