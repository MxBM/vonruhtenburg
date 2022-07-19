import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Menu = ({ state }) => {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBG = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 1.5,
      height: 0,
      skewY: 2,
      transformOrigin: 'right top',
      ease: 'power3.inOut',
      stagger: {
        amount: 0.1
      }
    });
  };

  const fadeIn = (node) => {
    gsap.from([node], {
      y: 60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: 'power3.inOut'
    });
  };

  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      y: 100,
      delay: 0.1,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.3
      }
    });
  };

  useEffect(() => {
    console.log('clicked');
    if (state.clicked === false) {
      gsap.to([revealMenu, revealMenuBG], {
        duration: 0.8,
        height: 0,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.07
        }
      });
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
        height: 1000
      });
      staggerReveal(revealMenuBG, revealMenu);
      fadeIn(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={(el) => (menu = el)} className="v-menu">
      <div ref={(el) => (revealMenuBG = el)} className="menu-secondary-bg-color">
        <div ref={(el) => (revealMenu = el)} className="menu-layer">
          <div className="menu-design-bg"></div>
          <div className="container">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link ref={(el) => (line1 = el)} to="/opportunities">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link ref={(el) => (line2 = el)} to="/solutions">
                      Collections
                    </Link>
                  </li>
                  <li>
                    <Link ref={(el) => (line3 = el)} to="/contact-us">
                      About Us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className="info">
                <h3>Our Ideals</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industrys standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
              </div>
              <div className="locations">
                Locations: <span>Dallas</span>
                <span>Austin</span>
                <span>LA</span>
                <span>New York</span>
                <span>San Francisco</span>
                <span>Bejing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
