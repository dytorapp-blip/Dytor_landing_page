import { SignIn } from "@clerk/nextjs";
import Glow from "@/components/ui/glow";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Glow variant="center" className="pointer-events-none scale-75 opacity-60" />
      <div className="relative z-10 w-full max-w-[420px] px-4">
        <SignIn />
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link className="text-brand-foreground hover:text-brand" href="/sign-up">
            Go ahead to sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
