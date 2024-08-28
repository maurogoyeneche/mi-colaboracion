import { title } from "@/components/primitives";
import { Cards } from "@/components/cards";
import Mentor, { users } from "@/components/mentors";
import Disclaimer from "@/components/disclaimer";
import BenefitedOrgs from "@/components/benefits";

export default function Home() {
  const moretti = users.find((user) => user.id === 1);
  const goyeneche = users.find((user) => user.id === 2);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title()}>Te invitamos a&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>colaborar</h1>
        <br />
        <h2 className={title({ size: "sm" })}>
          aprendiendo trucos de peluquería para mejorar tu día a día.
        </h2>
        <p className="my-6  mx-auto text-center text-lg text-zinc-500 dark:text-zinc-400 w-5/6 leading-5">
          Hoy somos lo que ayer fuimos... mañana seremos lo que hoy somos.
        </p>
        <div className="mb-6">
          <h3 className={title({ color: "violet", size: "sm" })}>
            Elegí tu nivel de colaboracion
          </h3>
        </div>
      </div>

      <div className="w-10/12 mx-auto">
        <Cards />
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
      <div className=" text-center mt-8 items-baseline mx-10 lg:mx-auto ">
        <Disclaimer />
      </div>
      <div className=" text-center mt-8 items-baseline mx-10 lg:mx-auto">
        <BenefitedOrgs />
      </div>
    </section>
  );
}
