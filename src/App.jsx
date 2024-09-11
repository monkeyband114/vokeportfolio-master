import React from "react";
// import "./App.css";
import { Education, Services, Top } from "./components";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Project from "./components/Projects/Project";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />}></Route>
      <Route path="projects" element={<Projects />}>
        <Route path=":projectId" element={<Project />} />
      </Route>
      <Route path="education" element={<Education />}></Route>
      <Route path="services" elament={<Services />}></Route>
    </Routes>
  );
};

export default App;
