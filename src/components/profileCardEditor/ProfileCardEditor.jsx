import React, { useRef, useState } from "react";
import { TbPencilPlus } from "react-icons/tb";
import { MdCancel } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import styles from "./profileCardEditor.module.css";
import profilePicSilhouette from "../../assets/notSortedImgs/profilePictureSilhouette.png";

const ProfileCardEditor = () => {
  const [profileImage, setProfileImage] = useState(profilePicSilhouette);
  const fileInputRef = useRef();

  const [fields, setFields] = useState({
    Navn: "",
    Race: "",
    Styrker: "",
    Klasser: "",
    Svagheder: "",
    Våben: "",
    Udstyr: "",
  });

  const [editableField, setEditableField] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setProfileImage(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleFieldChange = (field, value) => {
    setFields((prev) => ({ ...prev, [field]: value }));
  };

  const renderProfileImage = () => (
    <div className={styles.ProfileImgContainer}>
      <img src={profileImage} alt="Profile" className={styles.profileImage} />
      <TbPencilPlus
        className={styles.editIcon}
        onClick={() => fileInputRef.current.click()}
      />
      <input
        type="file"
        ref={fileInputRef}
        className={styles.fileInput}
        onChange={handleImageChange}
      />
    </div>
  );

  const renderEditableField = (field, label) => (
    <div className={styles.profileInput} key={field}>
      <label className={styles.label}>{label}:</label>
      <input
        type="text"
        value={fields[field]}
        onChange={(e) => handleFieldChange(field, e.target.value)}
        disabled={editableField !== field}
        className={styles.input}
      />
      {editableField !== field ? (
        <TbPencilPlus
          className={styles.actionIcon}
          onClick={() => setEditableField(field)}
        />
      ) : (
        <>
          <IoIosCheckmarkCircle
            className={styles.actionIcon}
            onClick={() => setEditableField(null)}
          />
          <MdCancel
            className={styles.actionIcon}
            onClick={() => setEditableField(null)}
          />
        </>
      )}
    </div>
  );

  return (
    <div className={styles.profileEditor}>
      {renderProfileImage()}
      <div className={styles.profileInputs}>
        {Object.keys(fields).map((field) =>
          renderEditableField(
            field,
            field.charAt(0).toUpperCase() + field.slice(1)
          )
        )}
      </div>
    </div>
  );
};

export default ProfileCardEditor;
