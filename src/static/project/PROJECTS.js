export const PROJECTS = [
  {
    NAME: "Hangang",
    STACK:
      "HTML, CSS, Javascript, React, React-query, Styled-component, Git, Slack, Zeplin",
    DUE: "2021.03 - 2021.06",
    DESCRIPTION: "한국기술교육대학교 강의평 웹 사이트 프론트엔드 개발",
    TASK: [
      {
        PART: "프론트 엔드 개발 (HTML, CSS, Javascript, React, React-query, Styled-component)",
        DESCRIPTION: ["- 강의평 상제 페이지 개발"],
      },
    ],
    TAGS: {
      TEAM_YN: "Y",
      PERFECTION_PER: "100",
      ONGOING_YN: "DONE",
    },
    DEMO_URL: "www.hangang.in",
    GITHUB_URL: "https://github.com/BCSDLab/HANGANG_FRONT_END",
    IMG_SRC:
      "https://raw.githubusercontent.com/BCSDLab/HANGANG_FRONT_END/develop/.github/images/hangang-banner.png",
    IMG_ALT: "한강 이미지",
  },
  {
    NAME: "CodeBlue",
    STACK: "HTML, CSS, BootStrap, JavaScript, Spring-boot, Java, MariaDB",
    DUE: "2019.12.02 - 2019.12.19",
    DESCRIPTION: "의학지식 QnA 서비스",
    TASK: [
      {
        PART: "기획",
        DESCRIPTION: ["서비스 구상 및 기획"],
      },
      {
        PART: "프론트 엔드 개발 (HTML, CSS, Javascript, JQuery, BootStrap)",
        DESCRIPTION: [
          "- 주요 템플릿 및 구성요소 디자인",
          "- 모바일 대응",
          "- Jquery 애니메이션 처리",
          "- ajax 데이터 처리",
          "- 통계데이터 시각화",
        ],
      },
      {
        PART: "백엔드 개발 (Mysql, MariaDB, Java, Spring-boot)",
        DESCRIPTION: [
          "- 통계 데이터 조회",
          "- 질의응답 기능 게시판 설계 및 분석",
          "- 태그기능 설계 및 개발",
        ],
      },
    ],
    TAGS: {
      TEAM_YN: "Y",
      PERFECTION_PER: "85",
      ONGOING_YN: "STOP",
    },
    DEMO_URL: "http://dayounghan.com/codeblue",
    GITHUB_URL: "https://github.com/crazy-oung/codeBlue",
    IMG_SRC: "/assets/image/project/codeblue.gif",
    IMG_ALT: "코드블루 이미지",
  },
  {
    NAME: "Sakila",
    STACK: "HTML, CSS, BULMA, JavaScript, JQuery -> Vue, Java, MySQL",
    DUE: "2019.10.02 -  2019.10.11",
    DESCRIPTION: "상점관리시스템 CRM",
    TASK: [
      {
        PART: "프론트 엔드 개발 (HTML, CSS, Javascript, JQuery, BootStrap → Vue, Bulama )",
        DESCRIPTION: [
          "- 주요 템플릿 및 구성요소 디자인",
          "- ajax 데이터 처리",
          "- JQuery, BootStrap → Vue, Bulama 리팩토링 ",
        ],
      },
      {
        PART: "백엔드 개발 (Mysql, MariaDB, Java, Spring-boot)",
        DESCRIPTION: [
          "- MySql 샘플 데이터베이스 Sakila를 활용한 데이터의 입출력 구현",
        ],
      },
    ],
    TAGS: {
      TEAM_YN: "N",
      PERFECTION_PER: "70",
      ONGOING_YN: "STOP",
    },
    DEMO_URL: "http://dayounghan.com/sakila/home.html",
    GITHUB_URL: "https://github.com/crazy-oung/sakila",
    IMG_SRC: "/assets/image/project/sakila.gif",
    IMAGE_ALT: "사킬라 이미지",
  },
  {
    NAME: "Employees",
    STACK: "JSP, CSS, BootStrap, JavaScript, Java, MariaDB",
    DUE: "2019.12.02 - 2019.12.19",
    DESCRIPTION: "ERP 간접구현",
    TASK: [
      {
        PART: "프론트 엔드 개발 (JSP, CSS, Javascript, JQuery, BootStrap)",
        DESCRIPTION: ["- BootStrap4를 이용한 웹페이지 구현"],
      },
      {
        PART: "백엔드 개발 (Mysql, MariaDB, Java, Spring)",
        DESCRIPTION: [
          "- MySql 샘플 데이터베이스 Employees를 활용한 데이터의 입출력 구현",
        ],
      },
    ],
    TAGS: {
      TEAM_YN: "Y",
      PERFECTION_PER: "85",
      ONGOING_YN: "STOP",
    },
    DEMO_URL: "http://ddayounghan.com/employees/",
    GITHUB_URL: "https://github.com/crazy-oung/employees",
    IMG_SRC: "/assets/image/project/emp.png",
    IMAGE_ALT: "사원조회 프로그램 이미지",
  },
  {
    NAME: "BlueMarble",
    STACK: "HTML, CSS, BootStrap, JavaScript",
    DUE: "2019.12.02 - 2019.12.19",
    DESCRIPTION: "자바스크립트 부루마불",
    TASK: [
      {
        PART: "프론트 엔드 개발 (HTML, CSS, Javascript, JQuery, BootStrap)",
        DESCRIPTION: [
          "- BootStrap3를 이용한 부루파불 웹게임 구현",
          "- 부루마불 규칙 자바스크립트 구현",
        ],
      },
    ],
    TAGS: {
      TEAM_YN: "Y",
      PERFECTION_PER: "85",
      ONGOING_YN: "STOP",
    },
    DEMO_URL: "http://dayounghan.com/bluemarble/game.html",
    GITHUB_URL: "https://github.com/crazy-oung/BlueMarble",
    IMG_SRC: "/assets/image/project/bluemarble.gif",
    IMAGE_ALT: "부루마블 이미지",
  },
  {
    NAME: "Puzzle",
    STACK: "HTML, CSS, BootStrap, JavaScript, Java, MariaDB",
    DUE: "2019.12.02 - 2019.12.19",
    DESCRIPTION: "웹 퍼즐 게임",
    TASK: [
      {
        PART: "프론트 엔드 개발 (HTML, CSS, Javascript, JQuery, BootStrap)",
        DESCRIPTION: [
          "- BootStrap4를 이용한 웹 퍼즐게임 홈페이지 구현",
          "- 퍼즐 전체보기 힌트 기능",
          "- 랭킹 조회 테이블 구현",
        ],
      },
      {
        PART: "백엔드 개발 (Mysql, MariaDB, Java, Spring)",
        DESCRIPTION: [
          "- 회원 디비및 퍼즐 게임 기록 데이터베이스 설계",
          "- 로그인 기능 구현",
          "- 회원별 플레이 기록 입출력 구현",
        ],
      },
    ],
    TAGS: {
      TEAM_YN: "Y",
      PERFECTION_PER: "85",
      ONGOING_YN: "STOP",
    },
    DEMO_URL: "http://dayounghan.com/puzzle",
    GITHUB_URL: "https://github.com/crazy-oung/puzzle",
    IMG_SRC: "/assets/image/project/puzzle.gif",
    IMAGE_ALT: "퍼즐 이미지",
  },
];
