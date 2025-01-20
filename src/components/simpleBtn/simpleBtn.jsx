import styles from "./simpleBtn.module.css";

//Tager imod children, der bliver sat i midten af knappen.
//Children kan være et ikon og noget tekst, bare noget tekst, bare et ikon, osv, osv.
export default function loginBtn({
  children,
  color = "#005390",
  clickFunc = undefined,
}) {
  if (clickFunc == undefined) {
    return (
      <button className={styles.btn} style={{ backgroundColor: color }}>
        <div>{children}</div>
      </button>
    );
  }
  return (
    <button
      className={styles.btn}
      style={{ backgroundColor: color }}
      onClick={() => {
        clickFunc();
      }}
    >
      <div>{children}</div>
    </button>
  );
}
