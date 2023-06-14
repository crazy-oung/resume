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
} from "./ProjectsCard.style";
import { GithubIcon } from "./ProjectsCard.style";

const ProjectsCard = ({ index, ...props }) => {
  return (
    <>
      {props.project.NAME ? (
        <ProjectMain className="column">
          <ProjectBox className="box">
            <ContentSection>
              <ProjectTitle className="title is-4">
                {props.project.NAME}

                <Tag className="tag is-primary is-light">
                  {props.project.TAGS.TEAM_YN === "Y" ? "팀" : "개인"}
                </Tag>
                <Tag className="tag is-link is-light">
                  {props.project.TAGS.PERFECTION_PER}%
                </Tag>
                <Tag className="tag is-warning is-light">
                  {getTag(props.project.TAGS.ONGOING_YN)}
                </Tag>
              </ProjectTitle>

              <ProjectDue className="subtitle is-6 has-text-link">
                {props.project.DUE}
              </ProjectDue>

              <ProjectDesc>{props.project.DESCRIPTION}</ProjectDesc>
            </ContentSection>

            <LinkSection className="has-text-right">
              <ButtonLink
                className="button is-normal"
                to={"/projects/" + index}
              >
                바로가기
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

export default ProjectsCard;
