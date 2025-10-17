"use client";

import { useState } from "react";
import { LoginForm } from "@/components/login-form";
import { SignupForm } from "@/components/signup-form";

export default function Home() {
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (data: any) => {
    console.log("Login data:", data);
    // Handle login logic here
  };

  const handleSignup = (data: any) => {
    console.log("Signup data:", data);
    // Handle signup logic here
    setShowSignup(false); // Go back to login after signup
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {showSignup ? (
        <SignupForm onSignup={handleSignup} onShowLogin={() => setShowSignup(false)} />
      ) : (
        <LoginForm onLogin={handleLogin} onShowSignup={() => setShowSignup(true)} />
      )}
    </div>
  );
}
