import styled from 'styled-components'
import { Link } from "react-router-dom";
import { CgGirl, CgWebsite, CgBriefcase, CgRadioChecked } from "react-icons/cg";

function HomePage() {
  return (
    <Wrapper>
      <div className="row">
       <div className="box">
        <Link to="/personal"> 
          <div className="content">  
            <CgGirl />
            <h2>Personal</h2>
          </div>        
        </Link>
         </div>
       <div className="box">
        <Link to="/experience">
          <div className="content">
            <CgBriefcase />
            <h2>Experience </h2>
          </div>
        </Link>
      </div>
      </div>
      <div className="row">
      <div className="box">
        <Link to="/skills">
          <div className="content">
            <CgRadioChecked />
            <h2>Skills </h2>
          </div>
        </Link>
      </div>
      <div className="box">
        <Link to="/projects">
          <div className="content">
            <CgWebsite/>
            <h2>Projects </h2>
          </div>
        </Link>
      </div>
     </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
    .row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 7px;
         .box {
           width: 150px;
           height: 150px;
           background: #fff;
           color: #FF9000;
           margin-right: 7px;
            a {
            text-decoration: none;
            color: #FF9000;
            display: block;
            height: 100%;
              .content {
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;
                  svg {
                    margin: auto;
                    width: 50%;
                    height: 50%;
                      &:hover  {
                      width: 80%;
                      height: 80%;
                    }
                  }
                  h2 {
                    margin: auto;
                  }
              }
            }
            
      }
    }
`;

export default HomePage;