import { title } from "@/components/primitives";
import { Cards } from "@/components/cards";
import Mentor, { users } from "@/components/mentors";
import Disclaimer from "@/components/disclaimer";

export default function Home() {
  const moretti = users.find((user) => user.id === 1);
  const goyeneche = users.find((user) => user.id === 2);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center w-5/6 ">
        <h1 className={title()}>Te invitamos a &nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Colaborar</h1>
        <br />
        <h1 className={title({ size: "sm" })}>
          aprendiendo trucos de peluquería para mejorar día a dia.
        </h1>
        <h2 className="mt-8 text-xl">
          Aprende y Crece, Mientras Ayudas a Otros.
        </h2>
        <h3 className="mt-8 text-l text-gray-700 dark:text-gray-400 ">
          Elegí tu nivel de colaboracion
        </h3>
      </div>

      <div className="mt-2 w-5/6 lg:w-3/6">
        <Cards />
      </div>

      <h1
        className={title({
          color: "violet",
          class: "mt-20 text-center lg:text-md",
        })}
      >
        Maestros Colaboradores
      </h1>

      <div className="flex flex-col align-middle gap-8 mt-8  items-baseline mx-10 lg:mx-auto">
        <Mentor user={moretti} />
        <Mentor user={goyeneche} />
      </div>
      <div className=" text-center mt-8 items-baseline mx-auto">
        <Disclaimer />
      </div>
    </section>
  );
}
