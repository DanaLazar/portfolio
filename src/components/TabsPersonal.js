import React, { useState } from "react";
import styled from "styled-components";

import AboutMe from "./AllTabs/AboutMe";
import Contact from "./AllTabs/Contact";

const TabsPersonal = () => {
  const [activeTab, setActiveTab] = useState("AboutMe");
  const handleTab1 = () => {
    setActiveTab("AboutMe");
  };
  const handleTab2 = () => {
    setActiveTab("Contact");
  };
  return (
    <Wrapper>
      <ul className="nav">
        <li
          className={activeTab === "AboutMe" ? "active" : ""}
          onClick={handleTab1}
        >
          About me
        </li>
        <li
          className={activeTab === "Contact" ? "active" : ""}
          onClick={handleTab2}
        >
          Contact
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "AboutMe" ? <AboutMe /> : <Contact />}
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
    background: #2f3c4f;
    color: #fff;
  }
  ul.nav li.active {
    background: #2f3c4f;
    color: #fff;
  }
  @media screen and (max-width: 779px) {
    ul.nav li {
      font-size: 12px;
    }
  }
`;

export default TabsPersonal;
