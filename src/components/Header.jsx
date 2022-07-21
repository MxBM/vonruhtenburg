import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import Menu from './Menu';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { FaAngleDoubleUp } from 'react-icons/fa';

export default function Header() {
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
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.logo}>
          <Link to="/">Vonruhtenberg</Link>
        </div>
        <div className={styles.header__button__container}>
          <button disabled={disabled} onClick={() => handleMenu()} className={styles.button}>
            Menu
          </button>
        </div>
        <button className={styles.header__toggler}>
          {/*TODO: Integrate state into icon.*/}
          <FaAngleDoubleDown />
        </button>
      </div>
      <Menu state={menuState}></Menu>
    </div>
  );
}
