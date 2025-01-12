import styles from "./member.module.css";
import Sectionheader from "../../components/sectionHeader/SectionHeader.jsx";
import pdfFile from "../../assets/Indmeldingsblanket.pdf";

const Member = () => {
  return (
    <>
      <Sectionheader />

      <div className={styles.memberInfo}>
        <h2>Bliv medlem</h2>
        <p>
          For at deltage i Excaliburs arrangementer skal man være medlem af
          foreningen. Et medlemskab koster 100 kr/kalenderår og giver en gratis
          spilgang til Undallslund plantage, når man melder sig ind.
        </p>
        <p>
          Derfor skal man melde sig ind i Excalibur når man deltager til
          Juniorrollespil. Ude i skoven kan man udfylde en indmeldings-blanket
          ved check-in, men for at gøre det lettere og hurtigere for jer, har vi
          lagt indmeldings-blanketten online, så man kan downloade den, printe
          den ud og udfylde den hjemmefra. Så går det væsentligt hurtigere
          derude!
        </p>
        <p>
          Når man bliver medlem af Excaliburs bliver man også automatisk medlem
          af rollespillernes landsforening, Bifrost. Du kan læse mere om Bifrost
          og de knapt 50 andre lokalforeninger på landsforeningen » bifrost.dk.
        </p>
      </div>
      <div className={styles.registrationForm}>
        <h3>Download indmeldings-blanket</h3>
        <a href={pdfFile} download>
          Download
        </a>
      </div>
    </>
  );
};
export default Member;
