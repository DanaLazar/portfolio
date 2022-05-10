import React, { forwardRef } from "react";
import styled from "styled-components";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoSass,
  IoLogoWordpress,
  IoLogoGithub,
} from "react-icons/io";
import { DiPhp, DiBootstrap, DiReact } from "react-icons/di";
import { SiGraphql, SiJquery } from "react-icons/si";
import Sidebar from "../components/Sidebar";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
// eslint-disable-next-line react/display-name
const Projects = forwardRef((props, ref) => {
  return (
    <Wrapper>
      <div className="top"></div>
      <div className="main-content">
        <Sidebar />
        <div className="container">
          <h3 ref={ref}>Personal & School Projects</h3>
          <div className="timeline">
            <div className="left column">
              <div className="timeline-panel">
                <h4
                  className="link"
                  onClick={() =>
                    window.open("https://hellokidtravel.ro/", "_blank")
                  }
                >
                  hellokidtravel.ro
                  <br />
                  <span className="light">personal project</span>
                </h4>
                <div className="image">
                  <img
                    className="link"
                    onClick={() =>
                      window.open("https://hellokidtravel.ro/", "_blank")
                    }
                    src={pic2}
                    alt="hellokidtravel"
                  />
                </div>
              </div>
            </div>
            <div className="right column">
              <div className="timeline-panel timeline-inverted">
                <p>
                  Hellokidtravel is a traveling website for families.Its aim is
                  to provide children with information on the places they will
                  visit and to keep a record of all trips.
                </p>
                <p>
                  <span>features:</span>
                </p>
                <ul>
                  <li>theme constructed from scratch</li>
                  <li>private information</li>
                  <li>personalised menu, tests, information for each trip</li>
                  <li>allows user to add new pages according to their needs</li>
                </ul>
                <p>
                  <span>technologies:</span>{" "}
                </p>
                <div>
                  <span>
                    <IoLogoWordpress />
                  </span>
                  <span>
                    <DiBootstrap />
                  </span>
                  <span>
                    <DiPhp />
                  </span>
                  <span>
                    <IoLogoHtml5 />
                  </span>
                  <span>
                    <IoLogoCss3 />
                  </span>
                  <span>
                    <SiJquery />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline">
            <div className="left column">
              <div className="timeline-panel">
                <h4
                  className="link"
                  onClick={() =>
                    window.open("https://class-ecomm.herokuapp.com", "_blank")
                  }
                >
                  Class Component Ecomm Site
                  <br /> <span className="light">school project</span>
                </h4>
                <div className="image">
                  <img
                    className="link"
                    onClick={() =>
                      window.open("https://class-ecomm.herokuapp.com", "_blank")
                    }
                    src={pic1}
                    alt="class ecomm"
                  />
                </div>
              </div>
            </div>
            <div className="right column">
              <div className="timeline-panel timeline-inverted">
                <p>
                  This eCommerce site is constructed in 2022 only with class
                  components, for learning purposes. It allows to add to cart
                  different variants of the same the product and change the
                  currency.
                </p>
                <p>
                  <span>features:</span>
                </p>
                <ul>
                  <li>GraphQL endpoint with Apollo</li>
                  <li>Express server</li>
                </ul>
                <p>
                  <span>technologies:</span>{" "}
                </p>
                <div>
                  <span>
                    <DiReact />
                  </span>
                  <span>
                    <SiGraphql />
                  </span>
                  <span>
                    <IoLogoJavascript />
                  </span>
                  <span>
                    <IoLogoHtml5 />
                  </span>
                  <span>
                    <IoLogoCss3 />
                  </span>
                  <span>
                    <IoLogoGithub />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline">
            <div className="left column">
              <div className="timeline-panel">
                <h4
                  className="link"
                  onClick={() =>
                    window.open(
                      "https://react-hook-comfy.netlify.app/",
                      "_blank"
                    )
                  }
                >
                  Hook Component Ecomm Site
                  <br />
                  <span className="light">school project</span>
                </h4>
                <div className="image">
                  <img
                    className="link"
                    onClick={() =>
                      window.open(
                        "https://react-hook-comfy.netlify.app/",
                        "_blank"
                      )
                    }
                    src={pic3}
                    alt="hook ecomm"
                  />
                </div>
              </div>
            </div>
            <div className="right column">
              <div className="timeline-panel timeline-inverted">
                <p>
                  This eCommerce site is constructed using hooks, for learning
                  purposes. It allows to add to cart different variants of the
                  same product and make payments
                </p>
                <p>
                  <span>features:</span>
                </p>
                <ul>
                  <li>stripe payment</li>
                  <li>stocks</li>
                  <li>user account and login</li>
                  <li>sorting</li>
                  <li>filtering</li>
                </ul>
                <p>
                  <span>technologies:</span>{" "}
                </p>
                <div>
                  <span>
                    <DiReact />
                  </span>
                  <span>
                    <IoLogoJavascript />
                  </span>
                  <span>
                    <IoLogoHtml5 />
                  </span>
                  <span>
                    <IoLogoCss3 />
                  </span>
                  <span>
                    <IoLogoSass />
                  </span>
                  <span>
                    <IoLogoGithub />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
});

const Wrapper = styled.section`
  .top {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 25px 0px;
    z-index: 1100;
    background: #ff9000;
  }
  .main-content {
    display: flex;
    flex-direction: row;
    min-height: calc(100vh - 80px;);
    margin-left: 110px;
    .container {
      background: #fff;
      width: 80%;
      margin: 0 50px;
      padding: 50px;
      color: #4d4d4d;
      text-align: center;
      overflow-x: hidden;
      overflow-y: auto;
      height: calc(100vh - 100px);
      .timeline {
        padding: 20px 0 20px;
        position: relative;
        display: flex;
        flex-direction: row;
        &:before {
          top: 20px;
          bottom: 0;
          position: absolute;
          content: " ";
          width: 2px;
          background-color: #e6e6e6;
          left: 45%;
          margin-left: 0px;
        }
        .column {
          margin-bottom: 20px;
          position: relative;
          text-align: center;
          &.left {
            text-align: right;
            width: 45%;
            padding: 30px 20px 30px 0;
          }
          &.right {
            text-align: left;
            width: 55%;
            padding: 30px 0 30px 20px;
          }
        }
        img {
          width: 100%;
          display: block;
          height: 500px;
          object-fit: cover;
        }
        svg {
          margin: 10px;
          width: 40px;
          height: 40px;
          color: #ff9000;
          background: #e6e6e6;
          padding: 8px;
          border-radius: 50%;
        }
        ul {
          margin-bottom: 20px;
          li {
            margin-left: 15px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 779px) {
    .top {
      display: none;
    }
    .main-content {
      flex-direction: column;
      margin-left: 0;
      margin-top: 100px;
      .container {
        width: 95%;
        margin: 10px;
        padding: 0;
        h3 {
          margin: 20px 0 40px;
        }
        .timeline {
          flex-direction: column;
          &:before {
            display: none;
          }
          .column {
            &.left {
              text-align: left;
              width: 100%;
              padding: 10px;
            }
            &.right {
              text-align: left;
              width: 100%;
              padding: 10px;
            }
            .timeline-badge {
              top: -50px;
              right: 50%;
            }
          }
        }
      }
    }
  }
`;
export default Projects;
