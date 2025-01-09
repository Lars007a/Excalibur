import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Om os</h3>
        <p>
          Rollespil arrangeres af Excalibur, som er en forening drevet af
          frivillige og entusiastiske rollespillere. Excalibur er medlem af DUF
          igennem Bifrost, som er landsforeningen for kreativ udvikling af børn
          og unge.
        </p>
      </div>
      <div>
        <Link to="">Nyheder</Link>
        <Link to="">Arrangementer</Link>
        <Link to="">Info</Link>
        <Link to="">Gallery</Link>
        <Link to="">Bliv medlem</Link>
        <Link to="">Kontakt</Link>
      </div>
      <div>
        <p>Følg os her</p>
        <div>
          <Link to="https://www.facebook.com">
            <FaFacebook />
          </Link>
          <Link to="https://www.instagram.com">
            <FaInstagramSquare />
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
