import { type PropsWithChildren } from "react";

type HeaderProps = {
  image: { src: string; alt: string };
};

export default function Header({
  image,
  children,
}: PropsWithChildren<HeaderProps>) {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
}
