import React, { useState } from "react";
import styled from 'styled-components';

import Education from "./AllTabs/Education";
import Skills from "./AllTabs/Skills";

const TabsSkills = () => {
  const [activeTab, setActiveTab] = useState("Skills");
  const handleTab1 = () => {
    setActiveTab("Skills");
  };
  const handleTab2 = () => {
    setActiveTab("Education");
  };
  return (
    <Wrapper>
      <ul className="nav">
        <li 
            className={activeTab === "Skills" ? "active" : ""}
            onClick={handleTab1}
        >Skills</li>
        <li 
            className={activeTab === "Education" ? "active" : ""}
            onClick={handleTab2}
        >Education</li>
      </ul>
      <div className="outlet">
        {activeTab === "Skills" ? <Skills /> : <Education />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
    width: 80%;
    margin: 1.5rem auto;    
    border-radius: 4px;
        ul.nav {  
            background: #e6e6e6;
            width: 60%;
            margin: 0 auto 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 4px;
            padding-left: 0px;
            @media (max-width: 1100px) {
                width: 80%;
            }
            @media (max-width: 768px) {
                width: 90%;
            }
        }
        ul.nav li {
            width: 50%;
            padding: 0.5rem;
            list-style: none;
            text-align: center;
            font-size: 18px;
            text-transform: uppercase;
            letter-spacing: 5px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.7s;
            border-bottom-left-radius: 4px;
            border-top-left-radius: 4px;
        }
        ul.nav li:nth-child(2) {
            border-radius: 0;
            border-bottom-right-radius: 4px;
            border-top-right-radius: 4px;
        }
        ul.nav li:hover {
            background: #2F3C4F;
            color: #fff;
        }
        ul.nav li.active {
            background: #2F3C4F;
            color: #fff;
        }
    @media screen and (max-width: 779px) {
        ul.nav li {
           font-size: 12px; 
        }
    }
`;

export default TabsSkills;