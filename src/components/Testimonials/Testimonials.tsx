import { BackGroundRadialLeft } from "../BackGroundRadialLeft";
import { Reveal } from "../Reveal";
import { Slide } from "./Slide";

export const Testimonials = () => {
  return (
    <div className="relative p-8 md:py-64" id="testimonials">
      <BackGroundRadialLeft />
      <div className="grid max-w-5xl gap-8 mx-auto my-6 md:grid-cols-2">
        <Reveal>
          <h2 className="text-5xl mb-5 font-semibold">
            Que dicen los clientes de nosotros
          </h2>
        </Reveal>
        <Reveal>
          <div className="self-center">
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam dolores fugiat voluptates iusto, veritatis consectetur
              laborum eveniet nihil doloremque tenetur dolorem eligendi iure
              labore corporis nisi reprehenderit distinctio? Ad, distinctio?
            </p>
          </div>
        </Reveal>
      </div>
      <Slide />
    </div>
  );
};
