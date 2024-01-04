"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { BackGroundRadialRigth } from "../BackGroundRadialRigth";
import MotionTransition from "../MotionTransition/MotionTransition";
import { Reveal } from "../Reveal";
import { EffectCards } from "swiper/modules";
import { dataCards } from "./ChooseYourCards.data";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";

export const ChooseYourCards = () => {
  return (
    <div className="relative px-6 py-20 md:py-64 " id="tarjetas">
      <BackGroundRadialRigth />
      <div className="block max-w-5xl mx-auto md:grid md:grid-cols-2">
        <Reveal>
          <h2 className="text-5xl font-semibold">
            Elige la targeta que mas
            <span className="block text-blue-300">
              se adapta a tus necesidades
            </span>
          </h2>
        </Reveal>
        <div className="px-5">
          <MotionTransition>
            <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
              {dataCards.map(({ image, id }) => (
                <SwiperSlide key={id}>
                  <Image
                    src={image}
                    alt="Credit Card"
                    width={400}
                    height={300}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </MotionTransition>
        </div>
      </div>
    </div>
  );
};
