import styles from "./simpleBtn.module.css";

//Tager imod children, der bliver sat i midten af knappen.
//Children kan være et ikon og noget tekst, bare noget tekst, bare et ikon, osv, osv.
export default function loginBtn({ children }) {
  return (
    <button className={styles.btn}>
      <div>{children}</div>
    </button>
  );
}
