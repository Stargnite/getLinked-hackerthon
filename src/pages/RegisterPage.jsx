import Form from "./../components/Form/Form";
import Office from "./../../public/officeman.png";
import "./registerpage.css";
import { useState } from "react";
import Modal from "../components/Modal/Modal";
import Animation from "../components/Animation";

const RegisterPage = () => {
  const [modalIsActive, setModalIsActive] = useState(false);

  const showModal = () => {
    setModalIsActive(true);
  };

  const closeModal = () => {
    setModalIsActive(false);
  };

  return (
    <Animation>
      <div className="register-page">
        <div className="register-content text-white flex justify-around mx-16 my-24">
          <div className="office-img flex items-center">
            <img src={Office} alt="" className="" />
          </div>
          <Form showModal={showModal} />
        </div>
        {modalIsActive && <Modal closeModal={closeModal} />}
      </div>
    </Animation>
  );
};

export default RegisterPage;
