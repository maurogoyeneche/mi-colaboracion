import { title } from "@/components/primitives";

export default function Disclaimer() {
  return (
    <div className="container mx-auto my-5 py-10 border-t-2 dark:border-t-zinc-800 dark:border-t-1 ">
      <div className="w-full lg:w-4/6 mx-auto">
        <h1
          className={title({
            color: "violet",
            class: "mt-10 text-center lg:text-md",
          })}
        >
          Disclaimer
        </h1>
        <p className="my-8 text-zinc-800 dark:text-zinc-300 px-2 mx-auto text-balance">
          El 100% de las colaboraciones recibidas serán destinadas
          exclusivamente a la adquisición de materiales necesarios para llevar a
          cabo nuestras actividades y al apoyo directo de los beneficiarios de
          nuestra causa. <br />
          Somos una organización
          <span
            className={title({
              color: "violet",
              class: "text-md lg:text-medium mx-1",
            })}
          >
            sin fines de lucro,
          </span>
          <span className="my-8 ">
            por lo que ningún porcentaje será utilizado para fines
            administrativos o ajenos a la finalidad del proyecto. Tu
            colaboración va directamente a quienes más lo necesitan.
          </span>
          <br />
          <br />
          ¡Gracias por tu apoyo!
        </p>
      </div>
    </div>
  );
}
