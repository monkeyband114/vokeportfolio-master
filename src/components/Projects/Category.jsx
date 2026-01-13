import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  bankapp,
  ecomm,
  facesite,
  dispatch,
  mitter,
  robot,
  socichat,
  event,
  gamelearn,
} from "../../assets/projects";

const Category = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Miter Home",
      description:
        "This is  a discord like app built with Django for creating rooms and chat related functions",
      image: mitter,
      link: "https://github.com/monkeyband114/Mitter",
    },
    {
      id: 2,
      title: "Dispatch App",
      description:
        "This is an app for Connect with riders and get your packages delivered quickly and securely. Track your deliveries in real-time",
      image: dispatch,
      link: "http://repatcher.onrender.com",
    },
    {
      id: 3,
      title: "ADHD Cloud Based Notetaker",
      description:
        "A cloud-based note-taking app designed specifically for individuals with ADHD",
      image: facesite,
      link: "https://focusflow-gq19.onrender.com/",
    },
    {
      id: 4,
      title: "Movie Recomendation",
      description:
        "This is a movie recomendation app that recomend movies based on your prefrences",
      image: ecomm,
      link: "https://movierecomed.onrender.com/",
    },
    {
      id: 5,
      title: "Bank Homepage",
      description: "This is an Extensive design For a bank Home Page",
      image: bankapp,
      link: "https://github.com/monkeyband114/",
    },
    {
      id: 6,
      title: "Event Manager",
      description: "Event Management System for ticket generation",
      image: event,
      link: "http://repatcher.onrender.com",
    },
    {
      id: 7,
      title: "LMS",
      description:
        "A personalized Gamified learning Management system Your personalized learning journey ",
      image: gamelearn,
      link: "https://github.com/monkeyband114/",
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
                href={project.link}
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
