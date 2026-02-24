import Image from "next/image";
import "../forms.scss";
import userImg from "../../../../public/images/register-user-image.jpg";
import firstName from "../../../../public/images/firstName.svg";
import lastName from "../../../../public/images/lastName.svg";
import userName from "../../../../public/images/userName.svg";
import email from "../../../../public/images/email.svg";
import password from "../../../../public/images/password.svg";
import confirmPassword from "../../../../public/images/confirmPassword.svg";

export default function SignUp() {
  return (
    <section className="forms">
      <div className="forms__container">
        <div className="wrapper__forms__img">
          <Image src={userImg} alt="" className="forms__img" />
        </div>

        <form className="forms__form">
          <h1>Sign Up</h1>
          <label htmlFor="" className="forms__form__label">
            <Image src={firstName} alt="" className="forms__form__label__icon"/>
            <input type="text" placeholder="Enter First Name" className="forms__form__label__input"/>
          </label>
          <label htmlFor="" className="forms__form__label">
            <Image src={lastName} alt="" className="forms__form__label__icon"/>
            <input type="text" placeholder="Enter Last Name" className="forms__form__label__input"/>
          </label>
          <label htmlFor="" className="forms__form__label">
            <Image src={userName} alt="" className="forms__form__label__icon"/>
            <input type="text" placeholder="Enter Username" className="forms__form__label__input"/>
          </label>
          <label htmlFor="" className="forms__form__label">
            <Image src={email} alt="" className="forms__form__label__icon"/>
            <input type="text" placeholder="Enter Email" className="forms__form__label__input"/>
          </label>
          <label htmlFor="" className="forms__form__label">
            <Image src={password} alt="" className="forms__form__label__icon"/>
            <input type="text" placeholder="Enter Password " className="forms__form__label__input"/>
          </label>
          <label htmlFor="" className="forms__form__label">
            <Image src={confirmPassword} alt="" className="forms__form__label__icon"/>
            <input type="text" placeholder="Confirm Password" className="forms__form__label__input"/>
          </label>
        </form>
      </div>
    </section>
  );
}
