import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ProjectList from "../../components/ProjectPage/ProjectList";
import ProjectDetail from "../../components/ProjectPage/ProjectDetail";

const ProjectPage = () => {
  return (
    <Switch>
      <Route path="/projects/:q" component={ProjectDetail} />
      <Route path="/" component={ProjectList} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default ProjectPage;
