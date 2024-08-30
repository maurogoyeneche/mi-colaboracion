// components/BenefitedOrgs.tsx
import React from "react";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";

import { title } from "./primitives";

interface Organization {
  id: number;
  name: string;
  logo: string;
  pictures: string[];
  description: string;
}

// interface BenefitedOrgsProps {
//   orgs: Organization[];
// }

const orgs: Organization[] = [
  {
    id: 1,
    name: "Griselda ",
    logo: "/griselda1.JPG",
    pictures: ["/kids1.JPG", "/kids2.JPG"],
    description:
      "Alimentando almas con amor y comida, transformando vidas con cada bocado y llevando esperanza a quienes más lo necesitan. Alimentamos a mas de 40 niños y sus familias en situación de vulnerabilidad.",
  },

  // Add more organizations as needed
];
const BenefitedOrgs: React.FC = () => {
  return (
    <div className="max-w-2xl">
      <h2 className={title({ size: "sm" })}>
        Organizaciones{" "}
        <span className={title({ color: "violet", size: "sm" })}>
          beneficiadas
        </span>{" "}
        por tu colaboración
      </h2>
      <div className="flex justify-center mt-10">
        {orgs.map((org) => (
          <article
            key={org.id}
            className="bg-zinc-100  dark:bg-zinc-900 px-6 md:py-2 w-full flex flex-col justify-center items-center rounded-2xl"
          >
            <div className="flex  justify-center items-baseline w-full text-left my-4 max-w-[350px] mx-auto">
              <span className="text-sm font-semibold mr-2">
                Estado de donación :
              </span>
              <span className="text-sm bg-lime-600 rounded-2xl px-3 text-white font-semibold">
                Recaudando
              </span>
            </div>
            <div className="flex justify-center">
              <Image
                priority
                alt={`${org.name} logo`}
                as={NextImage}
                height={300}
                src={org.logo}
                style={{ objectFit: "cover", width: "300px", height: "300px" }}
                width={300}
              />
            </div>
            <h3 className="text-2xl font-semibold my-2">{org.name}</h3>
            <p className="text-gray-600 dark:text-gray-200 text-balance text-center max-w-[400px]">
              {org.description}
            </p>
            <div className="flex justify-evenly gap-4 my-4 ">
              {org.pictures.map((picture, index) => (
                <Image
                  key={index}
                  alt={`${org.name} picture ${index}`}
                  height={150}
                  src={picture}
                  style={{
                    objectFit: "cover",
                    width: "150px",
                    height: "150px",
                  }}
                  width={150}
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BenefitedOrgs;
