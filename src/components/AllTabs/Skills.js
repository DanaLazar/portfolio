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
import {
  SiGraphql,
  SiMysql,
  SiJquery,
  SiNextdotjs,
  SiPrisma,
  SiJira,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  return (
    <Wrapper>
      <h4>
        Languages, frameworks and tools I used at job or for personal projects
      </h4>
      <div className="programs">
        <div className="logo">
          <IoLogoHtml5 />
          <span>
            <strong>HTML</strong>
          </span>
        </div>
        <div className="logo">
          <IoLogoCss3 />
          <span>
            <strong>CSS</strong>
          </span>
        </div>
        <div className="logo">
          <IoLogoJavascript />
          <span>
            <strong>JavaScript</strong>
          </span>
        </div>
        <div className="logo">
          <DiPhp />
          <span>
            <strong>PHP</strong>
          </span>
        </div>
        <div className="logo">
          <SiMysql />
          <span>
            <strong>MySQL</strong>
          </span>
        </div>
        <div className="logo">
          <DiReact />
          <span>
            <strong>React</strong>
          </span>
        </div>
        <div className="logo">
          <SiNextdotjs />
          <span>
            <strong>Nextjs</strong>
          </span>
        </div>
        <div className="logo">
          <IoLogoWordpress />
          <span>
            <strong>Wordpress</strong>
          </span>
        </div>
        <div className="logo">
          <IoLogoSass />
          <span>
            <strong>SASS</strong>
          </span>
        </div>
        <div className="logo">
          <DiBootstrap />
          <span>
            <strong>Bootstrap</strong>
          </span>
        </div>
        <div className="logo">
          <SiTailwindcss />
          <span>
            <strong>Tailwind</strong>
          </span>
        </div>
        <div className="logo">
          <SiJquery />
          <span>
            <strong>Jquery</strong>
          </span>
        </div>
        <div className="logo">
          <SiTypescript />
          <span>
            <strong>Typescript</strong>
          </span>
        </div>
        <div className="logo">
          <SiGraphql />
          <span>
            <strong>Graphql</strong>
          </span>
        </div>
        <div className="logo">
          <SiPrisma />
          <span>
            <strong>Prisma</strong>
          </span>
        </div>
        <div className="logo">
          <IoLogoGithub />
          <span>
            <strong>Github</strong>
          </span>
        </div>
        <div className="logo">
          <SiJira />
          <span>
            <strong>Jira</strong>
          </span>
        </div>
      </div>
      <hr />
      <h4>Foreign Languages</h4>
      <p>
        English <span className="light">(good)</span>, French{" "}
        <span className="light">(medium)</span>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .programs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    .logo {
      width: 100px;
      height: 100px;
      margin: 15px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      span {
        strong {
          display: block;
          font-weight: bold;
        }
      }
      svg {
        display: block;
        margin: auto;
        width: 60px;
        height: 60px;
        color: #ff9000;
        background: #e6e6e6;
        padding: 15px;
        border-radius: 50%;
      }
    }
  }
`;

export default Skills;
