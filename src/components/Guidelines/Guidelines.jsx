import woman from "../../../public/woman_sitting.png";
import "./guidelines.css";

const Guidelines = () => {
  return (
    <div className=" flex justify-around items-center guideline">
      <div className="max-w-xl text-white">
        <h1 className="text-3xl leading-normal tracking-normal font-extrabold mb-4">
          Rules and <br />
          <span className="version">Guidelines</span>
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
      <div >
        <img src={woman} alt="" className="sitting-woman"  />
      </div>
    </div>
  );
};

export default Guidelines;
