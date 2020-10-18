import React from "react";

const ProjectCard = props => {
  const { project } = props;
  return (
    <div className="col-sm">
      <div className="card text-white bg-opacity">
        <h2 class="card-title">{project.title}</h2>
        <img className="card-img-top" src={project.src} />
        <div className="card-body">
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
