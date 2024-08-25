import React from "react";
import { User } from "@nextui-org/user";

export const users = [
  {
    id: 1,
    avatar: "https://pub-b213a1fb448445b2a1bd745a11fba172.r2.dev/moretti.webp",
    description: "Estilista - Director Aertistico CPP - Miembro ICD",
    name: "Martin Moretti",
  },
  {
    id: 2,
    avatar:
      "https://pub-b213a1fb448445b2a1bd745a11fba172.r2.dev/mauro_goyeneche_white.webp",
    description: "Mentor de Estilistas - Técnico en Colorimetria",
    name: "Mauro Goyeneche",
  },
] as Record<string, any>[];

export default function Mentor({ user }: Record<string, any>) {
  return (
    <User
      key={user.name}
      avatarProps={{
        src: user.avatar,
        isBordered: true,
        size: "lg",
        imgProps: { "aria-label": user.name },
        className: "min-w-14",
      }}
      description={user.description}
      name={user.name}
    />
  );
}
