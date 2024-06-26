import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/images/logo.png"
      alt="logo"
      width={250}
      height={174}
      priority
    />
  );
};

export default Logo;
