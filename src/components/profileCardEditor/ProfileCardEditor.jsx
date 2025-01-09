import styles from "./profileCardEditor.module.css";
import profilePicSilhouette from "../../assets/notSortedImgs/profilePictureSilhouette.png";

const ProfileCardEditor = () => {
  return (
    <>
      <article className={styles.profile}>
        <div>
          <img
            src={profilePicSilhouette}
            alt="Picture of Profile Picture Silhouette"
          />
        </div>
      </article>
    </>
  );
};

export default ProfileCardEditor;
