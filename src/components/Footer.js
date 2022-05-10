import FileSaver from "file-saver";
import styled from "styled-components";
import { CgArrowUp, CgArrowDown } from "react-icons/cg";
import PropTypes from "prop-types";

function Footer(props) {
  const saveFile = () => {
    FileSaver.saveAs(
      `${process.env.PUBLIC_URL}CV-DanaLazar.pdf`,
      "CV-DanaLazar.pdf"
    );
  };
  return (
    <Wrapper>
      <div className="footer">
        <div className="cv">
          <h2 onClick={saveFile}>
            <CgArrowDown />
            CV
          </h2>
        </div>
        <div className="up">
          <h2
            onClick={() => {
              window.scrollTo(0, 0);
              return props.top.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <CgArrowUp />
            Up
          </h2>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
      position: sticky;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      padding: 10px 0px;
      z-index: 1100;
      background: #FF9000;
      color: #fff;
      .footer {
        display: flex;
        flex-direction: row;
        margin: 0 10px;
        justify-content: space-between;
        .cv, .up {
          background: #2F3C4F;
          padding: 0.3rem 1rem;
          text-align: center;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 5px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.7s;
          border-radius: 4px;
          width: 100px;
          &:hover {
            background: #e6e6e6;
            color: #4d4d4d;
          }
        
      }
`;

Footer.propTypes = {
  top: PropTypes.object.isRequired,
};

export default Footer;
