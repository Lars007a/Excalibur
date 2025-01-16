import Film from "../../assets/Films/Rollespil.mp4";
import styles from "../login/login.module.css";
import LoginCard from "../../components/loginCard/LoginCard";

const Login = () => {
  return (
    <section className={styles.login}>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src={Film} type="video/mp4" />
      </video>
      <LoginCard />
    </section>
  );
};

export default Login;
