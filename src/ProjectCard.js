import React from "react";

const ProjectCard = props => {
  return (
    <div className="col-sm">
      <h2>{props.project.title}</h2>
    </div>
  );
};

export default ProjectCard;
