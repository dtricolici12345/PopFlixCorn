import { Link } from "react-router-dom";
import "../styles/About.css";

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
            <h1>Les Créateurs</h1>
            <h5>(En cours)</h5>
          </div>
          <p className="syno">
            blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
            <br />
            blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
            <br />
            blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
            <br />
            blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
            <br />
            blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
            <br />
            blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
            <br />
            blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
            <br />
          </p>
        </article>
      </section>
      <section className="acteur">
        <article className="person">
          <Link to="/people/1" className="imgg imgr">
            <div className="people">
              <h4 className="name">Ryan</h4>
              <a href="https://github.com/RetrozDev" className="git">
                <div>|</div>
              </a>
              <a
                href="https://www.linkedin.com/in/ryan-barboza-880308253/"
                className="lin"
              >
                <div>|</div>
              </a>
            </div>
          </Link>
        </article>
        <article className="person">
          <Link to="/people/2" className="imgg imgd">
            <div className="people">
              <h4 className="name">Daniela</h4>
              <a href="https://github.com/dtricolici12345" className="git">
                <div>|</div>
              </a>
              <a href="https://www.linkedin.com/in/tricolici/" className="lin">
                <div>|</div>
              </a>
            </div>
          </Link>
        </article>
        <article className="person">
          <Link to="/people/3" className="imgg imgs">
            <div className="people">
              <h4 className="name">Sabrina</h4>
              <a href="https://github.com/40Sabrina" className="git">
                <div>|</div>
              </a>
            </div>
          </Link>
        </article>
        <article className="person">
          <Link to="/people/4" className="imgg imgc">
            <div className="people">
              <h4 className="name">Cedric</h4>
              <a href="https://github.com/cchemin33" className="git">
                <div>|</div>
              </a>
              <a
                href="https://www.linkedin.com/in/cedric-c-1451172a1/"
                className="lin"
              >
                <div>|</div>
              </a>
            </div>
          </Link>
        </article>
        <article className="person">
          <Link to="/people/5" className="imgg imgp">
            <div className="people">
              <h4 className="name">Pauline</h4>
              <a href="https://github.com/Paul-Lac/" className="git">
                <div>|</div>
              </a>
              <a
                href="https://www.linkedin.com/in/pauline-lacroix-
              dev/"
                className="lin"
              >
                <div>|</div>
              </a>
            </div>
          </Link>
        </article>
        <article className="person">
          <Link to="/people/6" className="imgg imgy">
            <div className="people">
              <h4 className="name">Yohan</h4>
              <a href="https://github.com/YohanSoundara" className="git">
                <div>|</div>
              </a>
              <a
                href="https://www.linkedin.com/in/yohan-soundara-b54a22236/"
                className="lin"
              >
                <div>|</div>
              </a>
            </div>
          </Link>
        </article>
        <article className="person">
          <Link to="/people/7" className="imgg imge">
            <div className="people">
              <h4 className="name">Elise</h4>
              <a href="https://github.com/Elise-Hamm" className="git">
                <div>|</div>
              </a>
              <a
                href="https://www.linkedin.com/in/elise-hamm-6aa20a285/"
                className="lin"
              >
                <div>|</div>
              </a>
            </div>
          </Link>
        </article>
      </section>
    </body>
  );
}

export default Aboutus;
