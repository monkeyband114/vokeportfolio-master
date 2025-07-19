import React from "react";
import EduWork from "./childcomponents/EduWork";
const Workhistory = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="flex flex-col items-center justify-center mb-4">
        <h2 className="font-semibold font-inter text-[32px]">Work History</h2>
        <p className="font-normal font-inter text-gray-500 text-[15px] leading-[24px] max-w-[436px] text-center">
          My professional experience spans backend development, full-stack
          engineering, and applied machine learning research across industries
          like finance, IoT, and cloud computing. I've led scalable deployments
          and cross-functional initiatives to drive performance, automation, and
          user engagement.
        </p>
      </div>
      <div className="bg-white dark:bg-darken pb-6 shadow-lg flex flex-col justify-between">
        <EduWork
          title="Dinstack"
          student="Backend Developer / Machine Learning Researcher"
          date="Jan 2023 – Present"
          certi="Python, Django, NLP, Docker, ML"
          para="Spearheaded backend development using Django, achieving a 35% performance boost. Built and deployed NLP-powered chatbots for banking using deep learning. Integrated third-party APIs and containerized services with Docker."
        />
        <div className="bg-gray-300 w-[90%] h-[1px] mt-4 mx-2" />
        <EduWork
          title="Abtech"
          student="Full-Stack Developer"
          date="Jun 2022 – Jan 2023"
          certi="Django, React.js, Node.js, IoT Security"
          para="Built full-stack web applications with Django and React.js. Designed IoT solutions with secure data protocols like MQTT and middleware authentication. Utilized tools like `drf-yasg` for API documentation and enforced strong session security using BCrypt."
        />
        <div className="bg-gray-300 w-[90%] h-[1px] mt-4 mx-2" />
        <EduWork
          title="Freelance – Upwork"
          student="Full-Stack Developer"
          date="Mar 2020 – Jun 2022"
          certi="Shopify, JavaScript, Python, Analytics"
          para="Delivered 15+ scalable Shopify apps, increasing engagement by 40%. Integrated analytics to boost retention and generate $200K+ in recurring revenue. Optimized code for performance, cutting load times by 50% and driving revenue growth across multiple clients."
        />
        <div className="bg-gray-300 w-[90%] h-[1px] mt-4 mx-2" />
        <EduWork
          title="Oseke"
          student="Developer Intern"
          date="Jun 2019 – Mar 2020"
          certi="Microcontrollers, IoT, Dashboard Dev"
          para="Developed microcontroller solutions for sensor data, reducing transmission latency by 60%. Designed interactive dashboards to manage over 10,000 IoT devices, cutting troubleshooting time by 40% and improving operational efficiency and engagement."
        />
      </div>
    </div>
  );
};

export default Workhistory;
