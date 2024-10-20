import { Image } from "@nextui-org/image";
import React from "react";

type Sponsor = {
  id: number;
  logo: string;
  name: string;
};
type Sponsors = {
  sponsors: Sponsor[];
};
export const sponsors = [
  {
    id: 1,
    logo: "https://pub-b213a1fb448445b2a1bd745a11fba172.r2.dev/wella-logo-white.webp",
    name: "Wella Professionals Uruguay",
  },
  {
    id: 2,
    logo: "https://pub-b213a1fb448445b2a1bd745a11fba172.r2.dev/oliva-logo.webp",
    name: "Oliva distribucion",
  },
] as Record<string, any>[];

const Sponsor = ({ logo, name }: Record<string, any>) => {
  return <Image alt={name} src={logo} width={100} />;
};

export default function Sponsors() {
  return (
    <section className="flex items-center justify-center gap-10 ">
      {sponsors.map((sponsor) => (
        <Sponsor key={sponsor.id} logo={sponsor.logo} name={sponsor.name} />
      ))}
    </section>
  );
}
