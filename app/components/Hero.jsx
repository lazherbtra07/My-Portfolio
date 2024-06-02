"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

export const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section>
      <div className="grid grid-cols-1 md:gap-y-10 md:text-center lg:grid-cols-12">
        <div className=" col-span-7 md:text-center place-self-center">
          <h1 className="text-white mb-4 md:text-center text-center lg:text-start text-4xl lg:text-6xl font-extrabold">
            <span className="  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 ">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "LazHer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p
            data-aos="fade-right"
            data-aos-offset="400"
            data-aos-easing="ease-in-sine"
            className="text-[#adb7be] text-center md:pr-10 lg:text-start mb-6 text-lg lg:text-xl"
          >
            In my role as a UI Designer and Web Developer,i working closely with
            cross-functional teams to translate design concepts into functional
            code. Whether it's designing user interfaces, implementing frontend
            components, or optimizing website performance, I am committed to
            delivering high-quality solutions that exceed expectations and drive
            business results.
          </p>
          <div className="text-center  md:text-start ">
            <Link
              href={"#contact"}
              className="px-5 py-2 rounded-full w-full sm:w-fit mr-4  bg-blue-500 text-white"
            >
              contact me
            </Link>
            <Link
              href={
                "https://drive.google.com/file/d/1u8xRuj6PM2drEwWxxBlWyRutLlgthl_Q/view?usp=sharing"
              }
              className="px-5 py-2 rounded-full w-full sm:w-fit   bg-pink-500 text-white"
            >
              Download Cv
            </Link>
          </div>
        </div>
        <div className=" col-span-5 place-self-center mt-4 lg:mt-0">
          <div className=" rounded-full bg-[#181818] w-[400px] h-[400px] relative">
            <Image
              className=" absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/Frame 1.png"
              alt="Hero image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
