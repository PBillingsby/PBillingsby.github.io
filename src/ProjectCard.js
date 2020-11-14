import React from "react";

const ProjectCard = props => {
  const { project } = props;

  return (
    <div>
      <div
        className="card mb-1 border border-black text-dark bg-opacity"
        style={{ width: "55rem" }}
      >
        <h2 class="card-title">{project.title}</h2>
        <div className="card-body row text-center">
          <div className="col">
            <img src={project.src} className="card-img-top" />
          </div>
          <div className="col-sm">
            <div class="card-info">
              <p>{project.description}</p>
              <p>
                <strong>Technology used:</strong> {project.tech.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
