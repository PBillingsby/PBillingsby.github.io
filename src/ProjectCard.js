import React from "react";

const ProjectCard = props => {
  const { project } = props;

  return (
    <div>
      <div
        className="card border border-black text-white bg-opacity"
        style={{ width: "50rem" }}
      >
        <img src={project.src} className="card-img-top" />
        <div className="card-body text-center">
          <h2 class="card-title">{project.title}</h2>
          <div class="card-info">
            <p>{project.description}</p>
            <p>
              <strong>Technology used:</strong> {project.tech.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
