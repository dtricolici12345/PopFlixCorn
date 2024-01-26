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
      <section className="About-film">
        <div className="About-affiche">
          <div className="About-soon">
            <div className="About-play" />
          </div>
        </div>
        <article className="About-text">
          <div className="About-title">
            <h2>Les Créateurs</h2>
          </div>
          <p className="About-syno">
            Dans un monde où la technologie façonne l'avenir, une équipe de
            développeurs novateurs se réunit pour entreprendre une aventure
            épique à la Wild Code School, une institution légendaire où les
            esprits brillants sont formés à maîtriser l'art du code. (Ce site
            utilise TMDB et les API de TMDB, mais il n'est pas soutenu, certifié
            ou autrement approuvé par TMDB.)
          </p>
        </article>
      </section>
      <section className="About-acteur">
        <article className="About-person">
          <Link to="/people/1">
            <div className="About-people">
              <img src={Ryan} alt="Ryan" className="About-img" />
              <div className="About-desc">
                <h4 className="About-name">Ryan</h4>
                <a href="https://github.com/RetrozDev" className="About-git ">
                  <div className="About-non">|</div>
                </a>
                <a
                  href="https://www.linkedin.com/in/ryan-barboza-880308253/"
                  className="About-lin"
                >
                  <div className="About-non">|</div>
                </a>
              </div>
            </div>
          </Link>
        </article>
        <article className="About-person">
          <Link to="/people/2" className="imgg imgd">
            <div className="About-people">
              <img src={Daniela} alt="Daniela" className="About-img" />
              <div className="About-desc">
                <h4 className="About-name">Daniela</h4>
                <a
                  href="https://github.com/dtricolici12345"
                  className="About-git"
                >
                  <div className="About-non">|</div>
                </a>
                <a
                  href="https://www.linkedin.com/in/tricolici/"
                  className="About-lin"
                >
                  <div className="About-non">|</div>
                </a>
              </div>
            </div>
          </Link>
        </article>
        <article className="About-person">
          <Link to="/people/3" className="imgg imgs">
            <div className="About-people">
              <img src={Sabrina} alt="Sabrina" className="About-img" />
              <div className="About-desc">
                <h4 className="About-name">Sabrina</h4>
                <a href="https://github.com/40Sabrina" className="About-git">
                  <div className="About-non">|</div>
                </a>
              </div>
            </div>
          </Link>
        </article>
        <article className="About-person">
          <Link to="/people/4" className="imgg imgc">
            <div className="About-people">
              <img src={Cedric} alt="Cedric" className="About-img" />
              <div className="About-desc">
                <h4 className="About-name">Cedric</h4>
                <a href="https://github.com/cchemin33" className="About-git">
                  <div className="About-non">|</div>
                </a>
                <a
                  href="https://www.linkedin.com/in/cedric-c-1451172a1/"
                  className="About-lin"
                >
                  <div className="About-non">|</div>
                </a>
              </div>
            </div>
          </Link>
        </article>
        <article className="About-person">
          <Link to="/people/5" className="imgg imgp">
            <div className="About-people">
              <img src={Pauline} alt="Pauline" className="About-img" />
              <div className="About-desc">
                <h4 className="About-name">Pauline</h4>
                <a href="https://github.com/Paul-Lac/" className="About-git">
                  <div className="About-non">|</div>
                </a>
                <a
                  href="https://www.linkedin.com/in/pauline-lacroix-
                dev/"
                  className="About-lin"
                >
                  <div className="About-non">|</div>
                </a>
              </div>
            </div>
          </Link>
        </article>
        <article className="About-person">
          <Link to="/people/6" className="imgg imgy">
            <div className="About-people">
              <img src={Yohan} alt="Yohan" className="About-img" />
              <div className="About-desc">
                <h4 className="About-name">Yohan</h4>
                <a
                  href="https://github.com/YohanSoundara"
                  className="About-git"
                >
                  <div className="About-non">|</div>
                </a>
                <a
                  href="https://www.linkedin.com/in/yohan-soundara-b54a22236/"
                  className="About-lin"
                >
                  <div className="About-non">|</div>
                </a>
              </div>
            </div>
          </Link>
        </article>
        <article className="About-person">
          <Link to="/people/7" className="imgg imge">
            <div className="About-people">
              <img src={Elise} alt="Elise" className="About-img" />
              <div className="About-desc">
                <h4 className="About-name">Elise</h4>
                <a href="https://github.com/Elise-Hamm" className="About-git">
                  <div className="About-non">|</div>
                </a>
                <a
                  href="https://www.linkedin.com/in/elise-hamm-6aa20a285/"
                  className="About-lin"
                >
                  <div className="About-non">|</div>
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
