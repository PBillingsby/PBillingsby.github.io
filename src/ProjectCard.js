import React from "react";

const ProjectCard = props => {
  const { project } = props;

  return (
    <div>
      <div
        className="card mb-1 border border-black bg-opacity"
        style={{ width: "55rem" }}
      >
        <div className="card-body row ">
          <div className="col-8">
            <img
              src={project.src}
              className="card-img-top img-thumbnail border border-dark rounded"
            />
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
