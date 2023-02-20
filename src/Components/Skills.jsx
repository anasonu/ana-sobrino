import React from "react";

function Skills() {
  return (
    <div className="container">
      <div className="section-container">
        <hr className="short-divider" />
        <h3 className="section-title">What I know</h3>
        <hr className="long-divider" />
      </div>

      <div className="skills-container">
        <div>
          <p className="green">Programming Language</p>
          <ul>
            <li>JavaScript ES6</li>
            <li>TypeScript</li>
          </ul>
        </div>

        <div>
          <p className="green">FrontEnd</p>
          <ul>
            <li>ReactJs</li>
            <li>NextJs</li>
          </ul>
        </div>

        <div>
          <p className="green">BackEnd & Database</p>
          <ul>
            <li>NodeJs</li>
            <li>ExpressJs</li>
            <li>API REST</li>
            <li>Axios</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Postman</li>
            <li>Handlebars</li>
          </ul>
        </div>

        <div>
          <p className="green">Markup / Styling Language</p>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>

        <div>
          <p className="green">Version control & Tools</p>
          <ul>
            <li>Git</li>
            <li>Github</li>
            <li>Heroku</li>
            <li>Netlify</li>
          </ul>
        </div>

        <div>
          <p className="green">Testing</p>
          <ul>
            <li>Jest</li>
            <li>Cypress</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Skills;
