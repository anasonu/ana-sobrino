import React from "react";

function Projects() {
  return (
    <div className="container">
      <div className="section-container left">
        <hr className="long-divider" />
        <h3 className="section-title">Some things I've built</h3>
        <hr className="short-divider" />
      </div>

      <div className="projects-container">
        <div className="project project1">
          <div className="image-container">
            <div className="overlayed-color"></div>
          </div>
          <h4 className="project-title">The Requesting Partner</h4>
          <p className="green">Minigame</p>
          <p className="description">
            An easy yet fun minigame in which you have to run away from your
            partner, avoiding obstacles, in order to save yourself of doing
            chores.
          </p>
          <p className="green">HTML, CSS, JavaScript</p>
          <div className="project-links">
            <a
              className="icon"
              href="https://github.com/anasonu/the-requesting-partner-minigame"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/github-icon.svg"}
                alt="Github"
              />
            </a>
            <a
              className="icon"
              href="https://anasonu.github.io/the-requesting-partner-minigame/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/external-link.svg"}
                alt="External link"
              />
            </a>
          </div>
        </div>

        <div className="project project2">
          <div className="image-container">
            <div className="overlayed-color"></div>
          </div>
          <h4 className="project-title">Top-Games Portal</h4>
          <p className="green">CRUD Application</p>
          <p className="description">
            A portal that contains every minigame developed by my collegues. With user authentication and different permissions depending on the role.
          </p>
          <p className="green">NodeJS, ExpressJS, MongoDB, Mongoose, Handlebars</p>
          <div className="project-links">
            <a
              className="icon"
              href="https://github.com/anasonu/minigames-portal"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/github-icon.svg"}
                alt="Github"
              />
            </a>
            <a
              className="icon"
              href="https://top-games.fly.dev/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/external-link.svg"}
                alt="External link"
              />
            </a>
          </div>
        </div>

        <div className="project project3">
          <div className="image-container">
            <div className="overlayed-color"></div>
          </div>
          <h4 className="project-title">byChapters</h4>
          <p className="green">CRUD Application</p>
          <p className="description">
            A portal where writers can upload their own novels/stories by chapters. Users can read them, mark as favorites and share their favorite chapters. It has a token based authentication.
          </p>
          <p className="green">ReactJS, NodeJS, ExpressJS, MongoDB, Mongoose</p>
          <div className="project-links">
            <a
              className="icon"
              href="https://github.com/anasonu/by-chapters-client"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/github-icon.svg"}
                alt="Github"
              />
            </a>
            <a
              className="icon"
              href="https://by-chapters.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/external-link.svg"}
                alt="External link"
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
