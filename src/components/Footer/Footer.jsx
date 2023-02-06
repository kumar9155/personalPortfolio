import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a color="white" href="mailto:kumar915516@gmail.com">kumar915516@gmail.com</a>
        <div className="f-icons">
          <a
            href="https://www.linkedin.com/in/kumar-gaurav-477983218/"
            target="blank"
          >
            <AiOutlineLinkedin color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/kumar9155" target="blank">
            <AiFillGithub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
