/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-plusplus */
import "../../GameHello/GameRomantique/GameRomantique.css";
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
    variants: ["Halloween", "Scream", "Friday the 13th"],
    correct: 2,
  },
  {
    title:
      "Comment s'appelle le film d'horreur où des extraterrestres chassent des humains à l'aveuglette ?",
    variants: ["A Quiet Place", "The Fourth Kind", "Alien"],
    correct: 0,
  },
  {
    title:
      "Quel film d'horreur met en scène un psychopathe qui porte un masque de bœuf et torture ses victimes ?",
    variants: ["Hostel", "The Texas Chain Saw Massacre", "Saw"],
    correct: 1,
  },
  {
    title:
      "Dans quel film d'horreur une équipe de documentaristes explore des phénomènes paranormaux dans une maison abandonnée ?",
    variants: [
      "The Blair Witch Project",
      "Paranormal Activity",
      "Grave Encounters",
    ],
    correct: 0,
  },
  {
    title:
      "Quel film d'horreur met en scène une poupée possédée par l'esprit d'un tueur en série ?",
    variants: ["Child's Play", "Annabelle", "The Conjuring"],
    correct: 0,
  },
  {
    title:
      "Dans quel film d'horreur des personnes doivent survivre en restant silencieuses pour échapper à des créatures sensibles au son ?",
    variants: ["A Quiet Place", "Don't Breathe", "Bird Box"],
    correct: 0,
  },
  {
    title:
      "Quel film d'horreur classique met en scène une famille en proie à des attaques de requins ?",
    variants: ["Jaws", "Sharknado", "The Meg"],
    correct: 0,
  },
  {
    title:
      "Dans quel film d'horreur une femme est possédée par un démon après avoir joué avec une planche de Ouija ?",
    variants: ["The Exorcist", "Ouija", "The Conjuring"],
    correct: 1,
  },
  {
    title:
      "Quel film d'horreur suit l'histoire d'une femme traquée par un fan obsédé ?",
    variants: ["Misery", "The Fan", "The Strangers"],
    correct: 0,
  },
  {
    title:
      "Dans quel film d'horreur des morts-vivants se lèvent pour dévorer les vivants ?",
    variants: ["Night of the Living Dead", "28 Days Later", "World War Z"],
    correct: 0,
  },
  {
    title:
      "Quel film d'horreur met en scène un psychopathe masqué qui traque des adolescents à l'approche d'Halloween ?",
    variants: ["Halloween", "Scream", "Friday the 13th"],
    correct: 0,
  },
  {
    title:
      "Dans quel film d'horreur une famille est terrorisée par des doubles maléfiques d'eux-mêmes ?",
    variants: ["Us", "The Others", "Get Out"],
    correct: 0,
  },
  {
    title:
      "Quel film d'horreur suit un groupe d'amis piégés dans une cabine isolée avec des démons libérés par un livre ancien ?",
    variants: ["The Evil Dead", "Cabin in the Woods", "Drag Me to Hell"],
    correct: 0,
  },
  {
    title:
      "Dans quel film d'horreur une adolescente est poursuivie dans ses rêves par un tueur surnaturel portant un gant de lames ?",
    variants: ["A Nightmare on Elm Street", "Halloween", "Friday the 13th"],
    correct: 0,
  },
  {
    title:
      "Quel film d'horreur met en scène une femme obsédée par sa mère décédée qui commet des meurtres à l'aide d'un couteau de cuisine ?",
    variants: ["Psycho", "Carrie", "The Silence of the Lambs"],
    correct: 0,
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
    variants: ["The Thing", "Alien", "The Hateful Eight"],
    correct: 0,
  },
  {
    title:
      "Dans quel film d'horreur une femme découvre qu'elle est héritière d'une malédiction après avoir été invitée dans un château isolé ?",
    variants: ["The Witch", "Crimson Peak", "Suspiria"],
    correct: 0,
  },
  {
    title:
      "Quel film d'horreur met en scène un groupe d'amis confrontés à des événements surnaturels lors d'un séjour dans une cabane isolée ?",
    variants: ["Evil Dead", "The Cabin in the Woods", "Cabin Fever"],
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
          <h1>{horreurQuestion.title}</h1>
          <ul>
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
