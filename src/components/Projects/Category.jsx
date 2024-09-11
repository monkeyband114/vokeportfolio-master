import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Category = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project One",
      description: "This is a brief description of Project One.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Project Two",
      description: "This is a brief description of Project Two.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Project Three",
      description: "This is a brief description of Project Three.",
      image: "https://via.placeholder.com/300",
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto py-10 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-10 dark:text-gray-100">
        All Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl dark:bg-gray-800">
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
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 dark:bg-blue-700 dark:hover:bg-blue-800">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
