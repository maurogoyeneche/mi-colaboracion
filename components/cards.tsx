"use client";

import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

import { DonationL1Icon } from "./icons";

// import { buttonStyles } from "@/styles/button";

export const Cards = () => {
  const list = [
    {
      title: "Donación Nivel 1",
      url: "https://mpago.la/2DEkFwk",
      price: "$370",
      icon: (
        <DonationL1Icon color="#990000" height={50} stroke="#FFF" width={50} />
      ),
    },
    {
      title: "Donación Nivel 2",
      url: "https://mpago.la/2Pd3PvM",
      price: "$570",

      icon: <DonationL1Icon color="#AA0000" height={60} width={60} />,
    },
    {
      title: "Donación Nivel 3",
      url: "https://mpago.la/2JfhYF8",
      price: "$970",
      icon: <DonationL1Icon color="#E60000" height={70} width={70} />,
    },
  ];

  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-3 w-full">
      {list.map((item, index) => (
        <Card
          key={(item.title, index)}
          className="cursor-pointer p-2 text-center 
          dark:bg-black
          hover:scale-105 transform transition-all duration-100
          border border-zinc-300 dark:border-gray-500 rounded-lg 
          shadow-lg hover:shadow-xl dark:shadow-zinc-800"
          shadow="md"
        >
          <CardHeader className="flex text-xl justify-center lg:text-medium font-semibold">
            {item.title}
          </CardHeader>

          <CardBody className="overflow-visible p-0">
            <span className="mx-auto my-auto">{item.icon}</span>
          </CardBody>
          <CardFooter className="text-lg justify-around lg:justify-between lg:text-sm">
            <b>Valor: </b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
          <Button
            className="w-5/6 mx-auto mb-1 bg-blue-600 text-white mt-2"
            onClick={() => (window.location.href = item.url)}
          >
            Donar
          </Button>
        </Card>
      ))}
    </div>
  );
};
