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
          <div>
            <h4 className="project-title">The Requesting Partner</h4>
            <p className="green">Minigame</p>
          </div>
          <p className="description opacity">
            An easy yet fun minigame in which you have to run away from your
            partner, avoiding obstacles, in order to save yourself from doing
            chores.
          </p>
          <p className="green stack">HTML, CSS, JavaScript</p>
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
          <div>
            <h4 className="project-title">Top-Games Portal</h4>
            <p className="green">CRUD Application</p>
          </div>
          <p className="description opacity">
            A portal that contains every minigame developed by my collegues.
            With user authentication and different permissions depending on the
            role.
          </p>
          <p className="green stack">
            NodeJS, ExpressJS, MongoDB, Mongoose, Handlebars
          </p>
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
          <div>
            <h4 className="project-title">byChapters</h4>
            <p className="green">CRUD Application</p>
          </div>
          <p className="description opacity">
            A portal with token based authentication where writers can upload their own stories by
            chapters. Users can read them, mark as favorites and comment.
          </p>
          <p className="green stack">
            ReactJS, NodeJS, ExpressJS, MongoDB, Mongoose
          </p>
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

        <div className="project project4">
          <div className="image-container">
            <div className="overlayed-color"></div>
          </div>
          <div>
            <h4 className="project-title">Chromegotchi</h4>
            <p className="green">Chrome Extension</p>
          </div>
          <p className="description opacity">
            A Chrome extension that contains a virtual pet. It eats, poops and
            gets sad. Not at all a productivity tool. It's more like a huge
            distraction... But it's fun anyway.
          </p>
          <p className="green stack">ReactJS, Chrome Storage</p>
          <div className="project-links">
            <a
              className="icon"
              href="https://github.com/anasonu/chromegotchi"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/github-icon.svg"}
                alt="Github"
              />
            </a>
            {/* <a className="icon" href="*" target="_blank" rel="noreferrer">
              <img
                src={process.env.PUBLIC_URL + "/external-link.svg"}
                alt="External link"
              />
            </a> */}
          </div>
        </div>
      </div>

      <div className="more-projects-link-container">
        <a
          className="green more-projects"
          href="https://github.com/anasonu"
          target="_blank"
          rel="noreferrer"
        >
          More projects on my Github! →
        </a>
      </div>
    </div>
  );
}

export default Projects;
