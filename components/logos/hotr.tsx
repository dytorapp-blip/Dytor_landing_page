import Image, { type ImageProps } from "next/image";

type HotrProps = Omit<ImageProps, "src" | "alt">;

const Hotr = ({
  width = 92,
  height = 92,
  ...props
}: HotrProps) => {
  return (
    <Image
      src="/hotr.png"
      alt="House on the Rock"
      width={width}
      height={height}
      {...props}
    />
  );
};

export default Hotr;
