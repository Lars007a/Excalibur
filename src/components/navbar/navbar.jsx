import styles from "./navbar.module.css";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import LoginBtn from "../simpleBtn/simpleBtn.jsx";
import { useState } from "react";
import ProfileCardEditor from "../../components/profileCardEditor/ProfileCardEditor.jsx";

import { useLocalStorage } from "@uidotdev/usehooks";

export default function navar() {
  const [savedUser, setSavedUser] = useLocalStorage("savedUser", {});

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = () => {
    setSavedUser({});
    return;
  };

  const onHamburgerClick = () => {
    if (showMobileMenu == true) {
      setShowMobileMenu(false);
    } else {
      setShowMobileMenu(true);
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.navLogo}>
            <NavLink to={"/"}>
              <img
                src="../../../src/assets/notSortedImgs/logo_smaller.png"
                alt="logo"
              ></img>
            </NavLink>
          </div>

          <div className={styles.navHamburger}>
            {showMobileMenu ? (
              <RxCross1 color="#005390" size={30} onClick={onHamburgerClick} />
            ) : (
              <RxHamburgerMenu
                color="#005390"
                size={30}
                onClick={onHamburgerClick}
              />
            )}
          </div>

          <div
            onClick={onHamburgerClick}
            className={`${styles.navLinks} ${
              showMobileMenu ? styles.mobileActive : ""
            }`}
          >
            <NavLink to={"/news"}>Nyheder</NavLink>
            <NavLink to={"/arrangements"}>Arrangementer</NavLink>
            <NavLink to={"/info"}>Info</NavLink>
            <NavLink to={"/gallery"}>Galleri</NavLink>
            <NavLink to={"/member"}>Bliv medlem</NavLink>
            <NavLink to={"/contact"}>Kontakt</NavLink>

            {savedUser.loggedIn == true ? (
              <>
                <NavLink to={"/profile"} className={styles.profilePicLink}>
                  <img
                    src={"/profilePictureSilhouette.png"}
                    className={styles.profilePic}
                  ></img>
                </NavLink>
                <LoginBtn color="#005390" clickFunc={handleLogout}>
                  <p>Logout</p>
                </LoginBtn>
              </>
            ) : (
              <NavLink to={"/login"}>
                <LoginBtn>
                  <p>Login</p>
                </LoginBtn>
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
