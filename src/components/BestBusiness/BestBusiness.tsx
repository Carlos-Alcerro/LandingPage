import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BackGroundRadialLeft } from "../BackGroundRadialLeft";
import { Reveal } from "../Reveal";
import { dataFeaturesBusiness } from "./BestBusiness.data";

const BestBusiness = () => {
  return (
    <div className="relative px-6 py-20 md:py-64 " id="features">
      <BackGroundRadialLeft />
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="text-5xl font-semibold">
              <span className="block text-blue-300">Tu haces el negocio</span>
              nosotros manejamos <br />
              el dinero
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              deserunt, optio doloribus voluptatibus iusto voluptatem?
              Blanditiis quod molestiae dolorum quo impedit alias ratione quia,
              atque nihil ut. Repellendus, incidunt nemo.
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link
                href="#clients"
                className="px-4 py-3 rounded-md bg-blue-300"
              >
                Elige tu plan
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="grid items-center py-5 md:p-8">
          {dataFeaturesBusiness.map(({ id, icon, title, description }) => (
            <Reveal key={id}>
              <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-gray-500">
                <Image
                  src={`/assets/${icon}.png`}
                  alt={title}
                  width={40}
                  height={40}
                />
                <div>
                  <h4 className="text-gray-100">{title}</h4>
                  <p className="text-gray-300">{description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestBusiness;
