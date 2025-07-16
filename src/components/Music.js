import React from "react";
import "../styles/music.css";

const Music = () => {
  return (
    <>
      <h2>Music</h2>
      <hr />

      <div className="releases">
        <div className="albumItem">
          <div>
            <a href="https://xkatedral.bandcamp.com/track/inertia" target="_blank">
              <img
                class="album"
                src="https://f4.bcbits.com/img/a0671490817_16.jpg"
                alt="XKatedral - Anthology Series II Cover"
              />
              <h4>XKatedral - Anthology Series II</h4>
            </a>
          </div>
        </div>

        <div className="albumItem">
          <div>
            <a href="https://mollerrecords.bandcamp.com/track/wilma-hulten-and-elif-yalva-orchestra-of-light" target="_blank">
              <img
                className="album"
                src="https://f4.bcbits.com/img/a3629223309_10.jpg"
                alt="My Heart of Noise Album Cover"
              />
              <h4>Elif Yalvaç - My Heart of Noise</h4>
            </a>
          </div>
        </div>

        <div className="albumItem">
          <div>
            <a href="https://www.svenskmusik.org/sv/s%C3%B6k?person=23411" target="_blank">
              <img id="score" src="images/scores.png" alt="sheet music" />
              <h4>Scores</h4>
            </a>
          </div>
        </div>
      </div>
      <hr />

      <div className="projects">
        <a href="https://radiophrenia.scot/calendar/monday-07/" target="_blank">
          <i>Elsewhere</i> on Radiophrenia 2025
        </a>

        <br />

        <a href="https://ungnordiskmusik.is/artist/wilma_hulten/" target="_blank">
          String quartet <i>Everred</i> performed at UNM 2022
        </a>

        <br />

        <a href="https://soundcloud.com/lillaakademienkomposition/hettan-wilma-hulten?si=7a70e2dae7004538aa3d08843ad47c4c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank">
          <i>Hettan</i> for Stockholm Saxophone Quartet
        </a>

        <br />

        <a href="https://www.youtube.com/watch?v=r90GS1Go1gc" target="blank" >
          Recorded live concert – Fylkingen
        </a>

        <br />

        <a href="https://cashmereradio.com/chronopolis/inert-mass/" target="_blank">
          Algorithmic piece <i>Inert Mass</i> for Chronopolis / Cashmere Radio
        </a>

        <br />

        <a href="https://soundcloud.com/wilmahulten/imbrications?si=aac77bece6ec44e796f5d010656e9bb6&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank">
          <i>Imbrications</i> &mdash; For violin and electronics
        </a>

      </div>
    </>
  );
};

export default Music;
