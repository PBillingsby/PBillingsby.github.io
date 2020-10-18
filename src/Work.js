import React from "react";

import ProjectCard from "./ProjectCard";
import projects from "./Projects";
const Work = () => {
  return (
    <div class="row mx-auto">
      {projects.map(project => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};

export default Work;
