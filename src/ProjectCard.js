import React from "react";

const ProjectCard = props => {
  const { project } = props;
  return (
    <div>
      <div className="card mb-1 mx-auto bg-opacity" style={{ width: "40rem" }}>
        <div className="card-body row ">
          <div className="col-8 float-left">
            <span className="d-inline-flex">
              <h2>{project.title}</h2>{" "}
              <a
                href={project.url}
                rel="noopener noreferrer"
                target="_blank"
                className="p-2 pt-2 blue-text"
              >
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </span>
            <p>{project.about}</p>
            <p>{project.description}</p>
            <p>{project.strategies}</p>
          </div>
          <div className="col-sm">
            <div class="card-info pt-4">
              <ul>
                {project.tech
                  .sort(function(a, b) {
                    return a.length - b.length;
                  })
                  .map(tech => (
                    <li>{tech}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
