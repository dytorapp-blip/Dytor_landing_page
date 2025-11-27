import { ReactNode } from "react";

import Hotr from "../../logos/hotr";
import Logo from "../../ui/logo";
import { Section } from "../../ui/section";

interface LogosProps {
  title?: string;
  badge?: ReactNode | false;
  logos?: ReactNode[] | false;
  className?: string;
}

export default function Logos({
  title = "Used by Media Teams around the world",
  logos = [
    // <Logo
    //   key="typescript"
    //   image={TypeScript}
    //   name="TypeScript"
    //   version="5.9.3"
    // />,
    <Logo key="hotr" image={Hotr} name="" width={92} height={92} />,
    // <Logo key="tailwind" image={Tailwind} name="Tailwind" version="4.1.14" />,
  ],
  className,
}: LogosProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          {/* {badge !== false && badge} */}
          <h2 className="text-md font-semibold sm:text-2xl">{title}</h2>
        </div>
        {logos !== false && logos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos}
          </div>
        )}
      </div>
    </Section>
  );
}
