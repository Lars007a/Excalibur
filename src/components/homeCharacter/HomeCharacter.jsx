import React, { useState, useEffect } from "react";
import styles from "./homeCharacter.module.css";
import Warrior00 from "../../assets/characterImgs/Warrior_Run_0.png";
import Warrior01 from "../../assets/characterImgs/Warrior_Run_1.png";
import Warrior02 from "../../assets/characterImgs/Warrior_Run_2.png";
import Warrior03 from "../../assets/characterImgs/Warrior_Run_3.png";
import Warrior04 from "../../assets/characterImgs/Warrior_Run_4.png";
import Warrior05 from "../../assets/characterImgs/Warrior_Run_5.png";
import Warrior06 from "../../assets/characterImgs/Warrior_Run_6.png";
import Warrior07 from "../../assets/characterImgs/Warrior_Run_7.png";
import Warrior08 from "../../assets/characterImgs/Warrior_Run_8.png";
import Warrior09 from "../../assets/characterImgs/Warrior_Run_9.png";
import Warrior10 from "../../assets/characterImgs/Warrior_Run_10.png";
import Warrior11 from "../../assets/characterImgs/Warrior_Run_11.png";
import Warrior12 from "../../assets/characterImgs/Warrior_Run_12.png";
import Warrior13 from "../../assets/characterImgs/Warrior_Run_13.png";
import Warrior14 from "../../assets/characterImgs/Warrior_Run_14.png";

const Character = () => {
  const images = [
    Warrior00,
    Warrior01,
    Warrior02,
    Warrior03,
    Warrior04,
    Warrior05,
    Warrior06,
    Warrior07,
    Warrior08,
    Warrior09,
    Warrior10,
    Warrior11,
    Warrior12,
    Warrior13,
    Warrior14,
  ];

  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    let lastScrollPosition = 0;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const frame = Math.floor(scrollPosition / 30) % images.length;
      setCurrentFrame(frame); /* Opdaterer state */
      lastScrollPosition = scrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    /* Rydder op i event listener */
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [images.length]);

  return (
    <div className={styles.characterContainer}>
      <img
        className={styles.walkcycle}
        src={images[currentFrame]}
        alt="Walkcycle"
      />
    </div>
  );
};

export default Character;
