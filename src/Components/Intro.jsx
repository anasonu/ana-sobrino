import React from "react";
import Contact from "./Contact";

function Intro() {
  return (
    <div className="presentation-box">
      <p className="bottom">
        <span className="opacity"> Hello! My name is</span>
        <span className="green"> Ana Sobrino</span>
        <span className="opacity">,</span>
      </p>
      <h2 className="main-title">I build digital products.</h2>
      <p className="green bottom">UX/UI Design + Web Development</p>
      <p className="text-box opacity bottom">
        I’m a FullStack web developer with a User Experience and Product
        Management background. I design and build digital solutions always
        thinking about how the user might interact with the product.
      </p>
      <a href="mailto:asobrinonunez@gmail.com">
        <button className="green green-btn">Get in touch!</button>
      </a>
      <Contact />
    </div>
  );
}

export default Intro;
