import styles from "./section.module.css";

export default function section({ content, children }) {
  //content er en array af objekter, der har en titel, og en beskrivelse, som der skal vises i sektionen.
  //Bottomobj er et komponent der skal vises i bunden, såsom facebook knappen.

  return (
    <>
      <section className={styles.section}>
        {content?.length > 0
          ? content.map((element, index) => {
              return (
                <div key={index} className={styles.textSec}>
                  <h2>{element.title}</h2>
                  <p>{element.text}</p>
                </div>
              );
            })
          : ""}
        <div className={styles.centerContent}>{children}</div>
      </section>
    </>
  );
}
