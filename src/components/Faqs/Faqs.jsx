import thinking_man from "../../../public/thinking_man.png";
import "./faqs.css";
import { useState } from "react";

const questions = [
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: "Yes you can",
  },
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: "Yes you can",
  },
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: "Yes you can",
  },
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: "Yes you can",
  },
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: "Yes you can",
  },
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: "Yes you can",
  },
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: "Yes you can",
  },
];

const Faqs = () => {
	const [selected, setSelected] = useState(0)

  const toggleQuestion = (index) => {
	if(selected === index) {
		return setSelected(null)
	}
	setSelected(index)
  };

  return (
    <div className=" flex justify-around items-center faq-wrapper">
      <div className="max-w-xl text-white faq">
        <h1 className="text-3xl leading-normal tracking-normal font-extrabold mb-4">
          Frequently Asked <br />
          <span className="text-primary">Questions</span>
        </h1>
        <p className="px-3 pb-10">
          We got answers to the questions that you might want to ask about <br />
          <b>getlinked Hackathon 1.0</b>
        </p>
        <div className="accordion">
          {questions.map((item, index) => {
            return (
              <div className="item py-3 font-semibold" key={index}>
                <div
                  className="title flex justify-between items-center cursor-pointer"
                  onClick={() => toggleQuestion(index)}
                >
                  <h2>{item.question}</h2>
                  <span className="text-primary text-2xl">{selected === index ? '-' : '+'}</span>
                </div>
                <div className={selected === index ? 'content show': 'content'}>{item.answer}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="max-w-2xl">
        <img src={thinking_man} alt="" className="thinking-man"/>
      </div>
    </div>
  );
};

export default Faqs;
