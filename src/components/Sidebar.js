import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CgGirl, CgWebsite, CgBriefcase, CgRadioChecked } from "react-icons/cg";

function Sidebar() {
  return (
    <Wrapper>
      <div className="box">
        <NavLink
          to="/personal"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="content">
            <CgGirl />
            <h4>Personal</h4>
          </div>
        </NavLink>
      </div>
      <div className="box">
        <NavLink
          to="/experience"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="content">
            <CgBriefcase />
            <h4>Work</h4>
          </div>
        </NavLink>
      </div>

      <div className="box">
        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="content">
            <CgRadioChecked />
            <h4>Skills </h4>
          </div>
        </NavLink>
      </div>
      <div className="box">
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="content">
            <CgWebsite />
            <h4>Projects </h4>
          </div>
        </NavLink>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-top: 50px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 110px;
  height: 100%;
  .box {
    width: 100px;
    height: 100px;
    background: #fff;
    color: #ff9000;
    margin: 0 0 10px 10px;
    a {
      position: relative;
      text-decoration: none;
      color: #ff9000;
      display: block;
      height: 100%;
      &.active,
      &.active h4 {
        color: #2f3c4f !important;
      }
      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        svg {
          margin: auto;
          width: 50%;
          height: 50%;
          &:hover {
            width: 80%;
            height: 80%;
          }
        }
        h4 {
          margin: auto;
          font-size: 16px;
          font-weight: bold;
          color: #ff9000;
        }
      }
    }
  }
  @media screen and (max-width: 779px) {
    padding-top: 0;
    flex-direction: row;
    min-height: fit-content;
    justify-content: center;
    width: 100%;
    height: 110px;
    z-index: 1102;
    .box {
      margin: 0;
    }
  }
`;

export default Sidebar;
