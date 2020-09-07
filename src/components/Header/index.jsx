import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

import logoImage from '../../assets/images/logo.png';
import menuIcon from '../../assets/icons/menu.png';

function Header({ categories = [], userLogged = false }) {
  const hasCategories = categories.length;
  const [showMenu, setShowMenu] = useState(false);

  const labelUser = userLogged ? 'logout' : 'login';

  /**
   * Toggles the menu, to show it or hide
   */
  function toggleMenu () {
    setShowMenu(!showMenu);
  }

  return (
    <header id="page-header">
      <div className="top-bar-container">
        <img
          className={ hasCategories ? 'hidden' : '' }
          src={ menuIcon }
          alt="Show the main menu"
          onClick={ toggleMenu }
        />
        <div className={ `logo-box ${hasCategories ? 'margin-0' : ''}` } >
          <Link to="/">
            <img src={ logoImage } alt="News App logo" />
          </Link>
        </div>
          <nav
            id="menu-section"
            className={ `${showMenu ? 'show-menu' : '' } ${!hasCategories ? 'hidden' : '' }`}
            aria-label="mainmenulabel"
          >
          <ul className="menu-container">
            <h2 id="mainmenulabel" hidden>Main Menu</h2>
            {categories.map((category) => {
              return (
                <li
                  aria-label={ category }
                  tabIndex="0"
                  key={ category} 
                > 
                  { category }
                </li>
              )
            })}
            <Link to="/login">
              <li
                className="login"
                aria-label={ labelUser }
                tabIndex="0"
              > 
                { labelUser }
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  categories: PropTypes.instanceOf(Array),
  userLogged: PropTypes.bool
};

export default Header;