import React from "react";

const ProjectCard = props => {
  console.log(process.env.PUBLIC_URL + "./images/sm-screenshot.png");
  const { project } = props;
  return (
    <div className="col-sm">
      <div className="card text-white bg-opacity">
        <img src={project.src} className="card-img-top" />
        <div className="card-body">
          <h2 class="card-title">{project.title}</h2>
          <p>{project.description}</p>
          <p>
            <strong>Technology used:</strong> {project.tech.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
