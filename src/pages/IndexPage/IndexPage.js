import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StickyInfo from "../../components/IndexPage/StickyInfo";

const OnUpdateWarning = styled.div`
  height: 40em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DroppingWarningText = styled.p`
  font-size: 2em;
  font-weight: bold;
`;

const IndexPage = () => {
  const rootElements = document.getElementsByClassName("typewrite");

  const tick = (el, toRotate, period) => {
    period = parseInt(period, 10) || 2000;

    var i = this.loopNum % toRotate.length;
    var fullTxt = toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    el.innerHTML =
      '<span class="wrap typewrite_ml">' +
      this.txt +
      "</span> <span>개발자</span>";

    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      tick(el, JSON.parse(), period);
    }, delta);
  };

  //   return {
  //     loopNum: 0,
  //     txt: '',
  //     isDeleting: false,
  // }
  // tick: function

  for (var i = 0; i < rootElements.length; i++) {
    const rootToRotate = rootElements[i].getAttribute("data-type");
    const rootPeriod = rootElements[i].getAttribute("data-period");

    if (rootToRotate) {
      tick(rootElements[i], JSON.parse(rootToRotate), rootPeriod);
    }
  }

  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML =
    ".typewrite > .wrap { border-right: 0.1em solid hsl(0, 0%, 21%)}";
  document.body.appendChild(css);

  return (
    <>
      <div className="section" id="Index">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              {/* <OnUpdateWarning>
                <DroppingWarningText>공사중입니다 ..!</DroppingWarningText>
              </OnUpdateWarning> */}
              <section className="section">
                <p
                  className="typewrite typewrite_ml"
                  data-period="1700"
                  data-type='[ "함께 성장하고 싶은", "지식을 공유하며 배워가는", "발전에 기여하고 싶은"]'
                />

                <span className="wrap typewrite_ml"> </span>
                <Link className="title is-2" to="/">
                  한다영
                </Link>
                <br />
              </section>
              <hr />

              <section className="section">
                <h1 className="title is-3">
                  Projects
                  <button
                    className="button is-small is-rounded is-dark is-outlined"
                    onClick="getPage('portfolio');"
                  >
                    {`자세히 보기`}
                  </button>
                </h1>
                <div className="columns">
                  <div className="column">
                    <div className="box">
                      <b className="title is-4">Codeblue 👍 </b>
                      <span className="tag is-primary is-light">팀</span>{" "}
                      <span className="tag is-link is-light">85%</span>{" "}
                      <span className="tag is-warning is-light">천천히</span>
                      <br />
                      <span className="subtitle is-6 has-text-link has-text-right">
                        2019.12.02 - 2019.12.19
                      </span>
                      <br />
                      <small>의학지식 QnA 서비스</small>
                      <p className="has-text-right">
                        <Link
                          className="button is-normal"
                          to="http://dayounghan.com/codeblue"
                        >
                          바로가기
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="column">
                    <div className="box">
                      <b className="title is-4">Sakila ⏸</b>{" "}
                      <span className="tag is-primary is-light">개인</span>{" "}
                      <span className="tag is-link is-light">70%</span>{" "}
                      <span className="tag is-danger is-light">보류</span>{" "}
                      <br />
                      <span className="subtitle is-6 has-text-link has-text-right">
                        2019.10.02 - 2019.10.11
                      </span>
                      <br />
                      <small>상점관리시스템 CRM</small>
                      <p className="has-text-right">
                        <Link
                          className="button is-normal"
                          to="http://dayounghan.com/sakila/home.html"
                        >
                          바로가기
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="box">
                      <b className="title is-4">Employees ⏸</b>{" "}
                      <span className="tag is-primary is-light">개인</span>{" "}
                      <span className="tag is-link is-light">60%</span>{" "}
                      <span className="tag is-danger is-light">보류</span>
                      <br />
                      <span className="subtitle is-6 has-text-link has-text-right">
                        2019.10.17 - 2019.11.06
                      </span>
                      <br />
                      <small>사원정보관리시스템 HRMS</small>
                      <p className="has-text-right">
                        <Link
                          className="button is-normal"
                          to="http://dayounghan.com/employees/login"
                        >
                          바로가기
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="column">
                    <div className="box">
                      <b className="title is-4">BlueMarble ⏸ </b>{" "}
                      <span className="tag is-primary is-light">개인</span>{" "}
                      <span className="tag is-link is-light">70%</span>{" "}
                      <span className="tag is-danger is-light">보류</span>
                      <br />
                      <span className="subtitle is-6 has-text-link has-text-right">
                        2019.10.25 - 2019.11.13
                      </span>
                      <br />
                      <small>부루마불 보드게임</small>
                      <p className="has-text-right">
                        <Link
                          className="button is-normal"
                          to="http://dayounghan.com/bluemarble/game.html"
                        >
                          바로가기
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-6">
                    <div className="box">
                      <b className="title is-4">Puzzle ⏸</b>{" "}
                      <span className="tag is-primary is-light">개인</span>{" "}
                      <span className="tag is-link is-light">95%</span>{" "}
                      <span className="tag is-info is-light">마무리</span>
                      <br />
                      <span className="subtitle is-6 has-text-link has-text-right">
                        2019.08.16 - 2019.08.22
                      </span>
                      <br />
                      <small>카드 짝 맞추기 게임</small>
                      <p className="has-text-right">
                        <Link
                          className="button is-normal"
                          to="http://dayounghan.com/puzzle/index.html"
                        >
                          바로가기
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <hr />

              <section className="section" id="Education">
                <div className="container">
                  <h1 className="title is-3">Education</h1>
                  <p className="">
                    한국기술교육대학교 컴퓨터공학부 재학중
                    <span className="expdate">, (2021.02 - )</span>
                  </p>
                </div>
              </section>
              <hr />

              <section className="section" id="Experience">
                <div className="container">
                  <h1 className="title is-3">Work Experience</h1>
                  <p>
                    <span className="title is-6">____</span> 풀스택 웹개발자
                    <span className="expdate">, (2020.08 - 20201.01)</span>
                  </p>
                  <ul className="subtitle is-6">
                    <li>- 쇼핑몰 구축, 유지보수 및 기능 추가/고도화</li>
                    <li>
                      - 고도몰, 그누보드, 영카트등을 이용한 쇼핑몰에 기능
                      추가/고도화 및 유지보수
                    </li>
                    <li>
                      - 자바 스프링프레임워크를 이용한 관리시스템 설계 및 개발
                    </li>
                    <li>&nbsp;&nbsp;- 젠킨스를 이용한 빌드, 배포 자동화</li>
                    <li>
                      - 웹 퍼블리싱 및 Jquery를 이용한 웹 프론트 기능 구현
                    </li>
                  </ul>

                  <p>
                    <b>____</b> 백엔드 개발자
                    <span className="expdate">, (2020.02 - 2020.05)</span>
                  </p>
                  <ul className="subtitle is-6">
                    <li>- 자사 서비스 백엔드 개발</li>
                    <li>
                      - 자바 스프링기반의 자사 프레임워크를 사용한 API 개발{" "}
                    </li>
                  </ul>

                  <small className="expdate">회사명 임시 비공개 처리</small>
                  <hr />
                  <h1 className="title is-3">Other Experience</h1>
                  <ul>
                    <li>
                      - 대학교 통계자료 분석 및 문서화
                      <span className="expdate">, (2018.12 - 2018.12)</span>
                    </li>
                    <li>
                      - 초등학교 방과후 기초학력 교사
                      <span className="expdate">, (2018.10 - 2018.11)</span>
                    </li>
                  </ul>
                </div>
              </section>
              <hr />

              <section className="section" id="Skills">
                <div className="container">
                  <h1 className="title is-3">Skills</h1>
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
                          className="subtitle is-6 a_underline"
                          to="https://github.com/crazy-oung"
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
              </section>
              <hr />

              <section className="section" id="Awards">
                <div className="container">
                  <h1 className="title is-3">Awards &amp; Certificate</h1>
                  <p>
                    2016.09, 대한민국 평생학습박람회 Robot-Fun Festival
                    로봇씨름대회 <small className="bold"> 장려상</small>
                  </p>

                  {/* <hr className="light_hr" /> */}
                  <p>
                    2015.12, Red Award 디자인국제공모전{" "}
                    <small className="bold">특선</small>
                  </p>
                </div>
              </section>
            </div>

            <div className="column">
              <StickyInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
