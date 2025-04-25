const About = () => {
  return (
    <div>
      <h1>About this application</h1>
      <p>This is a demo application for testing purposes. It uses React, Node, Axios, Express and MongoDB Atlas. Pics were made with AI and icons are from Google Fonts.</p>
      <p>Source code can be found at:</p>
      <p>
        <a href="https://github.com/JanneJMakinen/AirFryerVault_backend" target="_blank">
          AirFryerVaul backend
        </a>
        <a href="https://github.com/JanneJMakinen/AirFryerVault_frontend" target="_blank">
          AirFryerVaul frontend
        </a>
      </p>
      <p>Running application can be found at: https://dashboard.render.com...</p>
      <p>
        <a href="https://www.github.com" target="_blank">
          Render link here!
        </a>
      </p>
      <p>(Uses home made ping for keeping it alive, but due monthly running limitations might need restart.)</p>
    </div>
  )
}

export default About
