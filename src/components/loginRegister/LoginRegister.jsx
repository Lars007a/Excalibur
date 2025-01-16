import { useState } from "react";
import styles from "./loginRegister.module.css";
import { GiWarlockEye } from "react-icons/gi";

const RegisterAccount = ({ setView }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.registerContainer}>
      <h1>Opret en konto</h1>

      <div className={styles.usernameContainer}>
        <input type="text" placeholder="Brugernavn" />
      </div>

      <div className={styles.passwordContainer}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Adgangskode"
        />
        <GiWarlockEye
          onClick={() => setShowPassword(!showPassword)}
          className={styles.eyeIcon}
        />
      </div>

      <div className={styles.emailContainer}>
        <input type="email" placeholder="E-mail" />
      </div>

      <button>Bliv medlem</button>
      <p>
        Har du allerede en konto?{" "}
        <span onClick={() => setView("login")}>Log ind</span>
      </p>
    </div>
  );
};

export default RegisterAccount;
