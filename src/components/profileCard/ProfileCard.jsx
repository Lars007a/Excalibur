import React from "react";
import ProfileCardEditor from "../profileCardEditor/ProfileCardEditor";
import styles from "./profileCard.module.css";

const ProfileCard = () => {
  return (
    <article className={styles.profile}>
      <ProfileCardEditor />
    </article>
  );
};

export default ProfileCard;
