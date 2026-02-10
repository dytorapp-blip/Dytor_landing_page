"use client";

import { useState } from "react";
import { LoginForm } from "@/components/login-form";
import { SignupForm } from "@/components/signup-form";
import { HexagonBackground } from "@/components/ui/shadcn-io/hexagon-background"; // Import HexagonBackground

export default function Home() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="relative h-screen w-full">
      <HexagonBackground
        hexagonSize={75}
        hexagonMargin={3}
        className="absolute inset-0"
      >
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            {showLogin ? (
              <LoginForm onLogin={() => {}} onSwitchToSignup={() => setShowLogin(false)} />
            ) : (
              <SignupForm onSignup={() => {}} onSwitchToLogin={() => setShowLogin(true)} />
            )}
          </div>
        </div>
      </HexagonBackground>
    </div>
  );
}
