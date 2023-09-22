import "./modal.css";
import Success from "../../../public/successfully-done.png";
import SuccessfulMan from "../../../public/successful-man.png";

const Modal = ({ closeModal }) => {
  return (
    <div className="overlay">
      <div className="modal text-white text-lg">
        <div className="modal-content text-center">
          <div className="success-img">
            <img src={Success} alt="success" />
            <img src={SuccessfulMan} alt="" className="successful-man" />
          </div>
          <h1 className="success-text text-3xl pt-5">
            Congratulations, you have successfully Registered!
          </h1>
          <p className="success-text py-7">
            Yes, it was easy and you did it! check your mail box for next step
          </p>
          <button
            className="success-text text-center close-modal"
            onClick={closeModal}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
