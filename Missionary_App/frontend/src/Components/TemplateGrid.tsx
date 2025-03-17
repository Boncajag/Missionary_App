import React from "react";
import { TemplateOption } from "./TemplateOption";

export const TemplateGrid = () => {
  return (
    <>
      <div className="flex gap-7 mt-8">
        <div className="flex flex-col">
          <h3 className="text-lg leading-none text-blue-950">
            Dress to Impress
          </h3>
          <TemplateOption type="dressToImpress" />
          <h3 className="self-center mt-8 text-lg leading-none text-blue-950">
            Bullet Point
          </h3>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="ml-6 text-lg leading-none text-blue-950">
            Jessica
          </h3>
          <TemplateOption type="jessica" />
          <h3 className="mt-8 ml-8 text-lg leading-none text-blue-950">
            Mary
          </h3>
        </div>
      </div>

      <div className="flex gap-7 self-stretch mt-3.5">
        <div className="flex flex-col flex-1">
          <TemplateOption type="bDog" />
          <h3 className="self-start mt-8 ml-6 text-lg leading-none text-blue-950">
            B-Dog
          </h3>

          <TemplateOption type="dearJohn" />
          <h3 className="self-center mt-8 text-lg leading-none text-blue-950">
            Dear John
          </h3>

          <TemplateOption type="letterFormat" />
        </div>

        <div className="flex flex-col flex-1">
          <TemplateOption type="carCar" />
          <h3 className="self-start mt-8 ml-6 text-lg leading-none text-blue-950">
            CarCar
          </h3>

          <TemplateOption type="carCarAlt" />
          <h3 className="self-start mt-8 ml-7 text-lg leading-none text-blue-950">
            Letter
          </h3>

          <TemplateOption type="letter" />
        </div>
      </div>
    </>
  );
};
