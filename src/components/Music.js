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
            <a
              href="https://xkatedral.bandcamp.com/track/inertia"
              target="_blank"
            >
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
            <a
              href="https://mollerrecords.bandcamp.com/track/wilma-hulten-and-elif-yalva-orchestra-of-light"
              target="_blank"
            >
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
            <a
              href="https://www.svenskmusik.org/sv/s%C3%B6k?person=23411"
              target="_blank"
            >
              <img id="score" src="images/scores.png" alt="sheet music" />
              <h4>Scores</h4>
            </a>
          </div>
        </div>
      </div>
      <hr />

      <div className="news">
        <h3>
          String quartet <i>Everred</i> performed at UNM 2022
        </h3>
        <p>
          My piece for string quartet, <i>Everred</i> was selected for the 2022
          edition of{" "}
          <a href="http://unm.se/" target="_blank">
            UNM (Ung Nordisk Musik)
          </a>{" "}
          in Reykjavík. It was performed in Fríkirkjan by an ensemble
          specifically assembled for this occasion.
        </p>
        <img
          src="images/everred1.jpg"
          alt="string quartet in frikirkjan"
          width="100%"
        />
        <div className="bildtext">
          Ung Nordisk Musik Reykjavík 2022: co·structing
          <br />
          Photographer: Christina Raytsiz
          <br />
          <a href="https://www.ungnordiskmusik.is" target="_blank">
            www.ungnordiskmusik.is
          </a>
        </div>
        <img src="images/everred3.JPG" alt="excerpt from score" width="100%" />
        <p>
          The full score is available at{" "}
          <a
            href="https://www.svenskmusik.org/sv/verk/everred-180386"
            target="_blank"
          >
            Svensk Musik
          </a>
          . Listen to an excerpt from the rehearsals:
        </p>
        <audio controls>
          <source src="audio/everred2.mp3" type="audio/mp3" />
        </audio>
        <br />
        <img
          src="images/everred4.JPG"
          width="100%"
          alt="Everred is an ever-changing, yet repetitive web of rhythmical ambiguity, dancing notes and dense harmonic texutres. Canonic subjects with short offsets obscure the sense of pulse. The piece moves seamlessly between shimmering melodies, airy harmonies and astringent sound masses. The music is glued together by innumerable phrase repetitions and a consistent, ceaseless eight-note division that alludes to minimalist phase music."
        />
        <div className="bildtext">
          Program note. Read{" "}
          <a
            href="https://ungnordiskmusik.is/artist/wilma_hulten/"
            target="_blank"
          >
            more
          </a>
          .
        </div>

        <hr />

        {/* ________________________ENTRY________________________*/}
        <h3>
          <i>Hettan</i> for Stockholm Saxophone Quartet
        </h3>
        <p>
          In <i>Hettan</i> [The Heat], that I wrote for{" "}
          <a href="https://www.stockholmsax.com/en" target="_blank">
            Stockholm Saxophone Quartet
          </a>
          , I explore breathing, air sounds and other soft qualities of the
          instruments as well as rhythmical discord and ways to notate
          improvisation that meets certain conditions.
          <br />
          <br />
          Listen to the premiere performance:
        </p>
        <div className="player">
          <iframe
            width="100%"
            height="120"
            scrolling="no"
            frameborder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1058424148&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
        <br />
        <img
          id="hettan"
          src="images/hettan.PNG"
          alt="excerpt from score"
          width="100%"
        />
        <br />
        <br />
        <hr />

        {/* ________________________ENTRY________________________*/}
        <h3>
          <a href="https://www.youtube.com/embed/r90GS1Go1gc" target="blank">
            {" "}
            Recorded live concert
          </a>
        </h3>
        <p>
          I played a live concert on May 21, 2021 at{" "}
          <a href="https://www.fylkingen.se/" target="_blank">
            Fylkingen
          </a>{" "}
          with material that I have developed during the last few months. I
          played with a midi controller and I created all sounds within the{" "}
          <a href="https://supercollider.github.io/" target="blank">
            SuperCollider
          </a>{" "}
          framework.
          <br />
          <br />
          Listen to the full performance:
        </p>
        <div className="youtube-embed">
          <iframe
            className="youtube-embed-iframe"
            src="https://www.youtube.com/embed/r90GS1Go1gc"
            title="YouTube video player"
            loading="lazy"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p>
          Special thanks to{" "}
          <a href="https://www.mariahorn.se/" target="_blank">
            Maria W Horn
          </a>{" "}
          and{" "}
          <a href="https://www.davidgranstrom.com/" target="_blank">
            David Granström
          </a>{" "}
          for all their help and support, technical and otherwise.
        </p>

        <hr />

        {/* ________________________ENTRY________________________*/}
        <h3>
          <a
            href="https://cashmereradio.com/chronopolis/inert-mass/"
            target="_blank"
          >
            <i>Inert Mass</i> @ Chronopolis
          </a>
        </h3>
        <br />
        <div>
          <a
            href="https://cashmereradio.com/chronopolis/inert-mass/"
            target="_blank"
          >
            <img
              src="images/inert-mass-screenshot.PNG"
              alt="Inert Mass is a feedback-heavy composition in a dense structure accompanied by shimmering details and melodic fragments. The material is based around a diatonic tone cluster, which remains stable throughout the duration of the piece (i.e. forever). It was created soley in SuperCollider, utilizing its many possibilities to amplify as well as limit randomness."
              width="100%"
            />
          </a>
        </div>
        <p>
          <i>Inert Mass</i> is an algorithmic piece of music that streamed for
          the entire month of January 2021 (and then never again) on{" "}
          <a href="https://cashmereradio.com/chronopolis/" target="_blank">
            Chronopolis
          </a>{" "}
          /{" "}
          <a href="https://cashmereradio.com/" target="_blank">
            Cashmere Radio
          </a>
          . Read more{" "}
          <a
            href="https://cashmereradio.com/chronopolis/inert-mass/"
            target="_blank"
          >
            here
          </a>
          .
        </p>
        <a href="https://www.instagram.com/weimiks/" target="_blank">
          <img
            src="https://media.cashmereradio.com/wp-content/uploads/2020/12/23050002/inert-mass-artwork-2048x2048.png"
            alt="Graphic art by Mikaela Wei"
            width="100%"
          />
        </a>
        <p>
          Artwork by{" "}
          <a href="https://www.instagram.com/weimiks/" target="_blank">
            Mikaela Wei
          </a>
          .
        </p>

        <hr />

        {/* ________________________ENTRY________________________*/}
        <h3>
          <a
            href="https://soundcloud.com/wilmahulten/imbrications"
            target="_blank"
          >
            <i>Imbrications</i> &mdash; For violin and electronics
          </a>
        </h3>
        <br />
        <div className="player">
          <iframe
            width="100%"
            height="120"
            scrolling="no"
            frameborder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/957702328&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>

        <hr />
      </div>
    </>
  );
};

export default Music;
