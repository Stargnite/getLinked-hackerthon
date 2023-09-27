import BigIdea from "../../../public/the-big-idea1.png";
import "./intro.css";
import Animation from "../Animation";

const Into = () => {
  return (
    <Animation>
    <div className=" mt-36 flex justify-around items-center intro">
      <div className="max-w-lg bulb-wrapper">
        <p className="text-white text-2xl text-center">The Big <br /> Idea!</p>
        <img src={BigIdea} alt="" className="bulb" />
      </div>
      <div className="max-w-xl text-white">
        <h1 className="text-3xl leading-normal tracking-normal font-extrabold mb-4">
          Introduction to getLinked <br />
          <span className="version">tech Hackerthon 1.0</span>
        </h1>
        <p className="max-w-lg">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>
    </div>

    </Animation>
  );
};

export default Into;
