import React, { Component } from "react";
import data from "../data.json";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import Img from "react-cool-img";

export default class Project extends Component {
  state = {
    projects: data
  };
  render() {
    const { projects } = this.state;
    return (
      
      <article id="projects">
        <h3 className="section-title">Recent Projects</h3>
        {projects.map((project, index) => (
          <div className="project">
          <Img className="project-img" alt={project.title} src={project.image} />
          <div className="project-info">
            <span className="project-number">0{index + 1}.</span>
            <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-stack">
          {project.stack.map(item => {
            return <span>{item}</span>
          })}
        </div>
            <div className="project-links">
              <a href={project.github}>
                <FaGithubSquare className="project-icon" />
              </a>
              <a href={project.url}>
                <FaShareSquare className="project-icon" />
              </a>
            </div>
            </div>
            </div>
        ))}
      </article>
      
    );
  }
}
