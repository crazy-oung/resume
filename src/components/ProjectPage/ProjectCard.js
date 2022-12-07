import React from "react";
import { getTag } from "../../utils/ProjectPage/projectUtil";
import {
  ButtonLink,
  Tag,
  ProjectThumbnail,
  ProjectDue,
} from "./ProjectCard.style";

const ProjectCard = ({ index, ...props }) => {
  return (
    <>
      {props.project.NAME ? (
        <section className="column">
          <div className="box">
            <div className="card-image">
              <figure className="image">
                <ProjectThumbnail
                  src={props.project.IMG_SRC}
                  alt={props.project.IMG_ALT}
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <b className="title is-4">{props.project.NAME}</b>
                <Tag className="tag is-primary is-light">
                  {props.project.TAGS.TEAM_YN === "Y" ? "팀" : "개인"}
                </Tag>
                <Tag className="tag is-link is-light">
                  {props.project.TAGS.PERFECTION_PER}%
                </Tag>
                <Tag className="tag is-warning is-light">
                  {getTag(props.project.TAGS.ONGOING_YN)}
                </Tag>
                <br />
                <ProjectDue className="subtitle is-6 has-text-link has-text-right">
                  {props.project.DUE}
                </ProjectDue>

                <small className="bold">{props.project.DESCRIPTION}</small>

                <small>{props.project.STACK}</small>
              </div>
            </div>
            <hr className="light_hr" />
            <p className="has-text-right">
              <ButtonLink
                className="button is-normal"
                to={{ pathname: props.project.DEMO_URL }}
                target="_blank"
              >
                데모보기
              </ButtonLink>
              <ButtonLink
                className="button is-normal"
                to={"/projects/" + index}
              >
                자세히 보기
              </ButtonLink>
              <ButtonLink
                className="button is-normal"
                to={props.project.GITHUB_URL}
              >
                <i className="fab fa-github"></i> GitHub
              </ButtonLink>
            </p>
          </div>
        </section>
      ) : (
        <section className="column"></section>
      )}
    </>
  );
};

export default ProjectCard;
