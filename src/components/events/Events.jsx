import styles from "./events.module.css";

const EventsHero = ({ eventsHeroImg }) => {
  return (
    <figure
      className={styles.eventsHero}
      style={{ backgroundImage: `url(${eventsHeroImg})` }}
    >
      <div className={styles.eventsContainer}>
        <div className={styles.eventsSection}>
          <h1>Arrangementer i Undallslund</h1>
          <div className={styles.playerImg}>
            <img src="/Warrior_Run_0.png" alt="player" />
          </div>
          <p>
            Vi spiller i forårssæsonen og efterårssæsonen. Forårssæsonen går
            typisk fra starten af marts til sommerferien, og efterårssæsonen går
            fra sommerferien slutter til det bliver for koldt en gang i
            november. Vi spiller søndage i lige uger – datoer finder du
            herunder.
          </p>
          <ul>
            <li>2025:</li>
            <li>søndag d. 16. marts</li>
            <li>søndag d. 30. marts</li>
            <li>søndag d. 13. april</li>
            <li>søndag d. 27. april</li>
            <li>søndag d. 11. maj</li>
            <li>søndag d. 31. maj Aflyser vi.</li>
            <li>søndag d. 15. juni</li>
            <li>lørdag d. 28. juni (fælles afslutning)</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className={styles.eventsSectionItem}>
              <h2>Tid og sted</h2>
              <p>
                Spillere chekkes ind fra 11.00 til 11:30. Spillet begynder kl.
                12:00, når alle er blevet sminket og klar. Mellem 11.00 og 12.00
                er der selvfølgelig mulighed for at lege og slås med nogen af de
                voksne så man ikke skal kede sig. Vi spiser frokost kl. 13:30,
                så man skal huske madpakke. Spillet slutter kl. 15:30 hvor
                børnene skal afhentes igen. Hvis det regner meget, kan vi godt
                finde på et slutte tidligere. I så fald vil vi annoncere det ved
                check-in inden spilstart. Vi mødes ved Skyttehuset (P-Pladsen
                ved Kirkebækvej) kl 11:00. Her går vi fra når vi er færdige med
                Check-in, så kom til tiden.
              </p>
            </li>
            <li className={styles.eventsSectionItem}>
              <h2>Sæsonkort</h2>
              <p>
                Man kan til Rollespil i Undallslund købe sæsonkort. Prisen på
                dette er altid 100 kr. + 50 kr. per resterende spilgang i
                sæsonen. Hvis man ikke allerede er medlem ved køb af
                sæsonkortet, så bliver man det. En sæson består typisk af 6-7
                spilgange, og derfor kan man spare en del penge, ved at købe sit
                sæsonkort, i starten af sæsonen.
              </p>
            </li>
          </ul>
        </div>

        <div>
          <ul className={styles.gridEvents}>
            <li className={styles.eventsItem}>
              <h2>Pris</h2>
              <p>
                Det koster 100 kr. at deltage til Rollespil i Undallslund og så
                bliver du også medlem af foreningen Excalibur.
              </p>
            </li>
            <li className={styles.eventsItem}>
              <h2>Lån af sværd og kostume</h2>
              <p>Vi har både kostumer og våben du kan låne ganske gratis.</p>
            </li>
            <li className={styles.eventsItem}>
              <h2>Madpakke</h2>
              <p>
                Man skal selv sørge for madpakke, for ca. kl. 13:30 spiser vi
                frokost. Husk også at tage noget at drikke med, da man nemt kan
                blive tørstig af at rende rundt og slås!
              </p>
            </li>
            <li className={styles.eventsItem}>
              <h2>Spørgsmål</h2>
              <p>
                Hvis du har spørgsmål er du altid velkommen til at e-maile eller
                ringe til os. Du kan finde vores kontaktinformation under
                Kontakt.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </figure>
  );
};

export default EventsHero;
