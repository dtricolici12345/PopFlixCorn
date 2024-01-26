/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-plusplus */
import "./StyleCategories.css";
import { useState } from "react";
import Result from "../Result/Result";

const horreursQuestions = [
  {
    title:
      "Quel film d'horreur raconte l'histoire d'une famille hantée par des esprits malveillants dans leur maison ?",
    variants: ["Insidious", "Conjuring, les dossiers Warren", "Sinister"],
    correct: 1,
  },
  {
    title:
      "Dans quel film d'horreur un groupe d'amis est poursuivi par un tueur masqué portant un masque de hockey ?",
    variants: ["Halloween", "Scream", "Vendredi 13"],
    correct: 2,
  },
  {
    title:
      "Comment s'appelle le film d'horreur où des extraterrestres chassent des humains à l'aveuglette ?",
    variants: ["Sans un bruit", "Phénomènes paranormaux", "Alien"],
    correct: 0,
  },
  {
    title:
      "Quel film d'horreur met en scène un psychopathe qui porte un masque de bœuf et torture ses victimes ?",
    variants: ["Hostel", "Massacre à la tronçonneuse", "Saw"],
    correct: 1,
  },
  {
    title:
      "Dans quel film d'horreur une équipe de documentaristes explore des phénomènes paranormaux dans une maison abandonnée ?",
    variants: [
      "Le Projet Blair Witch",
      "Paranormal Activity",
      "Grave Encounters",
    ],
    correct: 0,
  },
  {
    title:
      "Quel film d'horreur met en scène une poupée possédée par l'esprit d'un tueur en série ?",
    variants: ["Chuky", "Annabelle", "Conjuring"],
    correct: 0,
  },
  {
    title:
      "Dans quel film d'horreur des personnes doivent survivre en restant silencieuses pour échapper à des créatures sensibles au son ?",
    variants: ["Don't breathe", "Bird Box", "Sans un bruit"],
    correct: 2,
  },
  {
    title:
      "Quel film d'horreur classique met en scène une famille en proie à des attaques de requins ?",
    variants: ["Sharknado", "En eaux troublesThe Meg", "Les Dents de la mer"],
    correct: 2,
  },
  {
    title:
      "Dans quel film d'horreur une femme est possédée par un démon après avoir joué avec une planche de Ouija ?",
    variants: ["L'Exorciste", "Ouija", "The Conjuring"],
    correct: 1,
  },
  {
    title:
      "Quel film d'horreur suit l'histoire d'une femme traquée par un fan obsédé ?",
    variants: ["Le Fan", "Misery", "The Strangers"],
    correct: 1,
  },
  {
    title:
      "Dans quel film d'horreur des morts-vivants se lèvent pour dévorer les vivants ?",
    variants: [
      "La Nuit des morts-vivants",
      "28 Jours plus tard",
      "World War Z",
    ],
    correct: 0,
  },
  {
    title:
      "Quel film d'horreur met en scène un psychopathe masqué qui traque des adolescents à l'approche d'Halloween ?",
    variants: ["Scream", "Vendredi 13", "Halloween"],
    correct: 2,
  },
  {
    title:
      "Dans quel film d'horreur une famille est terrorisée par des doubles maléfiques d'eux-mêmes ?",
    variants: ["Us", "Les Autres", "Get Out"],
    correct: 0,
  },
  {
    title:
      "Quel film d'horreur suit un groupe d'amis piégés dans une cabine isolée avec des démons libérés par un livre ancien ?",
    variants: ["La Cabane dans les bois", "Jusqu'en enfer", "The Evil Dead"],
    correct: 2,
  },
  {
    title:
      "Dans quel film d'horreur une adolescente est poursuivie dans ses rêves par un tueur surnaturel portant un gant de lames ?",
    variants: ["Les Griffes de la nuit", "Halloween", "Vendredi 13"],
    correct: 0,
  },
  {
    title:
      "Quel film d'horreur met en scène une femme obsédée par sa mère décédée qui commet des meurtres à l'aide d'un couteau de cuisine ?",
    variants: ["Carrie", "Psycho", "Le Silence des agneaux"],
    correct: 1,
  },
  {
    title:
      "Dans quel film d'horreur une famille reçoit la visite d'intrus masqués cherchant à semer la terreur ?",
    variants: ["The Strangers", "Funny Games", "You're Next"],
    correct: 0,
  },
  {
    title:
      "Quel film d'horreur suit un groupe de personnes coincées dans une station de recherche en Antarctique avec une créature extraterrestre ?",
    variants: ["The Thing", "Alien", "Les Huit Salopards"],
    correct: 0,
  },
  {
    title:
      "Dans quel film d'horreur une femme découvre qu'elle est héritière d'une malédiction après avoir été invitée dans un château isolé ?",
    variants: ["Crimson Peak", "The Witch", "Suspiria"],
    correct: 1,
  },
  {
    title:
      "Quel film d'horreur met en scène un groupe d'amis confrontés à des événements surnaturels lors d'un séjour dans une cabane isolée ?",
    variants: ["Evil Dead", "La Cabane dans les bois", "Cabin Fever"],
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
function GameHorreur() {
  const [correct, setCorrect] = useState(0);
  const [step, setStep] = useState(0);
  const shuffledQuestions = shuffleArray(horreursQuestions);
  const selectedQuestions = shuffledQuestions.slice(0, 10);
  const horreurQuestion = selectedQuestions[step];
  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === horreurQuestion.correct) {
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
          <h1 className="categoriestitle">{horreurQuestion.title}</h1>
          <ul className="categoriesreponse">
            {horreurQuestion.variants.map((text, index) => (
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
export default GameHorreur;
