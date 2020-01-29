import React from "react";

// Components
import FloatingButton from "../../components/FloatingButton";

// Stylesheet
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copy">Spovedanie © {new Date().getFullYear()}.</p>
      <FloatingButton />
    </footer>
  );
};

export default Footer;
