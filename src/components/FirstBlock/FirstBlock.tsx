"use client";
import Image from "next/image";
import Link from "next/link";
import { BackGroundRadialLeft } from "../BackGroundRadialLeft";
import { BackGroundRadialRigth } from "../BackGroundRadialRigth";
import MotionTransition from "../MotionTransition/MotionTransition";
import { Reveal } from "../Reveal";

const FirstBlock = () => {
  return (
    <div className="relative p-4 md:py-40">
      <BackGroundRadialRigth />
      <BackGroundRadialLeft />
      <div className="grid max-w-5xl md:grid-cols-2 mx-auto">
        <div>
          <Reveal>
            <h1 className="text-5xl font-semibold">
              El nuevo{" "}
              <span className="block text-blue-300">banco digital</span> para
              todos
            </h1>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              repellat voluptatibus quisquam minus ducimus, quasi expedita nulla
              provident dolore eveniet unde illo doloribus molestias
              consequuntur maiores illum libero explicabo commodi.
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link
                href="#clients"
                className="px-4 py-3 rounded-md bg-blue-300 "
              >
                Empieza ahora
              </Link>
            </div>
          </Reveal>
        </div>
        <MotionTransition className="flex items-center justify-center">
          <Image
            src="/assets/cards-block.png"
            alt="card"
            width={450}
            height={450}
            className="h-auto w-72 md:w-full"
          />
        </MotionTransition>
      </div>
    </div>
  );
};

export default FirstBlock;
