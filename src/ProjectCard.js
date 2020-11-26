import React from "react";

const ProjectCard = props => {
  const { project } = props;

  return (
    <div>
      <div
        className="card mb-1 mx-auto border border-black bg-opacity"
        style={{ width: "40rem" }}
      >
        <div className="card-body row ">
          <div className="col-8 text-center">
            <h2>{project.title}</h2>
            <p>{project.about}</p>
            <p>{project.description}</p>
          </div>
          <div className="col-sm">
            <div class="card-info">
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
