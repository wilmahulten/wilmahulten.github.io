import React from "react";
import "../styles/concerts.css";

const Concerts = () => {
  return (
    <>
      <h2>Concerts</h2>
      <hr />

      <div className="concerts">
        <h3>2024</h3>

        <div className="container">
          <div className="date">may 17 |</div>
          <div className="item">
            <p>
              <a href="https://fb.me/e/3PHFzLDaF" target="_blank">
                <span className="venue">Reaktorhallen, KTH</span>
                <br />
                Exam concert
              </a>
            </p>
          </div>

          <div className="date">may 6 |</div>
          <div className="item">
            <p>
              <a
                href="https://www.kmh.se/konserter---evenemang/alla/arets-instrument.html"
                target="_blank"
              >
                <span className="venue">Kungasalen, KMH</span>
                <br />
                Årets instrument w/ Sören Hermansson (Hn.)
              </a>
            </p>
          </div>
        </div>

        <h3>2023</h3>

        <div className="container">
          <div className="date">nov 24 |</div>
          <div className="item">
            <p>
              <a
                href="https://www.instagram.com/p/Czj0gLhM8jj/?utm_source=ig_web_copy_link"
                target="_blank"
              >
                <span className="venue">
                  Lyssningsrum, Royal Institute of Art
                </span>
                <br />
                Amina Hocine &ndash; Jordprov release + friends
              </a>
            </p>
          </div>

          <div className="date">sep 16 |</div>
          <div className="item">
            <p>
              <a
                href="https://web.archive.org/web/20231019195614/https://www.envelopefestival.com/nordic-baltic-spatial-music-program"
                target="_blank"
              >
                <span className="venue">
                  Lyssningsrum, Royal Institute of Art
                </span>
                <br />
                Envelope Festival: Nordic Baltic Spatial Sound Works
              </a>
            </p>
          </div>

          <div className="date">may 29 |</div>
          <div className="item">
            <p>
              <a
                href="https://web.archive.org/web/20230530153714/https://www.tickster.com/sv/events/tbbblbpjnxjfdum/2023-05-29/tove-moller-wilma-hulten"
                target="_blank"
              >
                <span className="venue">
                  Lyssningsrum, Royal Institute of Art
                </span>
                <br />
                New music for more than two speakers
              </a>
            </p>
          </div>

          <div className="date">feb 23 |</div>
          <div className="item">
            <p>
              <a href="https://fylkingen.se/node/3056" target="_blank">
                <span className="venue">Fylkingen</span>
                <br />
                Solo set &ndash; live electronics
              </a>
            </p>
          </div>
        </div>

        <br />

        <h3>2022</h3>
        <div className="container">
          <div className="date">nov 9 |</div>
          <div className="item">
            <p>
              <a
                href="https://kmh-evi.se/system/files/2022-11/Programblad%20Elektroakustiskt%20i%20november%202022.pdf?evitoken=65TPdza0FGAldbLZpe4h&fbclid=IwAR2ktEBt6-LiHzeywS7pzjVs-0HpDq8dGGb7rjAtCLdUCuX_TUb9wYwQ3jM"
                target="_blank"
              >
                <span className="venue">Lilla Salen, KMH</span>
                <br />
                Elektroakustiskt i november
              </a>
            </p>
          </div>

          <div className="date">aug 16 |</div>
          <div className="item">
            <p>
              <a
                href="https://ungnordiskmusik.is/artist/wilma_hulten"
                target="_blank"
              >
                <span className="venue">Fríkirkjan, Reykjavík</span>
                <br />
                Ung Nordisk Musik: Connecting Dots
              </a>
            </p>
          </div>

          <div className="date">apr 15 |</div>
          <div className="item">
            <p>
              <a href="https://fylkingen.se/node/2941" target="_blank">
                <span className="venue">Fylkingen</span>
                <br />
                Solo set &ndash; live electronics
              </a>
            </p>
          </div>

          <div className="date">feb 4 |</div>
          <div className="item">
            <p>
              <a
                href="https://www.instagram.com/p/CZGzF2-MZTQ/?utm_source=ig_web_copy_link"
                target="_blank"
              >
                <span className="venue">Musikaliska</span>
                <br />
                Blåsarsymfonikernas saxofonkvartett
              </a>
            </p>
          </div>
        </div>

        <br />

        <h3>2021</h3>

        <div className="container">
          <div className="date">dec 3 |</div>
          <div className="item">
            <p>
              <a
                href="https://kmh-evi.se/system/files/2021-11/ljudOljud%20program%2C%2029%20nov-3%20dec%202021.pdf?evitoken=65TPdza0FGAldbLZpe4h"
                target="blank"
              >
                <span className="venue">Lilla Salen, KMH</span>
                <br />
                ljudOljud: Elektroakustisk konsert II
              </a>
            </p>
          </div>

          <div className="date">nov 12 |</div>
          <div className="item">
            <p>
              <a
                href="https://lillaakademien.se/konserter-events/2021/11/12/festivalen-framtidens-musik"
                target="_blank"
              >
                <span className="venue">Årsta Folkets Hus</span>
                <br />
                Stockholm Saxophone Quartet
              </a>
            </p>
          </div>

          <div className="date">may 21 |</div>
          <div className="item">
            <p>
              <a
                href="https://www.youtube.com/watch?v=r90GS1Go1gc&list=WL&index=2&t=1268s&ab_channel=WilmaHult%C3%A9n?autoplay=1&mute=1"
                target="_blank"
              >
                <span className="venue">Fylkingen</span>
                <br />
                Solo set &ndash; live electronics
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Concerts;
