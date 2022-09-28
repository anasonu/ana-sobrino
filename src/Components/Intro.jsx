import React from "react";
import Contact from "./Contact";

function Intro() {
  return (
    <div className="presentation-box">
      <p className="green">Hello! My name is</p>
      <h1>Ana Sobrino.</h1>
      <h2 className="opacity">I build digital products.</h2>
      <p className="text-box">
        <span className="opacity">I’m a junior software engineer with a</span>
        <span className="green"> User Experience </span>
        <span className="opacity">and</span>
        <span className="green"> Product Management </span>
        <span className="opacity">
          background. I design and build digital solutions always thinking about
          how the user might interact with the product.
        </span>
      </p>
      <a href="mailto:asobrinonunez@gmail.com">
        <button className="green green-btn">Get in touch!</button>
      </a>
      <Contact />
    </div>
  );
}

export default Intro;
