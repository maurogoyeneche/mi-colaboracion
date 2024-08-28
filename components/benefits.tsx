// components/BenefitedOrgs.tsx
import React from "react";
import Image from "next/image";

interface Organization {
  id: number;
  name: string;
  logo: string;
  description: string;
}

// interface BenefitedOrgsProps {
//   orgs: Organization[];
// }

const orgs: Organization[] = [
  {
    id: 1,
    name: "Griselda ",
    logo: "/images/tech-for-good-logo.png",
    description: "Empowering communities through technology education.",
  },
  {
    id: 2,
    name: "Code for Change",
    logo: "/images/code-for-change-logo.png",
    description: "Building a better future with coding skills.",
  },
  // Add more organizations as needed
];
const BenefitedOrgs: React.FC = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">
        Organizations Benefited by Our Course
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orgs.map((org) => (
          <div key={org.id} className="bg-white p-4 rounded shadow">
            <div className="flex justify-center mb-4">
              <Image
                alt={`${org.name} logo`}
                height={100}
                objectFit="contain"
                src={org.logo}
                width={100}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{org.name}</h3>
            <p className="text-gray-600">{org.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitedOrgs;
