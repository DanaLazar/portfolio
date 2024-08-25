import React, { forwardRef } from "react";
import styled from "styled-components";
import { TbBrandNextjs } from "react-icons/tb";
import { SiPrisma, SiZod, SiMui } from "react-icons/si";
import Sidebar from "../components/Sidebar";
import users from "../assets/users.jpeg";

const Projects = forwardRef((props, ref) => {
  return (
    <Wrapper>
      <div className="top"></div>
      <div className="main-content">
        <Sidebar />
        <div className="container">
          <h3 ref={ref}>Projects</h3>
          <div className="timeline">
            <div className="left column">
              <div className="timeline-panel">
                <h4
                  className="link"
                  onClick={() =>
                    window.open(
                      "https://user-management-peach.vercel.app/",
                      "_blank"
                    )
                  }
                >
                  user management
                  <br />
                  <span
                    className="light"
                    onClick={() =>
                      window.open(
                        "https://github.com/DanaLazar/portfolio",
                        "_blank"
                      )
                    }
                  >
                    see code
                  </span>
                </h4>
                <div className="image">
                  <img
                    className="link"
                    onClick={() =>
                      window.open(
                        "https://user-management-peach.vercel.app/",
                        "_blank"
                      )
                    }
                    src={users}
                    alt="user management"
                  />
                </div>
              </div>
            </div>
            <div className="right column">
              <div className="timeline-panel timeline-inverted">
                <p>
                  This project is built with Next.js and uses a PostgreSQL
                  database to manage user data. It provides a full-featured user
                  management system, allowing you to add, update, and delete
                  users.
                </p>
                <p>
                  <span>features:</span>
                </p>
                <ul>
                  <li>
                    Authentication: Secure authentication implemented using
                    Next.js middleware and JWT token
                  </li>
                  <li>
                    User Management (CRUD Operations): Perform Create, Read,
                    Update, and Delete (CRUD) operations on a PostgreSQL
                    database, powered by Prisma and API routes
                  </li>
                  <li>
                    Form Handling and Validation: User input is managed with
                    React Hook Form, ensuring robust form handling. Data
                    validation is enforced using Zod to maintain data integrity
                  </li>
                  <li>React Admin integration using Next.js API routes</li>
                  <li>
                    Styling: The UI is styled using Material-UI (MUI), offering
                    a polished and responsive user interface.
                  </li>
                </ul>
                <p>
                  <span>technologies:</span>{" "}
                </p>
                <div>
                  <span>
                    <TbBrandNextjs />
                  </span>
                  <span>
                    <SiPrisma />
                  </span>
                  <span>
                    <SiZod />
                  </span>
                  <span>
                    <SiMui />
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

Projects.displayName = "Projects";

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
          object-fit: contain;
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
