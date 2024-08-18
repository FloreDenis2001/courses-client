import React from "react";
import ButtonFull from "./ButtonFull";
import trainer from "@/assets/trainer.jpg";
import Image from "next/image";
import ButtonBorder from "./ButtonBorder";

const HeroSection = () => {
  return (
    <section className="font-jakarta px-6 ">
      <h1 className="font-extrabold text-4xl mb-2">
        Intră în lumea fascinantă a beauty-ului
      </h1>
      <span className="font-thin text-sm mb-2">
        Descoperă secretele frumuseții cu cursurile noastre exclusive, concepute
        pentru a-ți perfecționa abilitățile și a-ți transforma pasiunea în
        carieră. Ești gata pentru această călătorie?
      </span>
      <div className="flex flex-row gap-4 mt-4">
        <Image
          src={trainer}
          width={150}
          height={150}
          className="rounded-2xl"
          alt="no-trainer"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-extrabold  text-3xl">Ana Buda</h3>
            <span className="text-primary text-light text-md">
              Expert Beauty Artist
            </span>
          </div>

          <div className="flex flex-col gap-2 ">
            <ButtonFull text="Vezi cursurile" />
            <ButtonBorder text="Invata mai multe" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
