import Image from "next/image";
import "./main.scss";
import handWave from "../../../public/images/hand-wave.svg";
import avatar1 from "../../../public/images/SearchIcon.svg";
import avatar2 from "../../../public/images/SearchIcon2.svg";
import avatar3 from "../../../public/images/SearchIcon3.svg";
import avatar4 from "../../../public/images/SearchIcon4.svg";
import avatar5 from "../../../public/images/SearchIcon5.svg";
import invite from "../../../public/images/invite-icon.svg";

export default function Home() {
  return (
    <section className="dashboard">
      <div className="container">
        <div className="dashboard__top-line flex-row">
          <div className="flex-row">
            <h1 className="dashboard__title">Welcome back, Sundar</h1>
            <Image src={handWave} alt="" className="dashboard__handWave" />
          </div>

          <div className="dashboard__invite flex-row">
            <div className="dashboard__top-line__avatars flex-row">
              <a href="#" className="dashboard__top-line__avatars__link">
                <Image src={avatar1} alt="" height={37} width={37} />
              </a>
              <a href="#" className="dashboard__top-line__avatars__link">
                <Image src={avatar2} alt="" height={37} width={37} />
              </a>
              <a href="#" className="dashboard__top-line__avatars__link">
                <Image src={avatar3} alt="" height={37} width={37} />
              </a>
              <a href="#" className="dashboard__top-line__avatars__link">
                <Image src={avatar4} alt="" height={37} width={37} />
              </a>
              <div className="dashboard__last-avatar-wrapper dashboard__top-line__avatars__link">
                <Image src={avatar5} alt="" height={37} width={37} />
                <span>+4</span>
                <div className="overlay"></div>
              </div>
            </div>

            <button className="dashboard__invite-button flex-row">
              <Image src={invite} alt="" />
              Invite
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
