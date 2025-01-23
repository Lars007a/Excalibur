import styles from "./loginCard.module.css";
import { GiWarlockEye } from "react-icons/gi";
import { GiVikingHelmet } from "react-icons/gi";
import { GiKey } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import users from "./loginCard.json";
import ForgotPassword from "../loginForgotPassword/LoginForgotPassword";
import RegisterAccount from "../loginRegister/LoginRegister";

import { useLocalStorage } from "@uidotdev/usehooks";
/*  */

const LoginCard = () => {
  const [savedUser, setSavedUser] = useLocalStorage("savedUser", {});

  const [view, setView] = useState("login");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (user) {
      setSavedUser({
        username: credentials.username,
        loggedIn: true,
        img: "/profilePictureSilhouette.png",
      });
      navigate("/News");
    } else {
      setError("Brugernavn og/eller adgangskode er forkert.");
    }
  };

  return (
    <div className={styles.loginCard}>
      {view === "login" && (
        <div className={styles.loginContainer}>
          <h1>
            Log ind
            <Link to="/" className={styles.logoLink}>
              <img src={logo} alt="logo" className={styles.logo} />
            </Link>
          </h1>

          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.inputGroup}>
            <GiVikingHelmet className={styles.icon} />
            <input
              type="text"
              placeholder="Brugernavn"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
          </div>

          <div className={styles.inputGroup}>
            <GiKey className={styles.icon} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Adgangskode"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
            <GiWarlockEye
              onClick={() => setShowPassword(!showPassword)}
              className={styles.eyeIcon}
            />
          </div>

          <div className={styles.options}>
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Husk mig</label>
            </div>
            <p
              className={styles.forgotPassword}
              onClick={() => setView("forgotPassword")}
            >
              Glemt adgangskode?
            </p>
          </div>

          <div className={styles.actions}>
            <button onClick={handleLogin}>Log ind</button>
            <button onClick={() => setView("register")}>Registrer</button>
          </div>
        </div>
      )}

      {view === "register" && <RegisterAccount setView={setView} />}
      {view === "forgotPassword" && <ForgotPassword setView={setView} />}
    </div>
  );
};

export default LoginCard;
