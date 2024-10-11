import NextImage from "next/image";

import { title } from "@/components/primitives";
import PurchaseCTA from "@/components/PurchaseCTA";
import Mentor, { users } from "@/components/mentors";
import Disclaimer from "@/components/disclaimer";
import BenefitedOrgs from "@/components/benefits";

export default function Home() {
  const moretti = users.find((user) => user.id === 1);
  const goyeneche = users.find((user) => user.id === 2);

  return (
    <section className="w-5/6 mx-auto flex flex-col items-center justify-center gap-4 py-16 md:py-16 ">
      <div className="flex flex-col max-w-xl text-center justify-center items-center">
        <h1 className={title()}>Te invitamos a&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>colaborar</h1>
        <br />
        <h2 className={title({ size: "sm" })}>
          aprendiendo trucos de peluquería para mejorar tu día a día.
        </h2>
        <section className="mt-10  mx-auto">
          <PurchaseCTA />
        </section>
        <section className="bg-black w-full">
          <NextImage
            priority
            alt="Mentor logo"
            height={30}
            src="/BANNER_CURSO_OCT21.png"
            width={700}
          />
        </section>
        <div className="mb-6">
          <h3 className={title({ color: "violet", size: "sm" })}>
            Reservá tu lugar
          </h3>
        </div>
      </div>

      <div className="w-10/12 mx-auto">
        {/* <Cards /> */}
        <PurchaseCTA wording />
      </div>

      <h1
        className={title({
          color: "violet",
          class: "mt-20 text-center lg:text-md",
        })}
      >
        Expositores
      </h1>

      <div className="flex flex-col align-middle items-baseline gap-8 mt-8 mx-10 lg:mx-auto ">
        <Mentor user={moretti} />
        <Mentor user={goyeneche} />
      </div>
      <div className=" text-center mt-8 items-baseline lg:mx-auto ">
        <Disclaimer />
      </div>
      <div className=" text-center mt-8 items-baseline lg:mx-auto">
        <BenefitedOrgs />
      </div>
    </section>
  );
}
