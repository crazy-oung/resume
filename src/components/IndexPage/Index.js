import React from "react";

import {
  StyledFooter,
  FooterContent,
  LeftSection,
  CenterSection,
  RightSection,
  Shortcut,
  ShortcutLink,
  ExternalSection,
  ExternalSectionButton,
  ExternalLink,
  HangangLogo,
  FacebookIconFigure,
  HomeIconFigure,
  CopyRight,
} from "./Footer.style";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <LeftSection>
          <HangangLogo></HangangLogo>
        </LeftSection>

        <CenterSection>
          <Shortcut>
            <ShortcutLink to="/lectures">강의평</ShortcutLink>
            <ShortcutLink to="/resources">강의자료</ShortcutLink>
            <ShortcutLink to="/timetable">시간표</ShortcutLink>
          </Shortcut>

          <ExternalSection>
            <ExternalSectionButton>
              <ExternalLink to="https://bcsdlab.com/">
                BCSD Lab 바로가기
              </ExternalLink>
            </ExternalSectionButton>
            <ExternalSectionButton>
              <ExternalLink to="https://www.koreatech.ac.kr/kor/Main.do">
                코리아텍 바로가기
              </ExternalLink>
            </ExternalSectionButton>
            <ExternalSectionButton>
              <ExternalLink to="https://portal.koreatech.ac.kr/login.jsp">
                아우누리 바로가기
              </ExternalLink>
            </ExternalSectionButton>
            <ExternalSectionButton>
              <ExternalLink to="/#">개인정보 처리방침</ExternalLink>
            </ExternalSectionButton>
          </ExternalSection>

          <CopyRight>
            COPYRIGHT © {new Date().getFullYear()} BCSD LAB ALL RIGHTS RESERVED.
          </CopyRight>
        </CenterSection>

        <RightSection>
          <ExternalLink to="https://www.facebook.com/BCSD-Lab-1727922507422214/">
            <FacebookIconFigure></FacebookIconFigure>
          </ExternalLink>
          <ExternalLink to="/">
            <HomeIconFigure></HomeIconFigure>
          </ExternalLink>
        </RightSection>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
