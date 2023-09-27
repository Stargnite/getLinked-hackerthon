import './contactform.css'

const ContactForm = () => {
  return (
    <div className='contactForm-wrapper' >
      <form className='contact-form'>
        <input type="text" placeholder="First Name" className='' />
        <input type="email" placeholder="Mail" />
        <input type="text" placeholder="Message" />
      </form>
    </div>
  );
};

export default ContactForm;
