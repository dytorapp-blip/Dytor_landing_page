import { ImageProps } from "next/image";
import Image from "next/image";

const Hotr = (props: Partial<ImageProps>) => (
  <Image
    src="/hotr.png"
    alt="House on the Rock"
    width={92}
    height={92}
    {...props}
  />
);

export default Hotr;
