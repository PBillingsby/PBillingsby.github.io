import React from "react";
const ProjectCard = props => {
  const { project } = props;
  const showInfo = (project, bool) => {
    const card = document.getElementsByClassName("card-info")[project.index];
    const cardParent = card.parentNode.parentElement;
    const cardImg = card.parentNode.parentElement.firstElementChild;
    if (bool === true) {
      card.classList = "card-info";
      cardParent.style.width = "30rem";
      cardImg.style.height = "10rem";
    } else if (bool === false) {
      card.classList += " hide-card";
      cardParent.style.width = "20rem";
      cardImg.style.height = "";
    }
  };
  return (
    <div className="mx-auto p-3">
      <div
        className="card text-white bg-opacity"
        onMouseEnter={() => showInfo(project, true)}
        onMouseLeave={() => showInfo(project, false)}
        style={{ width: "20rem" }}
      >
        <img src={project.src} className="card-img-top img-thumbnail" />
        <div className="card-body">
          <h2 class="card-title">{project.title}</h2>
          <div class="card-info hide-card">
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
