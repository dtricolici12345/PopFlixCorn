

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
      <input type="checkbox" id="toggle" checked={isMenuOpen} onChange={toggleMenu} />
      <label id="show-menu" htmlFor="toggle">
        <div className="btn" >
          <i className={`material-icons md-36 toggleBtn menuBtn ${isMenuOpen ? 'hidden' : ''}`}>menu</i>
          <i className={`material-icons md-36 toggleBtn closeBtn ${isMenuOpen ? '' : 'hidden'}`}>close</i>
        </div>
        <NavLink to="/filter" className="btn">
        <img src="src\assets\filter.png" className="material-icons md-36" alt="Filter" />
        </NavLink>
        <NavLink to="/checklist" className="btn">
        <img  src="src\assets\checklist.png" alt="CheckList" className="material-icons md-36"  />
        </NavLink>
        <NavLink to="/game" className="btn">
        <img src="src\assets\game.png" alt="Game" className="material-icons md-36"/>
        </NavLink>
        <NavLink to="/shope" className="btn">
        <img src="src\assets\shope.png" alt="Shope"  className="material-icons md-36"  />
        </NavLink>
        <NavLink to="/aboutus" className="btn">
        <img src="src\assets\aboutus.png" alt="AboutUs" className="material-icons md-36"  />
        </NavLink>
        {/* Добавьте остальные NavLink с вашими иконками */}
      </label>
    </div>
  );
};

export default Menu;


// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import './Menu.css';

// const Menu = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
//       <input type="checkbox" id="toggle" checked={isMenuOpen} onChange={toggleMenu} />
//       <label id="show-menu" htmlFor="toggle">
//         <NavLink to="/filter" className={`btn ${isMenuOpen ? 'hidden' : ''}`}>
//           <img src="src\assets\filter.png" className="material-icons md-36" alt="Filter" />
//         </NavLink>
//         <NavLink to="/checklist" className={`btn ${isMenuOpen ? 'hidden' : ''}`}>
//           <img src="src\assets\checklist.png" alt="CheckList" className="material-icons md-36" />
//         </NavLink>
//         <NavLink to="/game" className={`btn ${isMenuOpen ? 'hidden' : ''}`}>
//           <img src="src\assets\game.png" alt="Game" className="material-icons md-36" />
//         </NavLink>
//         <NavLink to="/shope" className={`btn ${isMenuOpen ? 'hidden' : ''}`}>
//           <img src="src\assets\shope.png" alt="Shope" className="material-icons md-36" />
//         </NavLink>
//         <NavLink to="/aboutus" className={`btn ${isMenuOpen ? 'hidden' : ''}`}>
//           <img src="src\assets\aboutus.png" alt="AboutUs" className="material-icons md-36" />
//         </NavLink>
//       </label>
//     </div>
//   );
// };

// export default Menu;
