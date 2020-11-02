import React from "react";

import ProjectCard from "./ProjectCard";
import projects from "./Projects";
class Work extends React.Component {
  state = {
    project: null
  };
  showProject(projects, num) {
    const shownProject = projects.find(project => project.index === num);
    this.setState({
      project: shownProject
    });
  }
  removeProject() {
    debugger;
  }
  render() {
    return (
      <div className="container row">
        <div className="pt-5">
          <ul>
            <li
              onMouseOver={() => this.showProject(projects, 2)}
              onMouseOut={() => this.removeProject()}
            >
              Skate-Mate
            </li>
          </ul>
        </div>
        <div className="pt-4">
          {this.state.project != null && (
            <ProjectCard project={this.state.project} />
          )}
        </div>
      </div>
    );
  }
}

export default Work;
