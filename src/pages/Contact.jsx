import "./contact.css";
import ContactForm from "../components/ContactForm/ContactForm";
import Animation from "../components/Animation";

const Contact = () => {
  return (
    <Animation>
      <div className="contact-wrapper">
        <div className="contact text-white flex justify-around no-back">
          <div className="flex flex-col pt-16 contact-text">
            <h1 className="text-primary text-4xl font-bold mb-5">
              Get in touch
            </h1>
            <p className="mb-5 text-xl">Contact Infomation</p>
            <p className="mb-5">27, Alara Street Yaba 100012 Lagos State</p>
            <p className="mb-5">Call us: 07057981819</p>
            <p className="mb-5">
              we are open from Monday-Friday <br /> 08:00am - 05:00pm
            </p>
            <p className="text-primary">Share on</p>
            <div className="icons"></div>
          </div>
          <ContactForm />
        </div>
      </div>
    </Animation>
  );
};

export default Contact;
