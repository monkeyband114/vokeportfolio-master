import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  bankapp,
  ecomm,
  facesite,
  keycard,
  mitter,
  robot,
  socichat,
} from "../../assets/projects";

const Category = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Miter Home",
      description:
        "This is  a discord like app built with Django for creating rooms and chat related functions",
      image: mitter,
    },
    {
      id: 2,
      title: "Keycard System",
      description:
        "This is an IoT and Embedded systems Based Project using Esp32 and PHP based server",
      image: keycard,
    },
    {
      id: 3,
      title: "Memories App",
      description:
        "A social app bulit for photo sharing using React, Node js and MongoDB",
      image: facesite,
    },
    {
      id: 4,
      title: "Ecommerce shop",
      description:
        "This is a multi vendor ecomerce store built with the django web framework",
      image: ecomm,
    },
    {
      id: 5,
      title: "Bank Homepage",
      description: "This is an Extensive design For a bank Home Page",
      image: bankapp,
    },
    {
      id: 6,
      title: "Mecanum Omini Direction",
      description:
        "this is an omini directional mecanum IoT base robot built for process automantion as it is able to recaul previous movements",
      image: robot,
    },
    {
      id: 7,
      title: "Campain Manager",
      description:
        "An Ads campaign manager built with Django rest framework and Next js",
      image: "https://via.placeholder.com/300",
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto py-10 dark:bg-fullBlack">
      <h1 className="text-4xl font-bold text-center mb-10 dark:text-gray-100">
        All Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl dark:bg-fullBlack">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4 dark:text-gray-400">
                {project.description}
              </p>

              <a
                href="https://github.com/monkeyband114"
                className="bg-brightyellow text-white px-4 py-2 rounded-lg hover:bg-brightyellow transition-colors duration-300 dark:bg-brightyellow dark:hover:bg-brightyellow">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
