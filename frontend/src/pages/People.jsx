// import React, { useState, useEffect } from 'react';
// import '../styles/Us.css';

// const People = () => {
//   const [apiData, setApiData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('URL_DE_VOTRE_API');
//         const data = await response.json();
//         setApiData(data);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des données de l API', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const [personData, setPersonData] = useState(apiData[0]);

//   const updatePersonData = (personId) => {
//     const selectedPerson = apiData.find(person => person.id === personId);
//     setPersonData(selectedPerson);
//   };

//   return (
//     <body>
//       <section className="film">
//         <article className="affiche">
//           <div className="soonr"></div>
//         </article>
//         <article className="text">
//           <div className="title">
//           <h1>{personData.name}</h1>
//           </div>
//           <p className="syno">
//             {personData.text}
//             <br />
//             Film: {personData.movie}
//             <br />
//             Série: {personData.series}
//             <br />
//             Citation: {personData.quote}
//           </p>
//         </article>
//       </section>
//       <section className="acteur">
//         <article key={person.id} className="person">
//           <a href="https://github.com/codeIsHard2023/AdopteUneChaussette" className="soon1"></a>
//           <div className="people">
//             <h4 className="name">{personData.project}</h4>
//           </div>
//         </article>
//         <article className="person">
//           <a href="https://github.com/ThisIsHowVillainsAreMade/Star-Love" className="soon2"></a>
//           <div className="people">
//             <h4 className="name">{personData.hackathon}</h4>
//           </div>
//         </article>
//       </section>
//     </body>
//   );
// };

// export default People;
