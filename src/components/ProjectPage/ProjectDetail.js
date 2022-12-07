import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "../../static/project/PROJECTS";
import { getTag } from "../../utils/ProjectPage/projectUtil";
import ProjectHeader from "./ProjectHeader";
import StickyInfo from "../../components/IndexPage/StickyInfo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const DescriptionText = styled.p`
  margin: 0;
  margin-left: 12px;
`;
const ProjectDue = styled.time`
  margin: 0;
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
                    <img src={PROJECTS[q].IMG_SRC} alt={PROJECTS[q].IMG_ALT} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <DescriptionText>{PROJECTS[q].DESCRIPTION}</DescriptionText>
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
                    <DescriptionText className="has-text-right">
                      {PROJECTS[q].STACK}
                    </DescriptionText>

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
                  <Link
                    className="button is-normal"
                    target={"_blank"}
                    to={{ pathname: PROJECTS[q].DEMO_URL }}
                  >
                    데모보기
                  </Link>

                  <Link
                    className="button is-normal"
                    to={PROJECTS[q].GITHUB_URL}
                  >
                    <FontAwesomeIcon icon={solid("user-secret")} />
                    <FontAwesomeIcon icon={regular("coffee")} />
                    <FontAwesomeIcon
                      icon={icon({ name: "coffee", style: "solid" })}
                    />
                    <FontAwesomeIcon icon={brands("twitter")} />
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                    GitHub
                  </Link>
                </p>
              </div>
            </div>

            <section className="column">
              <StickyInfo />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
