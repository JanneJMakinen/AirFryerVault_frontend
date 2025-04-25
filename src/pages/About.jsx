const About = () => {
  return (
    <div>
      <h1>About this application</h1>
      <p>This is a demo application for testing purposes. It uses React, Node, Axios, Express and MongoDB Atlas. Pics were made with AI and icons are from Google Fonts.</p>
      <p>Source code can be found at:</p>
      <p>
        <a href="https://github.com/JanneJMakinen/AirFryerVault_backend" target="_blank">
          https://github.com/JanneJMakinen/AirFryerVault_backend
        </a>
      </p>
      <p>
      <a href="https://github.com/JanneJMakinen/AirFryerVault_frontend" target="_blank">
        https://github.com/JanneJMakinen/AirFryerVault_frontend
      </a>
      </p>
      <p>This app running can be found at: </p>
      <p>
        <a href="https://airfryervault-backend.onrender.com/" target="_blank">
        https://airfryervault-backend.onrender.com
        </a>
      </p>
      <p>(Uses cron job for keeping this alive, but might need restart)</p>
    </div>
  )
}

export default About
