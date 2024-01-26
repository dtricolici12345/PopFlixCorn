/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-plusplus */
import "./StyleCategories.css";
import { useState } from "react";
import Result from "../Result/Result";

const animeQuestions = [
  {
    title:
      "Quel anime suit les aventures de Monkey D. Luffy et de son équipage en quête du One Piece, le trésor ultime ?",
    variants: ["Naruto", "Dragon Ball", "One Piece"],
    correct: 2,
  },
  {
    title:
      "Dans quel anime un jeune alchimiste, Edward Elric, recherche la pierre philosophale pour retrouver son corps après une expérience qui a mal tourné ?",
    variants: ["Fullmetal Alchemist", "Attack on Titan", "Death Note"],
    correct: 0,
  },
  {
    title:
      "Quel anime raconte l'histoire de Light Yagami, un étudiant qui découvre un carnet permettant de tuer des personnes simplement en écrivant leur nom ?",
    variants: ["One Punch Man", "My Hero Academia", "Death Note"],
    correct: 2,
  },
  {
    title:
      "Dans quel anime des lycéens combattent des monstres connus sous le nom de Titans pour protéger leur cité fortifiée ?",
    variants: ["Naruto", "Attack on Titan", "Bleach"],
    correct: 1,
  },
  {
    title:
      "Quel anime suit les aventures de Gon Freecss, un jeune garçon en quête pour devenir un chasseur de trésors et retrouver son père absent ?",
    variants: ["Hunter x Hunter", "One Punch Man", "My Hero Academia"],
    correct: 0,
  },
  {
    title:
      "Dans quel anime un groupe de héros étudiants forme l'U.A. High School pour devenir des super-héros professionnels ?",
    variants: ["Bleach", "My Hero Academia", "Fullmetal Alchemist"],
    correct: 1,
  },
  {
    title:
      "Quel anime suit les aventures de deux frères, Alphonse et Edward Elric, qui utilisent l'alchimie dans leur quête pour retrouver leurs corps perdus ?",
    variants: ["Attack on Titan", "Fullmetal Alchemist", "Naruto"],
    correct: 1,
  },
  {
    title:
      "Dans quel anime des jeunes chasseurs de monstres, appelés Slayers, luttent contre les créatures surnaturelles pour protéger l'humanité ?",
    variants: ["Demon Slayer", "One Piece", "Tokyo Ghoul"],
    correct: 0,
  },
  {
    title:
      "Quel anime met en scène des combats de ninjas dans le village caché de Konoha, avec le personnage principal, Naruto Uzumaki ?",
    variants: ["Bleach", "One Punch Man", "Naruto"],
    correct: 2,
  },
  {
    title:
      "Dans quel anime des étudiants du lycée Karasuno forment une équipe de volley-ball et aspirent à devenir les meilleurs au Japon ?",
    variants: ["Haikyuu!!", "My Hero Academia", "Attack on Titan"],
    correct: 0,
  },
  {
    title:
      "Quel anime suit les aventures de Tanjiro Kamado, un jeune garçon qui devient chasseur de démons pour venger sa famille massacrée ?",
    variants: ["One Punch Man", "Demon Slayer", "Naruto"],
    correct: 1,
  },
  {
    title:
      "Dans quel anime des héros utilisent des pouvoirs appelés 'Quirks' pour lutter contre les méchants et protéger la société ?",
    variants: ["Bleach", "One Punch Man", "My Hero Academia"],
    correct: 2,
  },
  {
    title:
      "Quel anime suit les aventures de Eren Yeager, Mikasa Ackerman et Armin Arlert, luttant contre des Titans pour la survie de l'humanité ?",
    variants: ["Naruto", "Attack on Titan", "Dragon Ball"],
    correct: 1,
  },
  {
    title:
      "Dans quel anime des jeunes étudiants développent des pouvoirs surnaturels après avoir survécu à une catastrophe ?",
    variants: ["One Punch Man", "My Hero Academia", "Death Note"],
    correct: 1,
  },
  {
    title:
      "Quel anime suit les péripéties de deux frères, Edward et Alphonse Elric, dans leur quête de la pierre philosophale ?",
    variants: ["Fullmetal Alchemist", "Hunter x Hunter", "Naruto"],
    correct: 0,
  },
  {
    title:
      "Dans quel anime des héros utilisent des carnets de la mort pour tuer des personnes en écrivant leur nom ?",
    variants: ["Death Note", "Demon Slayer", "My Hero Academia"],
    correct: 0,
  },
  {
    title:
      "Quel anime suit les aventures de Saitama, un héros qui peut vaincre n'importe quel ennemi en un seul coup de poing ?",
    variants: ["Naruto", "Bleach", "One Punch Man"],
    correct: 2,
  },
  {
    title:
      "Dans quel anime des enquêteurs traquent des goules, des créatures qui se nourrissent de chair humaine, dans un Tokyo dystopique ?",
    variants: ["Tokyo Ghoul", "Attack on Titan", "Demon Slayer"],
    correct: 0,
  },
  {
    title:
      "Quel anime suit les aventures de Natsu Dragneel et de son équipe de chasseurs de dragons dans le monde de la magie ?",
    variants: ["One Piece", "Hunter x Hunter", "Fairy Tail"],
    correct: 2,
  },
  {
    title:
      "Dans quel anime des lycéens découvrent un carnet qui peut tuer des personnes, provoquant des débats moraux sur la justice ?",
    variants: ["One Punch Man", "Death Note", "My Hero Academia"],
    correct: 1,
  },
];

function shuffleArray(array) {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function GameAnime() {
  const [correct, setCorrect] = useState(0);
  const [step, setStep] = useState(0);
  const shuffledQuestions = shuffleArray(animeQuestions);
  const selectedQuestions = shuffledQuestions.slice(0, 10);
  const animeQuestion = selectedQuestions[step];
  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === animeQuestion.correct) {
      setCorrect(correct + 1);
    }
  };
  const percentage = Math.round((step / selectedQuestions.length) * 100);
  const hasNextQuestion = step < selectedQuestions.length;
  return (
    <div className="question-container">
      {hasNextQuestion ? (
        <div className="question-romantique">
          <div className="progress">
            <div
              style={{ width: `${percentage}%` }}
              className="progress__inner"
            />
          </div>
          <h1 className="categoriestitle">{animeQuestion.title}</h1>
          <ul className="categoriesreponse">
            {animeQuestion.variants.map((text, index) => (
              <li onClick={() => onClickVariant(index)} key={text}>
                {text}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Result correct={correct} total={selectedQuestions.length} />
      )}
    </div>
  );
}
export default GameAnime;
