import "./form.css";
import Move from "./../../../public/move.svg";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from './../LoadingSpinner'

const Form = ({ showModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [submitting, setSubmitting] =useState(false);


    // FOR FETCHING CATEGORIES
    useEffect(() => {
      setIsLoading(true)
      axios
        .get("https://backend.getlinked.ai/hackathon/categories-list", {"Content-Type": "application/json"})
        .then((res) => {
          setCategories(res.data);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setIsLoading(false);
          alert(`Error fetching data: ${error.message}`);
        });
    }, []);


  const teamNameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const projectTopicRef = useRef();
  const categoryRef = useRef();
  const groupSizeRef = useRef();
  const policyAcceptedRef = useRef();

  const submitRegistration = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const teamName = teamNameRef.current.value;
    const phoneNo = phoneRef.current.value;
    const email = emailRef.current.value;
    const projectTopic = projectTopicRef.current.value;
    const category = categoryRef.current.value;
    const groupSize = groupSizeRef.current.value;
    let policyIsAccepted = policyAcceptedRef.current.checked;

    const formData = {
      email: email,
      phone_number: phoneNo,
      team_name: teamName,
      group_size: groupSize,
      project_topic: projectTopic,
      category: category,
      privacy_poclicy_accepted: policyIsAccepted,
    };

    console.log(formData)

    const response = await fetch(
      "https://backend.getlinked.ai/hackathon/registration",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    if (!response.ok) {
      console.log(data.message, "Not sent<<<<<<<<<<");
      alert('Error submitting form, Server over load')
      setSubmitting(false)
      throw new Error(data.message || "Not sent<<<<<<<<<<");
    }

    setSubmitting(false);
    console.log("post successful");
    showModal()
  };




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
        <form onSubmit={submitRegistration}>
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
                ref={teamNameRef}
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
                ref={phoneRef}
              />
            </div>
          </div>

          <div className="input-content">
            <div className="cont">
              <label htmlFor="email" id="email" className="text">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email address"
                ref={emailRef}
              />
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
                ref={projectTopicRef}
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
                ref={categoryRef}
              >

                {categories.map((category) => {
                  return (
                    <option value={category.id} key={category.id}>{category.name}</option>
                  );
                })}
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
                ref={groupSizeRef}
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
                ref={policyAcceptedRef}
              />
              I agreed with the event <b className="no-back">Terms and Conditions</b>
            </label>
          </div>

          <button type="submit" value="Submit" className="submit-form" disabled={isLoading}>
    
            {submitting ? <div className="centered">
                  <LoadingSpinner className="loading" />
                  </div> : 'Register Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
