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
import taskImage from "../../../public/images/birthday.jpg";
import complete from "../../../public/images/complete.svg";
import completedBook from "../../../public/images/completed-in-book.svg";

export default function Home() {
  const dayOfMonth = new Date().getDate();
  const month = new Date().toLocaleDateString("en-US", { month: "long" });

  const totalTasks = 1438;

  const completedTasks = 300;
  const completedProgressPercent = (completedTasks / totalTasks) * 100;
  const completedProgressRadius = 45;
  const completedProgressCircumference = 2 * Math.PI * completedProgressRadius;
  const completedProgressOffset =
    completedProgressCircumference -
    (completedProgressPercent / 100) * completedProgressCircumference;
  const completedProgressPercentDisplay = Math.trunc(completedProgressPercent);

  const inProgressTasks = 566;
  const inProgressProgressPercent = (inProgressTasks / totalTasks) * 100;
  const inProgressProgressRadius = 45;
  const inProgressProgressCircumference = 2 * Math.PI * inProgressProgressRadius;
  const inProgressProgressOffset =
    inProgressProgressCircumference -
    (inProgressProgressPercent / 100) * inProgressProgressCircumference;
  const inProgressProgressPercentDisplay = Math.trunc(inProgressProgressPercent);

  const notStartedTasks = 199;
  const notStartedProgressPercent = (notStartedTasks / totalTasks) * 100;
  const notStartedProgressRadius = 45;
  const notStartedProgressCircumference = 2 * Math.PI * notStartedProgressRadius;
  const notStartedProgressOffset =
    notStartedProgressCircumference -
    (notStartedProgressPercent / 100) * notStartedProgressCircumference;
  const notStartedProgressPercentDisplay = Math.trunc(notStartedProgressPercent);

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

            <div className="dashboard__content__left__tasks today-tasks flex-col">
              <div className="dashboard__content__left__tasks__task">
                <div className="dashboard__content__left__tasks__task__content">
                  <label className="dashboard__content__left__tasks__task__content__check">
                    <input type="checkbox" />
                  </label>
                  <div className="flex-row">
                    <div>
                      <h2>
                        Attend Nischal’s Birthday <br /> Party
                      </h2>
                      <div className="dashboard__content__left__tasks__task__content__subtitle">
                        Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh
                        Elements).....
                      </div>
                    </div>
                    <Image
                      src={taskImage}
                      alt=""
                      className="dashboard__content__left__tasks__task__content__image"
                    />
                  </div>
                  <div className="dashboard__content__left__tasks__task__content__bottom-line">
                    <div className="dashboard__content__left__tasks__task__content__bottom-line__item priority">
                      Priority: <span>Moderate</span>
                    </div>
                    <div className="dashboard__content__left__tasks__task__content__bottom-line__item status">
                      Status: <span>Not Started</span>
                    </div>
                    <div className="dashboard__content__left__tasks__task__content__bottom-line__item created">
                      Created on: <span>20/06/2023</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard__content__left__tasks__task">
                <div className="dashboard__content__left__tasks__task__content">
                  <label className="dashboard__content__left__tasks__task__content__check">
                    <input type="checkbox" />
                  </label>
                  <div className="flex-row">
                    <div>
                      <h2>
                        Attend Nischal’s Birthday <br /> Party
                      </h2>
                      <div className="dashboard__content__left__tasks__task__content__subtitle">
                        Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh
                        Elements).....
                      </div>
                    </div>
                    <Image
                      src={taskImage}
                      alt=""
                      className="dashboard__content__left__tasks__task__content__image"
                    />
                  </div>
                  <div className="dashboard__content__left__tasks__task__content__bottom-line">
                    <div className="dashboard__content__left__tasks__task__content__bottom-line__item priority">
                      Priority: <span>Moderate</span>
                    </div>
                    <div className="dashboard__content__left__tasks__task__content__bottom-line__item status">
                      Status: <span>Not Started</span>
                    </div>
                    <div className="dashboard__content__left__tasks__task__content__bottom-line__item created">
                      Created on: <span>20/06/2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="line-beetwen-tasks"></div>

            <div className="dashboard__content__left__tasks closest-tasks flex-col">
              <div className="dashboard__content__left__tasks__task">
                <div className="dashboard__content__left__tasks__task__content">
                  <label className="dashboard__content__left__tasks__task__content__check">
                    <input type="checkbox" />
                  </label>
                  <div className="flex-row">
                    <div>
                      <h2>
                        Attend Nischal’s Birthday <br /> Party
                      </h2>
                      <div className="dashboard__content__left__tasks__task__content__subtitle">
                        Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh
                        Elements).....
                      </div>
                    </div>
                    <Image
                      src={taskImage}
                      alt=""
                      className="dashboard__content__left__tasks__task__content__image"
                    />
                  </div>
                  <div className="dashboard__content__left__tasks__task__content__bottom-line">
                    <div className="dashboard__content__left__tasks__task__content__bottom-line__item priority">
                      Priority: <span>Moderate</span>
                    </div>
                    <div className="dashboard__content__left__tasks__task__content__bottom-line__item status">
                      Status: <span>Not Started</span>
                    </div>
                    <div className="dashboard__content__left__tasks__task__content__bottom-line__item created">
                      Created on: <span>20/06/2023</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard__content__left__tasks__task">
                <div className="dashboard__content__left__tasks__task__content">
                  <label className="dashboard__content__left__tasks__task__content__check">
                    <input type="checkbox" />
                  </label>
                  <div className="flex-row">
                    <div>
                      <h2>
                        Attend Nischal’s Birthday <br /> Party
                      </h2>
                      <div className="dashboard__content__left__tasks__task__content__subtitle">
                        Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh
                        Elements).....
                      </div>
                    </div>
                    <Image
                      src={taskImage}
                      alt=""
                      className="dashboard__content__left__tasks__task__content__image"
                    />
                  </div>
                  <div className="dashboard__content__left__tasks__task__content__bottom-line">
                    <div className="dashboard__content__left__tasks__task__content__bottom-line__item priority">
                      Priority: <span>Moderate</span>
                    </div>
                    <div className="dashboard__content__left__tasks__task__content__bottom-line__item status">
                      Status: <span>Not Started</span>
                    </div>
                    <div className="dashboard__content__left__tasks__task__content__bottom-line__item created">
                      Created on: <span>20/06/2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard__content__right">
            <div className="dashboard__content__right__status">
              <div className="flex-row">
                <Image src={complete} alt="" className="dashboard__content__right__status__image" />

                <h4 className="dashboard__content__right__status__title">Task Status</h4>
              </div>

              <div className="dashboard__content__right__circles flex-row">
                <div className="circle-container completed">
                  <svg width="100" height="100">
                    <circle className="bg" cx="50" cy="50" r={completedProgressRadius}></circle>
                    <circle
                      className="progress"
                      cx="50"
                      cy="50"
                      r={completedProgressRadius}
                      style={{
                        strokeDasharray: completedProgressCircumference,
                        strokeDashoffset: completedProgressOffset,
                      }}
                    ></circle>
                  </svg>
                  <div className="percentage">{completedProgressPercentDisplay}%</div>
                </div>
                <div className="circle-container in-progress">
                  <svg width="100" height="100">
                    <circle className="bg" cx="50" cy="50" r={inProgressProgressRadius}></circle>
                    <circle
                      className="progress"
                      cx="50"
                      cy="50"
                      r={inProgressProgressRadius}
                      style={{
                        strokeDasharray: inProgressProgressCircumference,
                        strokeDashoffset: inProgressProgressOffset,
                      }}
                    ></circle>
                  </svg>
                  <div className="percentage">{inProgressProgressPercentDisplay}%</div>
                </div>
                <div className="circle-container not-started">
                  <svg width="100" height="100">
                    <circle className="bg" cx="50" cy="50" r={notStartedProgressRadius}></circle>
                    <circle
                      className="progress"
                      cx="50"
                      cy="50"
                      r={notStartedProgressRadius}
                      style={{
                        strokeDasharray: notStartedProgressCircumference,
                        strokeDashoffset: notStartedProgressOffset,
                      }}
                    ></circle>
                  </svg>
                  <div className="percentage">{notStartedProgressPercentDisplay}%</div>
                </div>
              </div>
            </div>
            <div className="dashboard__content__right__completed-tasks">
              <div className="flex-row">
                <Image
                  src={completedBook }
                  alt=""
                  className="dashboard__content__right__completed-tasks__icon"
                />
                <h4 className="dashboard__content__right__completed-tasks__title">
                  Completed Task
                </h4>
              </div>
              <div className="dashboard__content__left__tasks__task">
                <div className="dashboard__content__left__tasks__task__content">
                  <label className="dashboard__content__left__tasks__task__content__check">
                    <input type="checkbox" />
                  </label>
                  <div className="flex-row">
                    <div>
                      <h2>
                        Attend Nischal’s Birthday <br /> Party
                      </h2>
                      <div className="dashboard__content__left__tasks__task__content__subtitle">
                        Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh
                        Elements).....
                      </div>
                    </div>
                    <Image
                      src={taskImage}
                      alt=""
                      className="dashboard__content__left__tasks__task__content__image"
                    />
                  </div>
                  <div className="dashboard__content__left__tasks__task__content__bottom-line">
                    <div className="dashboard__content__left__tasks__task__content__bottom-line__item priority">
                      Priority: <span>Moderate</span>
                    </div>
                    <div className="dashboard__content__left__tasks__task__content__bottom-line__item status">
                      Status: <span>Not Started</span>
                    </div>
                    <div className="dashboard__content__left__tasks__task__content__bottom-line__item created">
                      Created on: <span>20/06/2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
