"use client";

import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

import { DonationL1Icon } from "./icons";

export const Cards = () => {
  const list = [
    {
      title: "Nivel 1",
      url: "https://mpago.la/2DEkFwk",
      price: "$370",
      icon: (
        <DonationL1Icon color="#990000" height={50} stroke="#FFF" width={50} />
      ),
    },
    {
      title: "Nivel 2",
      url: "https://mpago.la/2Pd3PvM",
      price: "$570",
      recommended: true,

      icon: <DonationL1Icon color="#AA0000" height={60} width={60} />,
    },
    {
      title: "Nivel 3",
      url: "https://mpago.la/2JfhYF8",
      price: "$970",
      icon: <DonationL1Icon color="#E60000" height={70} width={70} />,
    },
  ];

  return (
    <div className="gap-6 lg:gap-8 grid grid-cols-1 sm:grid-cols-3 w-full">
      {list.map((item, index) => (
        <>
          <Card
            key={(item.title, index)}
            className={`over cursor-pointer py-5 px-2 text-center 
            dark:bg-black
            hover:scale-105 transform transition-all duration-100
            border border-zinc-300 dark:border-gray-500 rounded-lg 
            shadow-lg hover:shadow-xl dark:shadow-zinc-800
            ${item.recommended && "border-1 border-blue-300 dark:border-blue-600 transform lg:scale-110 lg:hover:scale-125"}`}
          >
            <span
              className={`${item.recommended ? "visible" : "hidden"} text-sm lg:text-xs text-center font-semibold transform scale-75 rounded-md bg-green-700 text-white w-[140px] px-4 py-1 mx-auto -mt-4 `}
            >
              RECOMENDADO
            </span>

            <CardHeader className="flex text-2xl justify-center lg:text-2xl font-semibold mb-4 -mt-2">
              {item.title}
            </CardHeader>

            <CardBody className="overflow-visible p-0">
              <span className="mx-auto my-auto">{item.icon}</span>
            </CardBody>
            <CardFooter className="text-lg justify-around lg:justify-between lg:text-sm px-0 lg:px-5 pb-2 mt-4 lg:mt-2">
              <b>Valor: </b>
              <p className="text-default-500">
                {item.price} <span className="text-xs">UYU</span>
              </p>
            </CardFooter>
            <Button
              className="w-5/6 mx-auto mb-1 bg-blue-600 text-white mt-0"
              onClick={() => (window.location.href = item.url)}
            >
              Donar
            </Button>
          </Card>
        </>
      ))}
    </div>
  );
};
