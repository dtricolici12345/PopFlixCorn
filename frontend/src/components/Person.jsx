// import React, { useState, useEffect } from "react";
// import "../styles/Us.css";
// import People from "../pages/People.jsx";

// function Person() {
//   const [personData, setPersonData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:4748/api/user")
//       .then((res) => res.json())
//       .then((data) => {
//         setPersonData(data) || console.log(data);
//       });
//   }, []);

//   return (
//     <div>
//       {personData.map((person) => {
//         <People
//           key={person.id}
//           name={person.name}
//           picture={person.picture}
//           text={person.text}
//           movie={person.movie}
//           series={person.series}
//           quote={person.quote}
//           project={person.project}
//           hackathon={person.hackathon}
//         />;
//       })}
//     </div>
//   );
// }

// export default Person;

// http://localhost:4748/api/user

//   useEffect(() => {
//     fetch("http://localhost:4748/api/user")
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.error(error));
//   }, []);
// }
