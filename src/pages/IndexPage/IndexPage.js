import React from "react";
import { Link } from "react-router-dom";
import StickyInfo from "../../components/IndexPage/StickyInfo";
import ProjectsCard from "../../components/IndexPage/ProjectsCard";
import { PROJECTS } from "../../static/project/PROJECTS";

import {
  Main,
  MainArticle,
  MainContainer,
  OnUpdateWarning,
  DroppingWarningText,
  ContentSection,
  ContentTitle,
  ContentTitleButton,
  PauseIcon,
  DefaultText,
  DueDate,
  DisableText,
} from "./IndexPage.style";

const IndexPage = () => {
  const isUpdating = false;

  const renderProjects = () => {
    const result = [];
    if ((PROJECTS.length - 1) % 2 !== 0) PROJECTS.push({});

    for (let i = 1; i < PROJECTS.length; i += 2) {
      result.push(
        <div className="columns" key={i}>
          <ProjectsCard
            key={PROJECTS[i].NAME}
            project={PROJECTS[i]}
            index={i}
          />
          <ProjectsCard
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
    <Main className="section">
      <MainContainer className="container">
        <div className="columns">
          <MainArticle className="column is-8">
            {isUpdating && (
              <OnUpdateWarning>
                <DroppingWarningText>공사중입니다.</DroppingWarningText>
              </OnUpdateWarning>
            )}

            <ContentSection className="section">
              <Link className="title is-2" to="/">
                한다영
              </Link>
            </ContentSection>

            <ContentSection className="section">
              <ContentTitle className="title is-3">
                Projects
                <ContentTitleButton
                  className="button is-small is-rounded is-dark is-outlined"
                  to="/projects"
                >
                  자세히 보기
                </ContentTitleButton>
              </ContentTitle>
              <section className="columns">
                <ProjectsCard
                  key={PROJECTS[0].NAME}
                  project={PROJECTS[0]}
                  index="0"
                />
              </section>
              {renderProjects()}
            </ContentSection>

            <ContentSection className="section" id="Education">
              <ContentTitle className="title is-3">Education</ContentTitle>
              <DefaultText>
                한국기술교육대학교 컴퓨터공학부 재학중 (편입학)
                <DueDate>, (2021.02 - )</DueDate>
              </DefaultText>
            </ContentSection>

            <ContentSection className="section" id="Experience">
              <ContentTitle className="title is-3">
                Work Experience
              </ContentTitle>
              <DefaultText>
                {/* <b className="title is-6">____</b> */}
                풀스택 웹개발자
                <DueDate>, (2020.08 - 20201.01)</DueDate>
              </DefaultText>
              <ul className="subtitle is-6">
                <li>- 쇼핑몰 구축, 유지보수 및 기능 추가/고도화</li>
                <li>
                  - 고도몰, 그누보드, 영카트등을 이용한 쇼핑몰에 기능
                  추가/고도화 및 유지보수
                </li>
                <li>- 웹 퍼블리싱 및 Jquery를 이용한 웹 프론트 기능 구현</li>
                <li>
                  - 자바 스프링프레임워크를 이용한 관리시스템 설계 및 개발
                  <ul
                    style={{
                      marginLeft: "6px",
                      fontSize: "15px",
                      marginTop: "2px",
                    }}
                  >
                    <li>- 전자정부프레임워크 이용</li>
                    <li>- 젠킨스를 이용한 빌드, 배포 자동화</li>
                  </ul>
                </li>
              </ul>

              <DefaultText>
                {/* <b className="title is-6">____</b>  */}
                백엔드 개발자
                <DueDate>, (2020.02 - 2020.05)</DueDate>
              </DefaultText>
              <ul className="subtitle is-6">
                <li>- 자사 서비스 백엔드 개발</li>
                <li>- 자바 스프링기반의 자사 프레임워크를 사용한 API 개발</li>
              </ul>

              {/* <DisableText>회사명 임시 비공개 처리</DisableText> */}
            </ContentSection>

            <ContentSection className="section">
              <ContentTitle className="title is-3">
                Other Experience
              </ContentTitle>
              <ul className="subtitle is-6" style={{ margin: "auto" }}>
                <li>
                  - 대학교 통계자료 분석 및 문서화
                  <DueDate>, (2018.12 - 2018.12)</DueDate>
                </li>
                <li>
                  - 초등학교 방과후 기초학력 교사
                  <DueDate>, (2018.10 - 2018.11)</DueDate>
                </li>
              </ul>
            </ContentSection>

            <ContentSection className="section" id="Skills">
              <div className="container">
                <ContentTitle className="title is-3">Skills</ContentTitle>
                <span className="title is-6">Frontend</span>
                <hr className="light_hr" />
                <div className="columns ">
                  <div className="column">
                    <div className="">
                      <b className="subtitle is-6">HTML</b>
                    </div>
                  </div>
                  <div className="column">
                    <div className="">
                      <b className="subtitle is-6">CSS</b>
                    </div>
                  </div>
                  <div className="column">
                    <div className="">
                      <b className="subtitle is-6">JavaScript</b>
                    </div>
                  </div>
                  <div className="column">
                    <div className="">
                      <b className="subtitle is-6">JQuery</b>
                    </div>
                  </div>
                </div>
                <div className="columns ">
                  <div className="column">
                    <div className="">
                      <b className="subtitle is-6">Vue</b>
                    </div>
                  </div>
                  <div className="column">
                    <div className="">
                      <b className="subtitle is-6">React</b>
                    </div>
                  </div>
                  <div className="column">
                    <div className="">
                      <b className="subtitle is-6"></b>
                    </div>
                  </div>
                  <div className="column">
                    <div className="">
                      <b className="subtitle is-6"></b>
                    </div>
                  </div>
                </div>
                <span className="title is-6">Backend</span>
                <hr className="light_hr" />
                <div className="columns ">
                  <div className="column">
                    <div className="">
                      <b className="subtitle is-6">JAVA</b>
                    </div>
                  </div>
                  <div className="column">
                    <div className="">
                      <b className="subtitle is-6">MySql</b>
                    </div>
                  </div>
                  <div className="column">
                    <div className="">
                      <b className="subtitle is-6">JSP</b>
                    </div>
                  </div>
                  <div className="column">
                    <div className="">
                      <b className="subtitle is-6">PHP</b>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-3 ">
                    <div className="">
                      <b className="subtitle is-6">MySQL</b>
                    </div>
                  </div>
                  <div className="column">
                    <div className="">
                      <b className="subtitle is-6">MariaDB</b>
                    </div>
                  </div>
                  <div className="column">
                    <div className="">
                      <b className="subtitle is-6">Spring</b>
                    </div>
                  </div>
                  <div className="column is-3">
                    <div className="">
                      <b className="title is-6">ETC</b>
                      <small className="subtitle is-7">
                        (C, C++, Python, Android)
                      </small>
                    </div>
                  </div>
                </div>
                <span className="title is-6">Tool</span>
                <hr className="light_hr" />
                <div className="columns">
                  <div className="column">
                    <div className="">
                      <Link
                        className="subtitle is-6"
                        to={{ pathname: "https://github.com/crazy-oung" }}
                        target="_blank"
                      >
                        Git
                      </Link>
                    </div>
                  </div>
                  <div className="column">
                    <div className="">
                      <b className="subtitle is-6">SVN</b>
                    </div>
                  </div>
                </div>

                <span className="title is-6">ETC.</span>
                <hr className="light_hr" />
                <div className="columns ">
                  <div className="column is-3">
                    <div className="">
                      <b className="subtitle is-6">PhotoShop</b>
                    </div>
                  </div>
                </div>
              </div>
            </ContentSection>

            <ContentSection className="section" id="Awards">
              <ContentTitle className="title is-3">
                Awards {`&`} Certificate
              </ContentTitle>
              <ul className="subtitle is-6" style={{ margin: "auto" }}>
                <li>
                  <DefaultText>
                    2016.09, 대한민국 평생학습박람회 Robot-Fun Festival
                    로봇씨름대회 <small className="bold"> 장려상</small>
                  </DefaultText>
                </li>
                <li>
                  <DefaultText>
                    2015.12, Red Award 디자인국제공모전
                    <small className="bold"> 특선</small>
                  </DefaultText>
                </li>
              </ul>
            </ContentSection>
          </MainArticle>

          <StickyInfo />
        </div>
      </MainContainer>
    </Main>
  );
};

export default IndexPage;
