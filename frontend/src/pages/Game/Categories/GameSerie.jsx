/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-plusplus */
import "./StyleCategories.css";
import { useState } from "react";
import Result from "../Result/Result";

const seriesQuestions = [
  {
    title:
      "Quel série suit les aventures de Walter White, un professeur de chimie devenu fabricant de méthamphétamine après un diagnostic de cancer ?",
    variants: ["Breaking Bad", "The Sopranos", "Stranger Things"],
    correct: 0,
  },
  {
    title:
      "Dans quelle série des amis vivent à New York et partagent leurs expériences professionnelles et personnelles ?",
    variants: ["How I Met Your Mother", "Friends", "The Office"],
    correct: 1,
  },
  {
    title:
      "Quelle série se déroule dans le Royaume des Sept Couronnes et suit les luttes pour le trône de fer ?",
    variants: ["Breaking Bad", "Game of Thrones", "The Crown"],
    correct: 1,
  },
  {
    title:
      "Dans quelle série une famille dysfonctionnelle gère une entreprise de médias et tente de rester au pouvoir malgré les intrigues familiales ?",
    variants: ["Succession", "The Sopranos", "Mad Men"],
    correct: 0,
  },
  {
    title:
      "Quelle série comique suit les employés d'une entreprise de vente de papier à Scranton, en Pennsylvanie ?",
    variants: ["Brooklyn Nine-Nine", "The Office", "Parks and Recreation"],
    correct: 1,
  },
  {
    title:
      "Dans quelle série les personnages combattent pour survivre dans un monde envahi par des morts-vivants ?",
    variants: ["The Walking Dead", "Stranger Things", "Black Mirror"],
    correct: 0,
  },
  {
    title:
      "Quelle série de science-fiction suit un groupe d'enfants avec des capacités surnaturelles confrontés à des phénomènes étranges dans leur petite ville ?",
    variants: ["Black Mirror", "Westworld", "Stranger Things"],
    correct: 2,
  },
  {
    title:
      "Dans quelle série une analyste de la CIA poursuit des criminels internationaux tout en naviguant dans les complexités de la vie personnelle et professionnelle ?",
    variants: ["Homeland", "The Crown", "Breaking Bad"],
    correct: 0,
  },
  {
    title:
      "Quelle série suit la vie d'un chimiste devenu baron de la drogue au fil des décennies ?",
    variants: ["Breaking Bad", "Narcos", "The Sopranos"],
    correct: 1,
  },
  {
    title:
      "Dans quelle série des employés du gouvernement américain s'occupent de situations inhabituelles et surnaturelles ?",
    variants: ["Stranger Things", "Supernatural", "The X-Files"],
    correct: 2,
  },
  {
    title:
      "Quelle série met en scène des vikings explorant, pillant et commerçant à l'époque médiévale ?",
    variants: ["Game of Thrones", "The Last Kingdom", "Vikings"],
    correct: 2,
  },
  {
    title:
      "Dans quelle série un groupe de survivants tente de reconstruire la civilisation après une apocalypse zombie ?",
    variants: ["The Walking Dead", "Fear the Walking Dead", "Z Nation"],
    correct: 0,
  },
  {
    title:
      "Quelle série suit les enquêtes du détective Sherlock Holmes dans le Londres contemporain ?",
    variants: ["Sherlock", "Elementary", "Mindhunter"],
    correct: 0,
  },
  {
    title:
      "Dans quelle série des prisonniers planifient des évasions spectaculaires tout en étant incarcérés ?",
    variants: ["Breaking Bad", "Prison Break", "Orange Is the New Black"],
    correct: 1,
  },
  {
    title:
      "Quelle série documentaire criminelle explore des affaires judiciaires réelles et non résolues ?",
    variants: ["Making a Murderer", "Mindhunter", "The Keepers"],
    correct: 0,
  },
  {
    title:
      "Dans quelle série des extraterrestres envahissent la Terre et luttent contre les forces humaines pour la domination planétaire ?",
    variants: ["Stranger Things", "Falling Skies", "V"],
    correct: 1,
  },
  {
    title:
      "Quelle série suit les aventures d'un groupe de jeunes adultes confrontés à des mystères surnaturels dans une petite ville ?",
    variants: ["Riverdale", "Stranger Things", "Twin Peaks"],
    correct: 0,
  },
  {
    title:
      "Dans quelle série des agents du FBI enquêtent sur des phénomènes paranormaux et non résolus ?",
    variants: ["Fringe", "The X-Files", "Supernatural"],
    correct: 1,
  },
  {
    title:
      "Quelle série suit la vie d'un jeune chirurgien atteint d'autisme et de syndrome du savant travaillant dans un hôpital prestigieux ?",
    variants: ["The Good Doctor", "Grey's Anatomy", "House, M.D."],
    correct: 0,
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
function GameSerie() {
  const [correct, setCorrect] = useState(0);
  const [step, setStep] = useState(0);
  const shuffledQuestions = shuffleArray(seriesQuestions);
  const selectedQuestions = shuffledQuestions.slice(0, 10);
  const serieQuestion = selectedQuestions[step];
  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === serieQuestion.correct) {
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
          <h1 className="categoriestitle">{serieQuestion.title}</h1>
          <ul className="categoriesreponse">
            {serieQuestion.variants.map((text, index) => (
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
export default GameSerie;
