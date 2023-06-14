import React from "react";
import { PROJECTS } from "../../static/project/PROJECTS";
import ProjectCard from "./ProjectCard";
import ProjectHeader from "./ProjectHeader";

const ProjectList = () => {
  const render = () => {
    const result = [];
    if ((PROJECTS.length - 1) % 2 !== 0) PROJECTS.push({});

    for (let i = 1; i < PROJECTS.length; i += 2) {
      result.push(
        <div className="columns" key={i}>
          <ProjectCard key={PROJECTS[i].NAME} project={PROJECTS[i]} index={i} />
          <ProjectCard
            key={PROJECTS[i + 1].NAME}
            project={PROJECTS[i + 1]}
            index={i + 1}
          />
        </div>
      );
    }

    return result;
  };

  return (
    <>
      {/* <section id="portfolio"> */}
      <main className="container">
        <ProjectHeader />

        <section className="columns">
          <ProjectCard key={PROJECTS[0].NAME} project={PROJECTS[0]} index="0" />
        </section>

        {render()}
      </main>
      {/* </section> */}
    </>
  );
};

export default ProjectList;
