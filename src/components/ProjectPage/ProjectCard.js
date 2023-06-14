import React from "react";
import { getTag } from "../../utils/ProjectPage/projectUtil";
import {
  ProjectMain,
  ProjectBox,
  ImgSection,
  ContentSection,
  ProjectTitle,
  ProjectDesc,
  ProjectTechStacks,
  LinkSection,
  ButtonLink,
  Tag,
  ProjectThumbnail,
  ProjectDue,
} from "./ProjectCard.style";
import { GithubIcon } from "./ProjectCard.style";

const ProjectCard = ({ index, ...props }) => {
  return (
    <>
      {props.project.NAME ? (
        <ProjectMain className="column">
          <ProjectBox className="box">
            <ImgSection className="card-image">
              <figure className="image">
                <ProjectThumbnail
                  src={props.project.IMG_SRC}
                  alt={props.project.IMG_ALT}
                  style={{ borderRadius: "6px" }}
                />
              </figure>
            </ImgSection>

            <ContentSection className="card-content">
              <div className="content">
                <ProjectTitle className="title">
                  {props.project.NAME}
                </ProjectTitle>

                <Tag className="tag is-primary is-light">
                  {props.project.TAGS.TEAM_YN === "Y" ? "팀" : "개인"}
                </Tag>
                <Tag className="tag is-link is-light">
                  {props.project.TAGS.PERFECTION_PER}%
                </Tag>
                <Tag className="tag is-warning is-light">
                  {getTag(props.project.TAGS.ONGOING_YN)}
                </Tag>

                <ProjectDue className="subtitle is-6 has-text-link has-text-right">
                  {props.project.DUE}
                </ProjectDue>

                <ProjectDesc>{props.project.DESCRIPTION}</ProjectDesc>
                <ProjectTechStacks>{props.project.STACK}</ProjectTechStacks>
              </div>
            </ContentSection>

            <LinkSection className="has-text-right">
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
                to={{ pathname: props.project.GITHUB_URL }}
                target="_blank"
              >
                {GithubIcon} GitHub
              </ButtonLink>
            </LinkSection>
          </ProjectBox>
        </ProjectMain>
      ) : (
        <section className="column"></section>
      )}
    </>
  );
};

export default ProjectCard;
