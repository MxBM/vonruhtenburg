import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import dallas from '../assets/dallas.webp';
import beijing from '../assets/beijing.webp';
import austin from '../assets/austin.webp';
import newyork from '../assets/newyork.webp';
import sanfrancisco from '../assets/sanfrancisco.webp';
import styles from './Menu.module.scss';

import {
  fadeIn,
  staggerText,
  staggerReveal,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose,
  handleHover
} from '../utils/Animations';
const Menu = ({ state }) => {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBG = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  const cities = [
    { name: 'Dallas', image: dallas },
    { name: 'Austin', image: austin },
    { name: 'New York', image: newyork },
    { name: 'San Francisco', image: sanfrancisco },
    { name: 'Beijing', image: beijing }
  ];

  useEffect(() => {
    console.log('clicked');
    if (state.clicked === false) {
      staggerRevealClose(revealMenu, revealMenuBG);
      gsap.to(menu, {
        duration: 1,
        css: { display: 'none' }
      });
    } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
      gsap.to(menu, {
        duration: 0,
        css: { display: 'flex' }
      });
      gsap.to([revealMenuBG, revealMenu], {
        duration: 0,
        opacity: 1,
        height: '100%'
      });
      staggerReveal(revealMenuBG, revealMenu);
      fadeIn(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={(el) => (menu = el)} className={styles.menu}>
      <div className={styles.menu__content}>
        <div ref={(el) => (revealMenuBG = el)} className={styles.menu__secondary}>
          <div ref={(el) => (revealMenu = el)} className={styles.menu__secondary__layer}>
            <div
              ref={(el) => (cityBackground = el)}
              className={styles.menu__secondary__layer__design}></div>
            <div className={styles.container}>
              <div className={styles.container__links}>
                <nav>
                  <ul>
                    <li>
                      <Link
                        ref={(el) => (line1 = el)}
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        to="/opportunities">
                        Shop
                      </Link>
                    </li>
                    <li>
                      <Link
                        ref={(el) => (line2 = el)}
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        to="/solutions">
                        Collections
                      </Link>
                    </li>
                    <li>
                      <Link
                        ref={(el) => (line3 = el)}
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        to="/contact-us">
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div ref={(el) => (info = el)} className={styles.container__links__info}>
                  <h3>Our Ideals</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industrys standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </p>
                </div>
                <div className={styles.locations}>
                  Locations:
                  {cities.map((el) => (
                    <span
                      key={el.name}
                      onMouseEnter={() => handleCity(el.image, cityBackground)}
                      onMouseOut={() => handleCityReturn(cityBackground)}>
                      {el.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
