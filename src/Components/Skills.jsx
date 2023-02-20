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
            <li className="opacity">JavaScript ES6</li>
            <li className="opacity">TypeScript</li>
          </ul>
        </div>

        <div>
          <p className="green">FrontEnd</p>
          <ul>
            <li className="opacity">ReactJs</li>
            <li className="opacity">NextJs</li>
          </ul>
        </div>

        <div>
          <p className="green">BackEnd & Database</p>
          <ul>
            <li className="opacity">NodeJs</li>
            <li className="opacity">ExpressJs</li>
            <li className="opacity">API REST</li>
            <li className="opacity">Axios</li>
            <li className="opacity">MongoDB</li>
            <li className="opacity">Mongoose</li>
            <li className="opacity">Postman</li>
            <li className="opacity">Handlebars</li>
          </ul>
        </div>

        <div>
          <p className="green">Markup / Styling Language</p>
          <ul>
            <li className="opacity">HTML5</li>
            <li className="opacity">CSS3</li>
          </ul>
        </div>

        <div>
          <p className="green">Version control & Tools</p>
          <ul>
            <li className="opacity">Git</li>
            <li className="opacity">Github</li>
            <li className="opacity">Heroku</li>
            <li className="opacity">Netlify</li>
          </ul>
        </div>

        <div>
          <p className="green">Testing</p>
          <ul>
            <li className="opacity">Jest</li>
            <li className="opacity">Cypress</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Skills;
