import React from "react";
import { InfoLink } from "../../IndexPage/StickyInfo.style";

const Footer = () => {
  return (
    <footer className="footer trans container">
      <p>
        ⓒ 2019 - 2023
        <InfoLink
          className="title is-6"
          target={"_blank"}
          to={{ pathname: "https://github.com/crazy-oung" }}
          style={{ display: "inline-block", marginLeft: "5px" }}
        >
          Dayoung Han
        </InfoLink>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
