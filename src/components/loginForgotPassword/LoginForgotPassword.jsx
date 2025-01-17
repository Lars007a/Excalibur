import styles from "./loginForgotPassword.module.css";

const ForgotPassword = ({ setView }) => {
  return (
    <div className={styles.forgotPasswordContainer}>
      <h1>Glemt adgangskode?</h1>
      <h2>
        Indtast din e-mailadresse, så sender vi instruktioner om nulstilling.
      </h2>
      <input type="email" placeholder="E-mail" required />
      <button>Send ny kode</button>
      <p>
        <span onClick={() => setView("login")}>Tilbage til log ind</span>
      </p>
    </div>
  );
};

export default ForgotPassword;
