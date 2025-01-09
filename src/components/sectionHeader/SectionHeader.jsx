import styles from "./sectionHeader.module.css";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className={styles.sectionHeader}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default SectionHeader;
