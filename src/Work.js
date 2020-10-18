import React from "react";

import ProjectCard from "./ProjectCard";
import projects from "./Projects";
const Work = () => {
  return (
    <div class="row text-center">
      {projects.map(project => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};

export default Work;
