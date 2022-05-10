import styled from "styled-components";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

const Contact = () => {
  return (
    <Wrapper>
      <p>
        <span>Address:</span>
        <span className="light">Otopeni, Ilfov, Romania</span>
      </p>
      <p>
        <span>E-mail:</span>{" "}
        <span className="light">magda.d.lazar@gmail.com</span>
      </p>
      <p>
        <span>Phone:</span> <span className="light">+40728180288</span>
      </p>
      <div>
        <span
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/dana-lazar-0300231b/",
              "_blank"
            )
          }
        >
          <IoLogoLinkedin />
        </span>
        <span
          onClick={() => window.open("https://github.com/DanaLazar", "_blank")}
        >
          <IoLogoGithub />
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  svg {
    font-size: 30px;
    margin: 5px;
    color: #fff;
    background: #ff9000;
    &:hover {
      background: #2f3c4f;
    }
  }
`;

export default Contact;
