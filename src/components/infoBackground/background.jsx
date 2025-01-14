import styles from "./background.module.css";

export default function background({ children }) {
  return (
    <>
      <div className={styles.bc}>{children}</div>
    </>
  );
}
