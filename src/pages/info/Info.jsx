import SectionHeader from "../../components/sectionHeader/SectionHeader.jsx";
import Bc from "../../components/infoBackground/background.jsx";
import Section from "../../components/infoSection/section.jsx";
import Btn from "../../components/simpleBtn/simpleBtn.jsx";
import Map from "../../components/mapsEmbed/mapsEmbed.jsx";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";

const Info = () => {
  return (
    <>
      <SectionHeader
        subtitle={"Informationer til dig som forældre."}
        title={"Forældreinfo"}
      />

      <Bc>
        <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
          <Section
            content={[
              {
                title: "Generel info og beligenhed",
                text: "Når dit barn deltager til Excalibur Rollespil er det ikke meget anderledes end hvis du sender dit barn til fodbold eller spejder. Alle børn spiller som udgangspunkt på et hold med en voksen holdleder, som sørger for at dit barn får en spændende og tryg dag i skoven. Rollespil arrangeres af Excalibur, som er en forening drevet af frivillige og entusiastiske rollespillere. Excalibur er medlem af DUF igennem Bifrost, som er landsforeningen for kreativ udvikling af børn og unge.",
              },
              {
                title: "",
                text: "Vi arrangerer Rollespil to gange om måneden i Undallslund.",
              },
            ]}
          >
            <Map />
          </Section>

          <Section
            content={[
              {
                title: "Aldersgrænse",
                text: "Som udgangspunkt er spillere i alle aldre velkomne. Vores rollespil sigter dog imod børn og unge i alderen 8-13 år.",
              },
              {
                title: "Forældre må gerne spille med",
                text: "Vi ser meget gerne at forældre deltager til Rollespil sammen med deres børn. Det er en rigtig sjov måde at være sammen med sit barn på og de elsker at se mor eller far blive sminket som ork.",
              },
            ]}
          />

          <Section
            content={[
              {
                title: "Facebookgruppe",
                text: "Efterhånden har vi mange forældre, der har været med i nogle år og som ofte giver en hånd med det praktiske og som sørger for kaffe og kakao til gamle sjæle i skoven. Entusiastiske forældre mødes på facebookgruppen:",
              },
            ]}
          >
            <Link to={"https://facebook.com"}>
              <Btn>
                <FaFacebookF color="white" size={30} />
                <p>Se vores Facebook gruppe!</p>
              </Btn>
            </Link>
          </Section>

          <Section
            content={[
              {
                title: "Ingen mødepligt",
                text: "Når man deltager til Rollespil er man ikke forpligtet til at møde op til samtlige spildage. Alle er velkomne – også bare for en enkelt gang.",
              },
              {
                title: "Vind og vejr",
                text: "Man kan spille rollespil i al slags vejr og vi lader ikke en smule sne eller regn stoppe os. Hvis det regner meget kan vi dog godt finde på et slutte tidligere end normalt. I så fald vil vi hvis det er muligt annoncere det ved check-in inden spilstart.",
              },
              {
                title: "Hvis noget går galt, så fortæl",
                text: "Vi laver rollespil med hundredevis af børn, og nogle gange går noget galt. Der er børn, der bliver uvenner, børn der bliver kede af det eller børn som har en uheldig oplevelse. Vi fanger langt det meste i skoven, men der sker stadig nogle gange ting vi ikke hører om derude. Så hvis du får et barn hjem, som har haft en uheldig oplevelse, så fortæl os det! Ellers finder vi aldrig ud af det, og selvom der er nogle ting vi ikke kan gøre noget ved, så er der også ting vi KAN gøre noget ved.",
              },
              {
                title: "",
                text: "Vores mål er at give børnene en god oplevelse og feedback fra forældre er derfor uvurderligt. Tøv derfor ikke med at kontakte os, også hvis du “bare” har spørgsmål.",
              },
              {
                title: "",
                text: "Du kan finde telefonnumre og mail-adresser på foreningens afviklere under Kontakt.",
              },
            ]}
          />

          <Section
            content={[
              {
                title: "Husk telefon nummer!",
                text: "Det er meget vigtigt at dit barn har et telefonnummer på sig, så vi kan få fat på forældre eller værge, hvis der skulle opstå en situation, hvor dette er nødvendigt.",
              },
            ]}
          />
        </div>
      </Bc>
    </>
  );
};

export default Info;
