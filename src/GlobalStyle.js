import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900&display=swap');

  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html, body, #root{
    font-family: 'Noto Sans KR', 'Noto Sans', sans-serif;
    height: 100%;
    width: 100%;
  }
  ::selection {
    background: hsl(0, 0%, 21%);
    color: #fff;
  }

  .trans {
    background: rgba(255, 204, 153, 0) !important;
  }

  .navbar-dropdown.is-boxed {
    box-shadow: 0 10px 30px 0 rgba(65, 65, 65, 0.1) !important;
  }

  .navbar-item {
    border-radius: .3rem !important;
  }

  .bd-dark-light {
    background: rgba(255, 255, 255, 0.1) !important;
  }

  .trans:hover {
    background: rgba(255, 204, 153, 0) !important;
  }

  .bg-dark {
    background: hsl(0, 0%, 21%);
    color: white;
  }

  .bg-orange-light {
    background: rgb(255, 153, 102, 0.6);
  }

  .navdark {
    background: rgba(0, 0, 0, 0.08) !important;
    shadow: rgba(0, 0, 0, 0.1);
  }

  .nav-mr {
    margin-right: 8px;
  }

  .nav-pr {
    padding-right: 0px;
    padding-left: 8px;
  }

  .typewrite_ml {
    font-size: 1.3rem;
  }

  .thumb {
    height: 180px;
    width: 180px;
    overflow: hidden;
    border-radius: 100%;
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
    border: 5px;
    border-color: #fff;
  }

  .thumb img {
    -ms-interpolation-mode: bicubic;
    /* Better image scaling in IE */
  }

  .light_hr {
    margin-top:5px;
    margin-bottom:1em
  }
  .bold {
    font-weight: 600;
  }
  .card-content {
    padding : .8em 0;
  }

  .content ul {
    list-style: disc outside;
    margin: .5em;
  }
  .content ul > li{
    list-style: none;
  }

  @media (max-width: 770px) {
    .fix_option {
      /* display: none; */
      position: inherit;
      width: 80%;
    }
  }

`;
