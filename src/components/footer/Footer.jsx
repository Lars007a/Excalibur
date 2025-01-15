import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaArrowUp } from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <h3>Om os</h3>
        <p>
          Rollespil arrangeres af Excalibur, som er en forening drevet af
          frivillige og entusiastiske rollespillere. Excalibur er medlem af DUF
          igennem Bifrost, som er landsforeningen for kreativ udvikling af børn
          og unge.
        </p>
        <img src="/logo.png" alt="logo" />
      </div>
      <div className={styles.footerLinks}>
        <Link to="/News">Nyheder</Link>
        <Link to="/Arrangements">Arrangementer</Link>
        <Link to="/Info">Info</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/Member">Bliv medlem</Link>
        <Link to="/Contact">Kontakt</Link>
      </div>
      <div>
        <strong>Følg os her</strong>
        <div className={styles.footerIcons}>
          <Link to="https://www.facebook.com">
            <FaFacebook />
          </Link>
          <Link to="https://www.instagram.com">
            <FaInstagramSquare />
          </Link>
        </div>
      </div>
      {isVisible && (
        <button className={styles.scrollToTop} onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
