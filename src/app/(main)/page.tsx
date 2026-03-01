import Image from "next/image";
import "./main.scss";
import handWave from "../../../public/images/hand-wave.svg";
import avatar1 from "../../../public/images/SearchIcon.svg";
import avatar2 from "../../../public/images/SearchIcon2.svg";
import avatar3 from "../../../public/images/SearchIcon3.svg";
import avatar4 from "../../../public/images/SearchIcon4.svg";
import avatar5 from "../../../public/images/SearchIcon5.svg";
import invite from "../../../public/images/invite-icon.svg";
import pending from "../../../public/images/Pending.svg";

export default function Home() {
  const dayOfMonth = new Date().getDate();
  const month = new Date().toLocaleDateString("en-US", { month: "long" });

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

        <div className="dashboard__content">
          <div className="dashboard__content__left">
            <div className="dashboard__content__left__top-line flex-row">
              <div className="flex-row">
                <Image src={pending} alt="" className="dashboard__content__left__top-line__image" />
                <h4>To-Do</h4>
              </div>
              <div className="dashboard__content__left__top-line__add-task-button flex-row">
                <div className="dashboard__content__left__top-line__add-task-button__plus">+</div>
                <h6>Add task</h6>
              </div>
            </div>

            <div className="dashboard__content__left__date flex-row">
              <div className="flex-row dashboard__content__left__date__day-and-month">
                <div className="dashboard__content__left__date__day-of-month">{dayOfMonth}</div>
                <div className="dashboard__content__left__date__month">{month}</div>
              </div>
              <ul>
                <li className="dashboard__content__left__date__today">Today</li>
              </ul>
            </div>
          </div>
          <div className="dashboard__content__right"></div>
        </div>
      </div>
    </section>
  );
}
