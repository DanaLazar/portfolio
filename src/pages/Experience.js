import React, { forwardRef } from "react";
import styled from "styled-components";
import { CgBriefcase } from "react-icons/cg";

import Sidebar from "../components/Sidebar";
// eslint-disable-next-line react/display-name
const Experience = forwardRef((props, ref) => {
  return (
    <Wrapper>
      <div className="top"></div>
      <div className="main-content">
        <Sidebar />
        <div className="container">
          <h3 ref={ref}>Work experience</h3>
          <div className="timeline">
            <div className="left column">
              <div className="timeline-badge">
                <CgBriefcase />
              </div>
              <div className="timeline-panel">
                <h5>From June 2018 - Current - Web Services Sollutions</h5>
                <h4>Front-end developer</h4>
              </div>
            </div>
            <div className="right column">
              <div className="timeline-panel timeline-inverted">
                <p>Some of the projects I worked for:</p>
                <p>
                  <strong>wordpress:</strong>
                  <span
                    className="link"
                    onClick={() =>
                      window.open("https://www.best-tools.ro/", "_blank")
                    }
                  >
                    best-tools.ro
                  </span>
                  ,
                  <span
                    className="link"
                    onClick={() =>
                      window.open("https://www.servuscluj.ro/", "_blank")
                    }
                  >
                    servuscluj.ro
                  </span>
                  ,
                  <span
                    className="link"
                    onClick={() =>
                      window.open("https://clever-media.ro/", "_blank")
                    }
                  >
                    clever-media.ro
                  </span>
                  ,
                  <span
                    className="link"
                    onClick={() =>
                      window.open("https://scoalaeuropeana.ro/", "_blank")
                    }
                  >
                    scoalaeuropeana.ro
                  </span>
                  ,
                  <span
                    className="link"
                    onClick={() =>
                      window.open("https://www.destinatiaanului.ro/", "_blank")
                    }
                  >
                    destinatiaanului.ro
                  </span>
                </p>
                <p>
                  <strong>html&css:</strong>
                  <span
                    className="link"
                    onClick={() =>
                      window.open("https://www.9695.ro/", "_blank")
                    }
                  >
                    9695.ro
                  </span>
                  ,
                  <span
                    className="link"
                    onClick={() =>
                      window.open("https://www.delabunici.ro/", "_blank")
                    }
                  >
                    delabunici.ro
                  </span>
                  ,
                  <span
                    className="link"
                    onClick={() =>
                      window.open("https://www.delabunici.ro/", "_blank")
                    }
                  >
                    paginademedia.ro
                  </span>
                  ,
                  <span
                    className="link"
                    onClick={() =>
                      window.open("https://adevarul.ro/", "_blank")
                    }
                  >
                    adevarul.ro
                  </span>
                  ,
                  <span
                    className="link"
                    onClick={() =>
                      window.open("https://www.unvinpezi.ro/", "_blank")
                    }
                  >
                    unvinpezi.ro
                  </span>
                  ,
                </p>
                <p>
                  <strong>newsletters</strong> for unvinpezi.ro, sensodays.ro,
                  profit.ro
                </p>
              </div>
            </div>
          </div>
          <div className="timeline">
            <div className="left column">
              <div className="timeline-badge">
                <CgBriefcase />
              </div>
              <div className="timeline-panel">
                <h5>April 2016 – April 2018 - IT Studio Solutions</h5>
                <h4>
                  Project manager and Editor gastropedia.ro, mycitybreak.ro
                </h4>

                <h5>November 2015 - March 2016 - Orlando Interactive </h5>
                <h4>Content writer dietetik.ro</h4>

                <h5>2013 – 2015 - Orlando Interactive </h5>
                <h4>
                  Project manager and Editor suntmamica.ro, suntgravida.ro
                </h4>

                <h5>2007 – 2013 - Orlando Interactive </h5>
                <h4>Project manager and Editor hotcity.ro, trombon.ro</h4>

                <h5>2003 – 2007 - Vodanet Media</h5>
                <h4>Project manager and Editor ele.ro </h4>
              </div>
            </div>
            <div className="right column">
              <div className="timeline-panel timeline-inverted">
                <p>
                  <strong>Responsabilities</strong>
                </p>
                <p>Establish strategic direction for sites</p>
                <p>Design promotion plans</p>
                <p>Website development design</p>
                <p>Design / programming supervision</p>
                <p>Design an editorial plan</p>
                <p>Hiring the editorial team</p>
                <p>Writing articles</p>
                <p>
                  Maintenance of relationship with external collaborators:
                  doctors, psychologists, teachers, etc
                </p>
                <p>Implementing SEO programs</p>
                <p>Initiate meetings with site readers and experts</p>
                <p>Social media promotion: facebook, bloggers</p>
                <p>
                  Design and supervision of special projects within the site for
                  customer promotion
                </p>
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
          .timeline-badge {
            color: #fff;
            width: 44px;
            height: 44px;
            line-height: 50px;
            font-size: 1.4em;
            text-align: center;
            position: absolute;
            top: -21px;
            right: 0;
            margin-right: -21px;
            background-color: #ff9000;
            z-index: 100;
            border-radius: 50%;
          }
        }
        .link {
          white-space: nowrap;
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
export default Experience;
