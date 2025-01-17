import styles from "./newsletter.module.css";
import { useEffect, useRef, useState } from "react";
import Button from "../buttonNews/Button";
import Loading from "../loadingNews/Loading";
import Modal from "../modalNews/Modal";

const Newsletter = () => {
  const [inputValue, setInputValue] = useState("");
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
          body: JSON.stringify({ email: inputValue }),
        }
      );
      const result = await response.json();
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
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>Tilmeld dig vores nyhedsbrev og hold dig opdatered.</label>
            <input
              type="email"
              value={inputValue}
              onChange={handleInputChange}
              required
              ref={inputRef}
            />
            <Button buttonText="Tilmeld" type="submit" />
          </form>
        </section>
      )}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>Thank you for signing up!</h2>
          <p>We will send you a confirmation email at {inputValue}</p>
        </Modal>
      )}
    </>
  );
};

export default Newsletter;
