import React, { useEffect, useRef, useState } from "react";
import styles from "./homeBoatCharacter.module.css";
import BoatCharacterImg from "../../assets/characterImgs/warrior_in_boat1.png";

const HomeBoatCharacter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const boatCharacterRef = useRef(null);

  const handleScroll = () => {
    const y = window.scrollY;
    if (y >= 3100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.BoatCharacterContainer}>
      <img
        ref={boatCharacterRef}
        className={`${styles.BoatCharacter} ${
          isVisible ? styles.ScrollShow : styles.ScrollHide
        }`}
        src={BoatCharacterImg}
        alt="Animated character in boat"
      />
    </div>
  );
};

export default HomeBoatCharacter;
