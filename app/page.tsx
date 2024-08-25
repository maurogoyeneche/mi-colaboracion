import { title } from "@/components/primitives";
import { Cards } from "@/components/cards";

export default function Home() {
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
      </div>

      <div className="mt-8 w-4/6 lg:w-3/6">
        <Cards />
      </div>
    </section>
  );
}
