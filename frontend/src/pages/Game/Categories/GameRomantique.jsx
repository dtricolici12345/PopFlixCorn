/* eslint-disable no-plusplus */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-plusplus
import "./StyleCategories.css";
import { useState } from "react";
import Result from "../Result/Result";

const romanticsQuestions = [
  {
    title:
      "Quel film a remporté l'Oscar du meilleur film en 1998, racontant une incroyable histoire d'amour sur fond d'événements historiques ?",
    variants: ["Titanic", "La Reine des neiges", "Shakespeare in Love"],
    correct: 0,
  },
  {
    title:
      "Qui a joué les rôles principaux dans le film 'Frères de substitution', une histoire de deux hommes échangeant leur vie ?",
    variants: [
      "Julia Roberts et Tom Hanks",
      "Brad Pitt et Jennifer Aniston",
      "Eddie Murphy et Owen Wilson",
    ],
    correct: 0,
  },
  {
    title:
      "Comment s'appelle la comédie française racontant comment des inconnus décident de changer de vie et deviennent des partenaires idéaux l'un pour l'autre ?",
    variants: [
      "Amour avec préavis",
      "Beautés empoisonnées",
      "Dix bonnes raisons de te larguer",
    ],
    correct: 0,
  },
  {
    title:
      "Dans quel film Ryan Gosling et Rachel McAdams jouent-ils les rôles de Noah et Allie, devenus le symbole d'un amour éternel ?",
    variants: ["La La Land", "Je te promets", "N'oublie jamais"],
    correct: 2,
  },
  {
    title:
      "Quel film romantique raconte l'histoire d'amour entre un Anglais et une Américaine qui se rencontrent lors d'un mariage et décident de se marier le lendemain ?",
    variants: [
      "Belle du Seigneur",
      "Quatre mariages et un enterrement",
      "Un de trop",
    ],
    correct: 1,
  },
  {
    title:
      "Dans quel film Adam Sandler et Drew Barrymore jouent les rôles principaux, revivant le même jour encore et encore ?",
    variants: [
      "Toujours à tes côtés",
      "50 premiers rendez-vous",
      "Le mariage de mon meilleur ami",
    ],
    correct: 1,
  },
  {
    title:
      "Dans 'Valse sentimentale', comment s'appelle le jeu d'enfance où les protagonistes se lancent des défis risqués qui les rapprochent tout au long de leur vie ?",
    variants: [
      "Défis amoureux",
      "Le jeu du Cap ou Pas Cap",
      "Si tu oses, tombe amoureux de moi",
    ],
    correct: 1,
  },
  {
    title:
      "Qui a joué les rôles principaux dans le film 'Brillant', une histoire où un ancien marin revient à la vie après avoir rencontré une femme ?",
    variants: [
      "Richard Gere et Julia Roberts",
      "Matthew McConaughey et Kate Hudson",
      "Leonardo DiCaprio et Kate Winslet",
    ],
    correct: 0,
  },
  {
    title:
      "Quel film sur un étudiant en médecine et une jeune fille atteinte d'une maladie terminale est connu pour son histoire émouvante ?",
    variants: ["Le temps", "Remember Me", "Love, et autres drogues"],
    correct: 2,
  },
  {
    title:
      "Dans quel film Joseph Gordon-Levitt joue-t-il Tom, rêvant d'un amour parfait ?",
    variants: [
      "(500) jours ensemble",
      "Eterium pour les amoureux",
      "Love Without Breaks",
    ],
    correct: 0,
  },
  {
    title:
      "Comment s'appellent les personnages principaux dans le film 'L'Éveil', où l'amour pour la musique devient la clé du bonheur ?",
    variants: [
      "Tony Stark et Pepper Potts",
      "Jimmy Smith et Margarita James",
      "Adrian et Rocky",
    ],
    correct: 2,
  },
  {
    title:
      "Quel film décrit l'histoire d'un jeune couple décidant de tester leur relation en vivant ensemble pendant un an ?",
    variants: ["Le temps", "Long baiser du soir", "How I Met Your Mother"],
    correct: 1,
  },
  {
    title:
      "Qui est le réalisateur du film 'Se souvenir de tout', une histoire où un couple se rencontre après avoir perdu la mémoire ?",
    variants: ["Christopher Nolan", "Spike Jonze", "Michel Gondry"],
    correct: 0,
  },
  {
    title:
      "Quel film raconte l'histoire d'un jeune couple traversant toutes les joies et les peines des relations, commençant par leur rencontre à l'université ?",
    variants: [
      "Quelques bons hommes",
      "10 choses que je déteste chez toi",
      "Midi",
    ],
    correct: 1,
  },
  {
    title:
      "Comment s'appelle le film où Jim Carrey et Kate Winslet jouent les rôles principaux, traversant un divorce mais décidant de se réunir grâce à une technologie d'effacement de mémoire ?",
    variants: [
      "Eternal Sunshine of the Spotless Mind",
      "Eterium pour les amoureux",
      "La meilleure proposition",
    ],
    correct: 0,
  },
  {
    title:
      "Quel film raconte l'histoire d'un amour passionné entre Tristan et Iseut, devenu un modèle de romans courtois ?",
    variants: ["Légende d'un chevalier", "Tron: Legacy", "L'homme parfait"],
    correct: 0,
  },
  {
    title:
      "Qui a joué les rôles principaux dans le film 'Avec amour, Rosie', une histoire de deux amis décidant d'élever leur enfant ensemble ?",
    variants: [
      "Anne Hathaway et Jake Gyllenhaal",
      "Lily Collins et Sam Claflin",
      "Amanda Seyfried et Channing Tatum",
    ],
    correct: 1,
  },
  {
    title:
      "Dans 'Comment se faire larguer en dix leçons', quel métier exerce le personnage joué par Matthew McConaughey, qui accepte un défi professionnel particulier ?",
    variants: ["Journaliste sportif", "Publicitaire", "Psychologue"],
    correct: 1,
  },
  {
    title:
      "Comment s'appelle le film décrivant l'histoire d'amour entre Léon et Mathilda, devenu le symbole de relations inhabituelles ?",
    variants: ["L'amour et les balles", "Le professionnel", "Léon"],
    correct: 2,
  },
  {
    title:
      "Quel film met en scène une histoire d'amour entre un pianiste passionné de jazz et une aspirante actrice, se déroulant dans la vibrante ville de Los Angeles?",
    variants: ["La La Land", "N'oublie jamais", "Artist"],
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

function GameRomantique() {
  const [correct, setCorrect] = useState(0);
  const [step, setStep] = useState(0);

  const shuffledQuestions = shuffleArray(romanticsQuestions);
  const selectedQuestions = shuffledQuestions.slice(0, 10);

  const romanticQuestion = selectedQuestions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === romanticQuestion.correct) {
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
          <h1 className="categoriestitle">{romanticQuestion.title}</h1>
          <ul className="categoriesreponse">
            {romanticQuestion.variants.map((text, index) => (
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

export default GameRomantique;
