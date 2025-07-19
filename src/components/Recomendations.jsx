import React from "react";
import { staryellow } from "../assets/icons";
import { mike } from "../assets";
import { jeff, lezly, step } from "../assets/projects";

export const Rating = ({ title, body, pic, person, job }) => (
  <>
    <div className="bg-white flex flex-col px-4 py-4 items-start justify-between dark:bg-darken shadow-lg  transition hover:scale-110 duration-500">
      <div className="flex flex-row items-start mb-4">
        <img src={staryellow} alt="star" className="mr-2" />
        <img src={staryellow} alt="star" className="mr-2" />
        <img src={staryellow} alt="star" className="mr-2" />
        <img src={staryellow} alt="star" className="mr-2" />
        <img src={staryellow} alt="star" className="mr-2" />
      </div>
      <h3 className="font-medium text-[18px] mb-4">{title}</h3>
      <p className="font-normal text-[15px] text-gray-400">{body}</p>
      <div className="flex flex-row justify-center items-center">
        <div className="w-[80px] h-[80px]">
          <img src={pic} alt="pic" className="rounded-full" />
        </div>

        <div className="flex flex-col justify-between">
          <h4>{person}</h4>
          <p className="font-normal text-[15px] text-gray-400">{job}</p>
        </div>
      </div>
    </div>
  </>
);

const Recomendations = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="flex flex-col items-center justify-center mb-4">
        <h2 className="font-semibold font-inter text-[32px]">Recomendations</h2>
        <p className="font-normal font-inter text-gray-500 text-[15px] leading-[24px] max-w-[436px] text-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1  md:mb-0 mb-4 gap-4">
        <Rating
          title="Versatile and Technically Sharp"
          body=" versatile full stack developer with expertise in both frontend and backend technologies, bridging the gap between design and functionality. She consistently delivers elegant, production-ready features with clean, scalable code."
          pic={lezly} // Replace with actual image import or path
          person="Lesley Ayemi"
          job="Full Stack Developer"
        />

        <Rating
          title="Reliable Backend Specialist"
          body=" His ability to optimize data flow and API performance is unmatched, making him a core asset on any backend-focused team."
          pic={jeff} // Replace with actual image import or path
          person="Jeffrey Omamoke"
          job="Backend Developer"
        />

        <Rating
          title="Pixel-Perfect UI Developer"
          body="His eye for detail and ability to turn design mockups into highly interactive interfaces is exceptional."
          pic={step} // Replace with actual image import or path
          person="Shem Itoya"
          job="Frontend Developer"
        />
      </div>
    </div>
  );
};

export default Recomendations;
