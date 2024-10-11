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
      <div className="mt-16">
        <h5 className="text-lg font-semibold">Ubicación - Tres Cruces</h5>
      </div>
      <div className="w-5/6 md:w-3/6">
        <iframe
          allowFullScreen
          className="border-0 rounded-lg w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.4096547317486!2d-56.17019402371767!3d-34.89616777300284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f8052fa2a50f5%3A0xdd673cf5d5f5781d!2sEduardo%20V%C3%ADctor%20Haedo%202276%2C%2011200%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1sen!2suy!4v1728615883195!5m2!1sen!2suy"
          title="Ubicación de Eduardo Víctor Haedo 2276, Montevideo"
          width="600"
        />
      </div>

      <h1
        className={title({
          color: "violet",
          class: "mt-12 text-center lg:text-md",
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
