import React, { forwardRef } from "react";
import styled from 'styled-components';
import Sidebar from "../components/Sidebar";
import TabsSkills from '../components/TabsSkills';

const Skills = forwardRef((props, ref) => {
  return (
    <Wrapper>
      <div className="top"></div>
      <div className="main-content">
      <Sidebar/>
      <div className="container">
        <div className="tabs-container" ref={ref}>
          <TabsSkills />
        </div>
      </div>
     </div> 
    </Wrapper>
  );
})

const Wrapper = styled.section`
  .top {
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      padding: 25px 0px;
      z-index: 1100;
      background: #FF9000;
    }
    .main-content {
      display: flex;
      flex-direction: row;
      min-height:calc(100vh - 80px;);
      margin-left:110px;
    .container {
      background: #fff;
      width: 80%;
      margin: 0 50px;
      padding: 50px;
      color: #4d4d4d;
      overflow-x: hidden;
      overflow-y: auto;
      height: 700px;
        .tabs-container {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
    }
    }
    @media screen and (max-width: 779px) {
      .top {
        display: none;
      }
      .main-content {
      flex-direction: column; 
      margin-left:0;
      margin-top:100px; 
      .container {
        width: 95%;
        margin: 10px;
        padding: 0;        
      }    
    }
    }
`;

export default Skills;