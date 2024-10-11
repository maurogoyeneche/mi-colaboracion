"use client";

import React from "react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

const PurchaseCTA = ({ wording }: { wording?: boolean }) => {
  const item = {
    url: "https://mpago.la/2JfhYF8",
  };

  const handleNavigation = () => {
    window.open(item.url, "_blank");
  };

  return (
    <Card className="w-full md:w-4/6 mx-auto">
      {wording && (
        <CardBody className="text-center text-balance">
          Con tu compra, reservas tu lugar y contribuyes a cubrir los gastos del
          seminario, apoyando al Merendero de Griselda.
        </CardBody>
      )}
      <CardFooter className="flex justify-center">
        <Button
          className="justify-between"
          color="primary"
          onClick={handleNavigation}
        >
          <span>Adquiere tu entrada</span> <span> $970</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PurchaseCTA;
