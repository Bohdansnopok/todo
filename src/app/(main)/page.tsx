import Image from "next/image";
import "./main.scss";
import handWave from "../../../public/images/hand-wave.svg";
import avatar1 from "../../../public/images/SearchIcon.svg";
import avatar2 from "../../../public/images/SearchIcon2.svg";
import avatar3 from "../../../public/images/SearchIcon3.svg";
import avatar4 from "../../../public/images/SearchIcon4.svg";
import avatar5 from "../../../public/images/SearchIcon5.svg";

export default function Home() {
  return (
    <section className="dashboard">
      <div className="container">
        <div className="dashboard__top-line flex-row">
          <div className="flex-row">
            <h1 className="dashboard__title">Welcome back, Sundar</h1>
            <Image src={handWave} alt="" className="dashboard__handWave" />
          </div>

          <div className="dashboard__top-line__avatars">
            <Image src={avatar1} alt="" />
            <Image src={avatar2} alt="" />
            <Image src={avatar3} alt="" />
            <Image src={avatar4} alt="" />
            <Image src={avatar5} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
