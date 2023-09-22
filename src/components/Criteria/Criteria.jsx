import Workers from "../../../public/workers.png";
import "./criteria.css";

const Criteria = () => {
  return (
    <div className="py-20 px-16 flex justify-around items-center criteria">
      <div className="max-w-lg">
        <img src={Workers} alt="" className="workers" />
      </div>
      <div className="max-w-xl text-white">
        <h1 className="text-3xl leading-normal tracking-normal font-extrabold mb-4">
          Judging Criteria
          <br />
          <span className="version">Key attributes</span>
        </h1>
        <p className="max-w-lg pb-3">
          <span className="text-primary font-bold">
            Innovation and Creativity:
          </span>{" "}
          Evaluate the uniqueness and creativity of the solution. Consider
          whether it addresses a real-world problem in a novel way or introduces
          innovative features.
        </p>

        <p className="max-w-lg pb-2">
          <span className="text-primary font-bold">Functionality:</span> Assess
          how well the solution works. Does it perform its intended functions
          effectively and without major issues? Judges would consider the
          completeness and robustness of the solution.
        </p>
        <p className="max-w-lg pb-3">
          <span className="text-primary font-bold">Impact and Relevance:</span>{" "}
          Determine the potential impact of the solution in the real world. Does
          it address a significant problem, and is it relevant to the target
          audience? Judges would assess the potential social, economic, or
          environmental benefits.
        </p>
        <p className="max-w-lg pb-3">
          <span className="text-primary font-bold">Technical Complexity:</span>{" "}
          Evaluate the technical sophistication of the solution. Judges would
          consider the complexity of the code, the use of advanced technologies
          or algorithms, and the scalability of the solution.
        </p>
        <p className="max-w-lg pb-3">
          <span className="text-primary font-bold">
            Adherence to Hackathon Rules:{" "}
          </span>{" "}
          udges will Ensure that the team adhered to the rules and guidelines of
          the hackathon, including deadlines, use of specific technologies or
          APIs, and any other competition-specific requirements.
        </p>
        <button className="register_btn text-white text-2xl m-0 mt-6 mb-12">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Criteria;
