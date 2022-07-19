import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Menu from '../components/Menu';

const Header = () => {
  let location = useLocation();
  const [disabled, setDisabled] = useState(false);
  const [menuState, setMenuState] = useState({
    initial: false,
    clicked: null,
    menuName: 'Menu'
  });

  useEffect(() => {
    setMenuState({ clicked: false, menuName: 'Menu' });
  }, [location]);

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  const handleMenu = () => {
    //TODO: Refactor function.
    disableMenu();
    if (menuState.initial === false) {
      setMenuState({
        initial: null,
        clicked: true,
        menuName: 'Close'
      });
    } else if (menuState.clicked === true) {
      //TODO: Make a callback function instead.
      setMenuState({
        clicked: !menuState.clicked,
        menuName: 'Menu'
      });
    } else if (menuState.clicked === false) {
      //TODO: Make a callback function instead.
      setMenuState({
        clicked: !menuState.clicked,
        menuName: 'Close'
      });
    }
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">Vonruhtenberg</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <Menu state={menuState}></Menu>
    </header>
  );
};

export default Header;
