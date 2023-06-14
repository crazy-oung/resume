import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import ProjectHeader from "./ProjectHeader";
import StickyInfo from "../../components/IndexPage/StickyInfo";

import { GithubIcon } from "./ProjectCard.style";

import { PROJECTS } from "../../static/project/PROJECTS";
import { getTag } from "../../utils/ProjectPage/projectUtil";

import { ButtonLink } from "./ProjectCard.style";

const Subtitle = styled.p`
  margin: 0 !important;
  font-size: 15px;
  font-weight: 500;
`;

const TechStacks = styled.p`
  margin: 0 !important;
  margin-bottom: 1.5rem !important;
  font-size: 15px;
  font-weight: 500;
`;

const ProjectDue = styled.time`
  margin: 0 !important;
  display: block;
`;
const Tag = styled.span`
  margin-left: 5px;
`;

const ProjectDetail = ({ index, ...props }) => {
  let { q } = useParams();

  const render = (props) => {
    const result = [];
    props.DESCRIPTION.map((el) => result.push(<li key={el}>{el}</li>));
    return result;
  };
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <ProjectHeader />
              <div className="box">
                <div className="card-image">
                  <figure className="image">
                    <img
                      src={PROJECTS[q].IMG_SRC}
                      alt={PROJECTS[q].IMG_ALT}
                      style={{ borderRadius: "6px" }}
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <Subtitle>{PROJECTS[q].DESCRIPTION}</Subtitle>
                    <b className="title is-4"> {PROJECTS[q].NAME}</b>
                    <Tag className="tag is-primary is-light">
                      {PROJECTS[q].TAGS.TEAM_YN === "Y" ? "팀" : "개인"}
                    </Tag>
                    <Tag className="tag is-link is-light">
                      {PROJECTS[q].TAGS.PERFECTION_PER}%
                    </Tag>
                    <Tag className="tag is-warning is-light">
                      {getTag(PROJECTS[q].TAGS.ONGOING_YN)}
                    </Tag>
                    <ProjectDue className="subtitle is-6 has-text-link has-text-right">
                      {PROJECTS[q].DUE}
                    </ProjectDue>
                    <TechStacks className="has-text-right">
                      {PROJECTS[q].STACK}
                    </TechStacks>

                    <ul className="subtitle is-6" id="part">
                      {PROJECTS[q].TASK.map((props, taskq) => (
                        <li key={taskq}>
                          <strong>{props.PART}</strong>
                          <ul>{render(props)}</ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <hr className="light_hr" />
                <p className="has-text-right">
                  <ButtonLink
                    className="button is-normal"
                    target={"_blank"}
                    to={{ pathname: PROJECTS[q].DEMO_URL }}
                  >
                    데모보기
                  </ButtonLink>

                  <ButtonLink
                    className="button is-normal"
                    target={"_blank"}
                    to={{ pathname: PROJECTS[q].GITHUB_URL }}
                  >
                    {GithubIcon} GitHub
                  </ButtonLink>
                </p>
              </div>
            </div>

            <StickyInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
