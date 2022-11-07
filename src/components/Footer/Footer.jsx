import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-linkedin";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span className="text">Rabbinur.cse.bubt@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/md-rabbinur-muktar-89a364232/"><Insta color="white" size={"3rem"} /></a>
          <a href=""><Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/Rabbinur"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
