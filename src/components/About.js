import React from "react";
import { Helmet } from "react-helmet";
import "../styles/about.css";

const About = () => {
  return (
    <div id="content">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Helmet>

      <div className="about">
        <h2>About</h2>
        <hr />
        <p>
          Wilma Hultén (b. 1996) is a composer of electronic and acoustic music,
          currently studying at the Royal College of Music in Stockholm.
        </p>
        <br />
        <p>Contact: wilmahulten@gmail.com</p>
        <hr />
        <div className="fa-container">
          <a
            href="https://soundcloud.com/wilmahulten"
            className="fa fa-soundcloud"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://www.instagram.com/wilm_____ah/"
            className="fa fa-instagram"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://www.youtube.com/channel/UCLh5yzPomE9-OSXc-9QqOYQ"
            className="fa fa-youtube"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://open.spotify.com/artist/2JSkNpJq73hWxIFb6FSRHa?si=IAv_yhoKTNm3jI7_GmjBcQ"
            className="fa fa-spotify"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default About;
