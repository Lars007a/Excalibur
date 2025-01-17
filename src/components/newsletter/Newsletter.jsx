import styles from "./newsletter.module.css";
import { useEffect, useRef, useState } from "react";
import Button from "../buttonNews/Button";
import Loading from "../loadingNews/Loading";
import Modal from "../modalNews/Modal";

const Newsletter = () => {
  const [responsEmail, setResponsEmail] = useState("");
  const [inputEmail, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch(
        "https://api-medieskolerne.vercel.app/emails",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: inputEmail }),
        }
      );
      const result = await response.json();
      setResponsEmail(result.email);
      openModal();
      setInputValue("");
      setIsLoading(false);
    } catch (error) {
      console.error("Error when registering:", error.message);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className={styles.newsletter}>
          <div className={styles.newsletterContainer}>
            <h3>Tilmeld dig vores nyhedsbrev og hold dig opdatered.</h3>
            <div className={styles.newsletterContent}>
              <div className={styles.newsletterImg}>
                <img src="/Warrior_Run_0.png" alt="player" />
              </div>
              <form onSubmit={handleSubmit} className={styles.form}>
                <label></label>
                <input
                  type="email"
                  placeholder="Email"
                  value={inputEmail}
                  onChange={handleInputChange}
                  required
                  ref={inputRef}
                />
                <Button buttonText="Tilmeld" type="submit" />
              </form>
            </div>
          </div>
        </section>
      )}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>Tak fordi du tilmeldte dig!</h2>
          <p>
            Vi sender dig en bekræftelsesmail på {responsEmail} {inputEmail}
          </p>
        </Modal>
      )}
    </>
  );
};

export default Newsletter;
