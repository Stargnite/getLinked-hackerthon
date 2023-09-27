import "./timeline.css";
import TimelineImg from "./../../../public/timeline.svg";
import TimelineNums from "./../../../public/timeline-num.svg";
import TimelineDetails from "./../../../public/timeline-details.svg";
import Animation from "../Animation";

const Timeline = () => {
  return (
    <Animation>
      <div className="">
        <div className="flex-col items-center timeline-text">
          <h2 className="text-center mt-36 text-3xl text-stone-100 font-bold">
            Timeline
          </h2>
          <p className="text-center my-4 text-stone-100 w-96">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <div className="timeline flex justify-center">
          <img src={TimelineImg} alt="" className="timeline-img-lg" />
          <div className="timeline-img-sm mt-24">
            <img src={TimelineNums} alt="" className="mr-4" />
            <img src={TimelineDetails} alt="" />
          </div>
        </div>



        {/* <div className="flex flex-col items-center">
        <h2 className="text-center mt-36 text-3xl text-stone-100 font-bold">
          Timeline
        </h2>
        <p className="text-center my-4 text-stone-100 w-96">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>

      <div className="stage-wrapper">
        <div className="stage flex stage-1">
          <div className="text text-right mt-10">
            <h1 className="text-primary font-bold">Hackathon Announcement</h1>
            <p className="w-80 text-white">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </div>
          <div className="stage-tag ml-20 line-wrapper">
            <div className="line"></div>
            <div className="number font-extrabold text-lg">1</div>
          </div>
          <div className="date text-primary font-extrabold text-xl pt-20 ml-20">
            November 18, 2023
          </div>
        </div>

        <div className="stage flex stage-2">
          <div className="date text-primary font-extrabold text-xl pt-20 ml-64">
            November 18, 2023
          </div>
          <div className="stage-tag mx-20  line-wrapper">
            <div className="line"></div>
            <div className="number font-extrabold text-lg">2</div>
          </div>
          <div className="text text-left mt-10">
            <h1 className="text-primary font-bold">
              Teams Registration begins
            </h1>
            <p className="w-80 text-white">
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register{" "}
            </p>
          </div>
        </div>

        <div className="stage flex stage-3">
          <div className="text text-right mt-10">
            <h1 className="text-primary font-bold">Teams Registration ends</h1>
            <p className="w-80 text-white">
              Interested Participants are no longer Allowed to register{" "}
            </p>
          </div>
          <div className="stage-tag ml-20">
            <div className="line"></div>
            <div className="number font-extrabold text-lg">3</div>
          </div>
          <div className="date text-primary font-extrabold text-xl pt-20 ml-20">
            November 18, 2023
          </div>
        </div>

        <div className="stage flex mt-3 stage-4">
          <div className="date text-primary font-extrabold text-xl pt-20 ml-64">
            November 18, 2023
          </div>
          <div className="stage-tag mx-20">
            <div className="line"></div>
            <div className="number font-extrabold text-lg">4</div>
          </div>
          <div className="text text-left mt-10">
            <h1 className="text-primary font-bold">
              Announcement of the accepted teams <br /> and ideas
            </h1>
            <p className="w-80 text-white">
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
          </div>
        </div>

        <div className="stage flex stage-5">
          <div className="text text-right mt-10">
            <h1 className="text-primary font-bold">
              {" "}
              Getlinked Hackathon 1.0 Offically Begins
            </h1>
            <p className="w-80 text-white">
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
          </div>
          <div className="stage-tag ml-20">
            <div className="line"></div>
            <div className="number font-extrabold text-lg">5</div>
          </div>
          <div className="date text-primary font-extrabold text-xl pt-20 ml-20">
            November 18, 2023
          </div>
        </div>

        <div className="stage flex mt-3 stage-6">
          <div className="date text-primary font-extrabold text-xl pt-20 ml-64">
            November 18, 2023
          </div>
          <div className="stage-tag mx-20">
            <div className="line"></div>
            <div className="number font-extrabold text-lg">6</div>
          </div>
          <div className="text text-left mt-10">
            <h1 className="text-primary font-bold">Demo Day</h1>
            <p className="w-80 text-white">
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
          </div>
        </div>
      </div> */}
      </div>
    </Animation>
  );
};

export default Timeline;
