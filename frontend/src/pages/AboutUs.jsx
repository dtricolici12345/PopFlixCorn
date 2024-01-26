import { Link } from "react-router-dom";
import "../styles/About.css";
import Ryan from "../assets/ryan.png";
import Daniela from "../assets/daniela.png";
import Sabrina from "../assets/sabrina.jpeg";
import Cedric from "../assets/cedric.jpg";
import Pauline from "../assets/pauline.jpg";
import Yohan from "../assets/yohan.jpg";
import Elise from "../assets/elise.jpg";

function Aboutus() {
  return (
    <body>
      <section className="film">
        <div className="affiche">
          <div className="soon">
            <div className="play" />
          </div>
        </div>
        <article className="text">
          <div className="title">
            <h2>Les Créateurs</h2>
          </div>
          <p className="syno">
            Dans un monde où la technologie façonne l'avenir, une équipe de
            développeurs novateurs se réunit pour entreprendre une aventure
            épique à la Wild Code School, une institution légendaire où les
            esprits brillants sont formés à maîtriser l'art du code. (Ce site
            utilise TMDB et les API de TMDB, mais il n'est pas soutenu, certifié
            ou autrement approuvé par TMDB.)
          </p>
        </article>
      </section>
      <section className="acteur">
        <article className="person">
          <Link to="/people/1">
            <div className="people">
              <img src={Ryan} alt="Ryan" className="img" />
              <div className="desc">
                <h4 className="name">Ryan</h4>
                <a href="https://github.com/RetrozDev" className="git ">
                  <div className="non">|</div>
                </a>
                <a
                  href="https://www.linkedin.com/in/ryan-barboza-880308253/"
                  className="lin"
                >
                  <div className="non">|</div>
                </a>
              </div>
            </div>
          </Link>
        </article>
        <article className="person">
          <Link to="/people/2" className="imgg imgd">
            <div className="people">
              <img src={Daniela} alt="Daniela" className="img" />
              <div className="desc">
                <h4 className="name">Daniela</h4>
                <a href="https://github.com/dtricolici12345" className="git">
                  <div className="non">|</div>
                </a>
                <a
                  href="https://www.linkedin.com/in/tricolici/"
                  className="lin"
                >
                  <div className="non">|</div>
                </a>
              </div>
            </div>
          </Link>
        </article>
        <article className="person">
          <Link to="/people/3" className="imgg imgs">
            <div className="people">
              <img src={Sabrina} alt="Sabrina" className="img" />
              <div className="desc">
                <h4 className="name">Sabrina</h4>
                <a href="https://github.com/40Sabrina" className="git">
                  <div className="non">|</div>
                </a>
              </div>
            </div>
          </Link>
        </article>
        <article className="person">
          <Link to="/people/4" className="imgg imgc">
            <div className="people">
              <img src={Cedric} alt="Cedric" className="img" />
              <div className="desc">
                <h4 className="name">Cedric</h4>
                <a href="https://github.com/cchemin33" className="git">
                  <div className="non">|</div>
                </a>
                <a
                  href="https://www.linkedin.com/in/cedric-c-1451172a1/"
                  className="lin"
                >
                  <div className="non">|</div>
                </a>
              </div>
            </div>
          </Link>
        </article>
        <article className="person">
          <Link to="/people/5" className="imgg imgp">
            <div className="people">
              <img src={Pauline} alt="Pauline" className="img" />
              <div className="desc">
                <h4 className="name">Pauline</h4>
                <a href="https://github.com/Paul-Lac/" className="git">
                  <div className="non">|</div>
                </a>
                <a
                  href="https://www.linkedin.com/in/pauline-lacroix-
                dev/"
                  className="lin"
                >
                  <div className="non">|</div>
                </a>
              </div>
            </div>
          </Link>
        </article>
        <article className="person">
          <Link to="/people/6" className="imgg imgy">
            <div className="people">
              <img src={Yohan} alt="Yohan" className="img" />
              <div className="desc">
                <h4 className="name">Yohan</h4>
                <a href="https://github.com/YohanSoundara" className="git">
                  <div className="non">|</div>
                </a>
                <a
                  href="https://www.linkedin.com/in/yohan-soundara-b54a22236/"
                  className="lin"
                >
                  <div className="non">|</div>
                </a>
              </div>
            </div>
          </Link>
        </article>
        <article className="person">
          <Link to="/people/7" className="imgg imge">
            <div className="people">
              <img src={Elise} alt="Elise" className="img" />
              <div className="desc">
                <h4 className="name">Elise</h4>
                <a href="https://github.com/Elise-Hamm" className="git">
                  <div className="non">|</div>
                </a>
                <a
                  href="https://www.linkedin.com/in/elise-hamm-6aa20a285/"
                  className="lin"
                >
                  <div className="non">|</div>
                </a>
              </div>
            </div>
          </Link>
        </article>
      </section>
    </body>
  );
}

export default Aboutus;
