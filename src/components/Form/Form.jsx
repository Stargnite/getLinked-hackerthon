import "./form.css";
import Move from './../../../public/move.svg'

const Form = ({ showModal }) => {
  return (
    <div className="form-wrapper flex flex-col">
      <div className="form-content">
        <h1 className="text text-primary font-mono text-3xl pb-10">Register</h1>
        <img src={Move} alt="" className="move" />
        <h1 className="text font-semibold text-3xl pb-16">
          CREATE YOUR ACCOUNT
        </h1>
      </div>
      <div className="form ">
        <form>
          <div className="input-content">
            <div className="cont">
              <label className="text" htmlFor="teamName">
                Team&apos;s Name:
              </label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                placeholder="Enter team's name"
                required
              />
            </div>

            <div className="cont">
              <label htmlFor="phoneNumber" className="text">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                placeholder="e.g., 1234567890"
              />
            </div>
          </div>

          <div className="input-content">
            <div className="cont">
              <label htmlFor="email" id="email" className="text">
                Email
              </label>
              <input type="email" placeholder="Enter your email address" />
            </div>
            <div className="cont">
              <label className="text" htmlFor="projectTopic">
                Project Topic:
              </label>
              <input
                type="text"
                id="projectTopic"
                name="projectTopic"
                placeholder="Enter project topic"
                required
              />
            </div>
          </div>

          <div className="input-content">
            <div className="cont">
              <label className="text" htmlFor="category">
                Category:
              </label>
              <select
                className="text category"
                id="category"
                name="category"
                required
              >
                <option value="category1">Select your category</option>
                <option value="category2">Select your category</option>
                <option value="category3">Select your category</option>
              </select>
            </div>

            <div className="cont">
              <label className="text" htmlFor="groupSize">
                Group Size:
              </label>
              <input
                type="number"
                id="groupSize"
                name="groupSize"
                placeholder="Enter group size"
                required
                min="1"
                className="text"
              />
            </div>
          </div>




          <div className="end-details no-back">
            <p className="warning italic text-primary">
              Please review your registration details before submitting
            </p>
            <label className="no-back">
              <input
                type="checkbox"
                id="termsCheckbox"
                name="termsCheckbox"
                required
                className="mt-6 mr-5 text"
              />
              I agreed with the event{" "}
              <a href="" target="_blank" className="no-back">
                Terms and Conditions
              </a>
            </label>
          </div>

          <button type="submit" value="Submit" className="submit-form">
            Register Now
          </button>
        </form>
      </div>
      <button className="modal-btn mt-6" onClick={showModal}>
        Toggle modal
      </button>
    </div>
  );
};

export default Form;
