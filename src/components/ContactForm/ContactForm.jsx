import "./contactform.css";

const ContactForm = () => {
  const submitContactDetails = () => {};

  return (
    <div className="contactForm-wrapper">
      <form className="contact-form" onSubmit={submitContactDetails}>
      <h1 className="text-primary text-2xl mb-5">
        Questions or need assistance? <br /> Let us know about it!
      </h1>
        <input type="text" placeholder="First Name" className="" />
        <input type="email" placeholder="Mail" />
        <input type="text" placeholder="Message" className="message-box" />
        <button type="submit" className="contact_btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
