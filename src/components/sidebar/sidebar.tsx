import Image from "next/image";
import "./sidebar.scss";
import avatar from "../../../public/images/avatar.png";
import dashboard from "../../../public/images/dashboard.svg";
import vital from "../../../public/images/vital.svg";
import task from "../../../public/images/task.svg";
import categories from "../../../public/images/categories.svg";
import settings from "../../../public/images/settings.svg";
import help from "../../../public/images/help.svg";
import logout from "../../../public/images/logout.svg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__bg">
        <div>
          <div className="sidebar__user-info">
            <div className="sidebar__avatar">
              <Image src={avatar} alt="" className="sidebar__avatar__image" />
            </div>
            <div className="sidebar__user-name">Sundar Gurung</div>
            <div className="sidebar__user-email">sundargurung360@gmail.com</div>
          </div>
          <div className="sidebar__navs">
            <div className="sidebar__nav active">
              <Image src={dashboard} alt="" className="sidebar__nav__icon" />
              <p>Dashboard</p>
            </div>
            <div className="sidebar__nav">
              <Image src={vital} alt="" className="sidebar__nav__icon" />
              <p>Vital Task</p>
            </div>
            <div className="sidebar__nav">
              <Image src={task} alt="" className="sidebar__nav__icon" />
              <p>My Task</p>
            </div>
            <div className="sidebar__nav">
              <Image src={categories} alt="" className="sidebar__nav__icon" />
              <p>Task Categories</p>
            </div>
            <div className="sidebar__nav">
              <Image src={settings} alt="" className="sidebar__nav__icon" />
              <p>Settings</p>
            </div>
            <div className="sidebar__nav">
              <Image src={help} alt="" className="sidebar__nav__icon" />
              <p>Help</p>
            </div>
          </div>
        </div>
        <button className="sidebar__logout sidebar__nav">
          <Image src={logout} alt="" className="sidebar__nav__icon" />
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
}
