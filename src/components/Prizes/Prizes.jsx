import "./prizes.css";
import Trophy from "../../../public/trophy.png";
import Silver from "./../../../public/silver_medal2.png";
import Gold from "./../../../public/gold_medal1.png";
import Bronze from "./../../../public/bronze_medal3.png";
import Animation from "../Animation";

const Prizes = () => {
  return (
    <Animation>
      <div className="">
        <div className="prizes-wrapper flex justify-around items-center mt-32">
          <div className="trophy">
            <img src={Trophy} alt="trophy" />
          </div>

          <div className="text-white price-text">
            <div className="text">
              <h3 className="text-3xl font-extrabold mb-4">
                Prizes and <span className="text-primary">Rewards</span>
              </h3>
              <p>
                Highlight of the prizes or rewards for winners and participants
              </p>
            </div>

            <div className="rewards flex mt-56  items-center">
              <div className="runner flex ">
                <img src={Silver} alt="" className="medal self-center" />
                <div className="runner-level text-center">
                  <h1 className="text-3xl font-extrabold">2nd</h1>
                  <p className="text-2xl ">Runner</p>
                  <div className="amount  text-primary font-extrabold">
                    N300,000
                  </div>
                </div>
              </div>

              <div className="winner w-52 flex">
                <img src={Gold} alt="" className="medal self-center" />
                <div className="runner-level text-center">
                  <h1 className="text-3xl font-extrabold">1st</h1>
                  <p className="text-2xl ">Runner</p>
                  <div className="amount  font-extrabold text-secondary">
                    N400,000
                  </div>
                </div>
              </div>

              <div className="runner flex ">
                <img src={Bronze} alt="" className="medal self-center" />
                <div className="runner-level text-center">
                  <h1 className="text-3xl font-extrabold">3rd</h1>
                  <p className="text-2xl ">Runner</p>
                  <div className="amount text-primary font-extrabold">
                    N150,000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Animation>
  );
};

export default Prizes;
