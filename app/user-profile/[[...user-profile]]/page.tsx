import { UserProfile } from "@clerk/nextjs";
import Glow from "@/components/ui/glow";

export default function Page() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Glow variant="center" className="pointer-events-none scale-75 opacity-60" />
      <div className="relative z-10 w-full max-w-[820px] px-4">
        <UserProfile />
      </div>
    </div>
  );
}
