import React from "react";
import { Link } from "react-router-dom";

// Stylesheet
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copy">
        Spovedanie © {new Date().getFullYear()}.
        {/* <Link>De ce?</Link>
        <Link>Cine?</Link> */}
      </p>
    </footer>
  );
};

export default Footer;
