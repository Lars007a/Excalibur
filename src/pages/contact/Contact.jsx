import styles from "./contact.module.css";

const Contact = ({ contactImg }) => {
  return (
    <>
      <figure
        className={styles.contactsHero}
        style={{ backgroundImage: `url(${contactImg})` }}
      >
        <div className={styles.contactsContainer}>
          <h2>Kontakt os</h2>
          <h4>
            Vi er her for at hjælpe – du er altid velkommen til at kontakte os!
          </h4>

          <div className={styles.contactInfo}>
            <div className={styles.contactRow}>
              <div className={styles.contactDetails}>
                <h3>Kontaktoplysninger</h3>
                <p>
                  <strong>Telefon:</strong> +45 60 45 73 44
                </p>
                <p>
                  <strong>E-mail:</strong> excalibur05@gmail.dk
                </p>
              </div>

              <div className={styles.address}>
                <h3>Adresse</h3>
                <p>Skaldehøjvej 2</p>
                <p>8800 Viborg</p>
              </div>
            </div>

            <div className={styles.openingHours}>
              <h3>Åbningstider</h3>
              <p>Mandag-fredag: 09-00 - 17-00</p>
              <p>Lørdag og søndag: Lukket</p>
            </div>
          </div>
        </div>
      </figure>
    </>
  );
};

export default Contact;
