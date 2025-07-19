import React from "react";
import EduWork from "./childcomponents/EduWork";

const Education = () => {
  return (
    <div
      id="Education"
      className="flex flex-col items-center justify-center mt-10">
      <div className="flex flex-col items-center justify-center mb-4 mt-2">
        <h2 className="font-semibold font-inter text-[32px]">Education</h2>
        <p className="font-normal font-inter text-gray-500 text-[15px] leading-[24px] max-w-[436px] text-center">
          My educational journey reflects a blend of rigorous academic training
          in computer science and continuous professional development through
          globally recognized certifications in data analytics and machine
          learning.
        </p>
      </div>
      <div className="bg-white pb-6 dark:bg-darken shadow-lg flex flex-col justify-between">
        <EduWork
          title="Federal University of Petroleum Resources "
          student="BSc. Computer Science"
          date="Graduated: 2022"
          certi="BSC"
          para="Acquired a strong theoretical and practical foundation in computer science, focusing on data structures, algorithms, systems design, and software development."
        />
        <div className="bg-gray-300 w-[90%] h-[1px] mt-4 mx-2" />
        <EduWork
          title="International Business Machines Corporation (IBM)"
          student="Professional Certificate"
          date="Completed: 2023"
          certi="IBM Machine Learning Specialist – Associate"
          para="Completed a professional certification focused on supervised/unsupervised learning, model evaluation, regression/classification models, and production-ready ML pipelines."
        />
        <div className="bg-gray-300 w-[90%] h-[1px] mt-4 mx-2" />
        <EduWork
          title="IBM / Coursera"
          student="Professional Certificate"
          date="Completed: 2023"
          certi="Python Data Analyst Certificate"
          para="Learned to apply data analysis techniques using Python, including NumPy, Pandas, data wrangling, visualization, and storytelling using data. Integrated practical coding exercises with real-world datasets."
        />
        <div className="bg-gray-300 w-[90%] h-[1px] mt-4 mx-2" />
        <EduWork
          title="Great Learning"
          student="Online Course"
          date="Completed: 2023"
          certi="Machine Learning Pipeline"
          para="Focused on implementing end-to-end ML pipelines, covering data preprocessing, model training, evaluation, and deployment strategies suitable for industry-grade applications."
        />
      </div>
    </div>
  );
};

export default Education;
