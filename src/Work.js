import React from "react";

import ProjectCard from "./ProjectCard";
import projects from "./Projects";
class Work extends React.Component {
  state = {
    project: null
  };
  componentDidMount() {
    this.setState({
      project: projects[0]
    });
  }
  showProject(projects, num) {
    const shownProject = projects.find(project => project.index === num);
    this.setState({
      project: shownProject
    });
  }
  render() {
    return (
      <div className="mx-auto row">
        <div className="pt-4">
          <div className="list-group d-inline">
            <h4 onMouseOver={() => this.showProject(projects, 0)}>
              Arvo Beers
            </h4>
            <h4 onMouseOver={() => this.showProject(projects, 2)}>
              Skate-Mate
            </h4>
            <h4 onMouseOver={() => this.showProject(projects, 1)}>
              The Daily Bump
            </h4>
          </div>
        </div>
        <div className="col-lg border-none">
          {this.state.project != null && (
            <ProjectCard project={this.state.project} />
          )}
        </div>
      </div>
    );
  }
}

export default Work;
