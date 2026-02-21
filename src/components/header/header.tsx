import Image from "next/image";
import logo from "../../../public/images/logo.png";
import search from "../../../public/images/Search.svg";
import notification from "../../../public/images/notification.svg";
import calendar from "../../../public/images/calendar.svg";
import "./header.scss";

export default function Header() {
  const now = new Date();
  const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });
  const dayOfMonth = now.getDate();
  const month = now.toLocaleDateString("en-US", { month: "numeric" });
  const year = now.getFullYear();

  return (
    <header className="header">
      <div className="big-container">
        <Image src={logo} alt="" />
        <div className="wrapper__search-input">
          <input type="text" className="search-input" placeholder="Search your task here..."/>
          <button className="header__button icons-btn-bg wrap__search-input__icon">
            <Image src={search} alt="" className="search-input__icon" />
          </button>
        </div>

        <div className="header__right-info">
          <button className="header__button">
            <div className="icons-btn-bg">
              <Image src={notification} alt="" />
            </div>
          </button>
          <button className="header__button">
            <div className="icons-btn-bg">
              <Image src={calendar} alt="" />
            </div>
          </button>

          <div>
            <p className="header__day">{dayOfWeek}</p>
            <p className="header__date">
              {dayOfMonth}/{month}/{year}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
