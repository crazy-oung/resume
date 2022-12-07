import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "../../static/project/PROJECTS";

const HeaderLink = styled(Link)`
  margin: 0 2px 0 0;
  padding-left: 2px;
  color: #4a4a4a;
  text-decoration: underline;

  :hover {
    color: #363636;
  }
`;

const Header = styled.header`
  span {
    margin: 0 -2px 0 2px;
  }
`;

const ProjectHeader = ({ index, ...props }) => {
  let { q } = useParams();
  // alert(q);
  // const projectDetail = (q) => {
  //   return (

  //   );
  // };

  return (
    <Header className=" title is-3">
      <HeaderLink to="/">/</HeaderLink>
      <HeaderLink to="/projects">Projects</HeaderLink>

      {q && (
        <HeaderLink to={"/projects/" + q}> / {PROJECTS[q].NAME}</HeaderLink>
      )}
    </Header>
  );
};

export default ProjectHeader;
