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
        <DonationL1Icon
          color="#990000"
          height={50}
          stroke="#FF3333"
          width={50}
        />
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
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 ">
      {list.map((item, index) => (
        <>
          <Card
            key={(item.title, index)}
            className={`flex flex-col justify-between cursor-pointer text-center box-border w-full lg:w-[218px] h-[280px] 
            hover:scale-105 transform transition-all duration-100 px-2 pt-8 pb-4
            border border-zinc-300 dark:border-gray-600  
            shadow-lg hover:shadow-xl dark:shadow-zinc-800
            ${item.recommended && "border-1 transform lg:scale-110 lg:hover:scale-125"}`}
            style={{
              background: item.recommended
                ? "linear-gradient(135deg, #2E0854, #4B0082, #8A2BE2, #9400D3, #9932CC)"
                : "linear-gradient(135deg, #18181B, #27272A, #3F3F46)",
            }}
          >
            <span
              className={`${item.recommended ? "visible" : "hidden"} text-sm lg:text-xs text-center font-semibold transform scale-75 rounded-2xl border  text-white w-[140px] px-4 py-1 mx-auto -mt-4 `}
            >
              RECOMENDADO
            </span>

            <CardHeader className="flex text-4xl justify-center lg:text-4xl font-semibold  ">
              {item.title}
            </CardHeader>

            <CardBody>
              <span className="mx-auto my-auto text-2xl p-0">
                {item.price} <span className="text-xl">UYU</span>
              </span>
            </CardBody>
            <CardFooter>
              <Button
                className={`w-full mx-auto text-white p-0 m-0 text-xl py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                  item.recommended
                    ? "bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 opacity-90"
                    : "bg-purple-600 hover:bg-purple-700 focus:ring-purple-500"
                }`}
                onClick={() => (window.location.href = item.url)}
              >
                Donar
              </Button>
            </CardFooter>
          </Card>
        </>
      ))}
    </div>
  );
};
