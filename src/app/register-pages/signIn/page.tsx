import Image from "next/image";
import "../forms.scss";
import userImg from "../../../../public/images/register-user-image.jpg";
import userName from "../../../../public/images/userName.svg";
import password from "../../../../public/images/password.svg";
import facebook from "../../../../public/images/facebook.svg";
import google from "../../../../public/images/google.svg";
import x from "../../../../public/images/x.svg";
import loginDecorImg from "../../../../public/images/login-decor-img.jpg";

export default function SingIn() {
  return (
    <section className="forms">
      <div className="forms__container sing-in__container">
        <div className="wrapper__forms__img">
          <Image src={loginDecorImg} alt="" className="forms__img" />
        </div>

        <form className="forms__form">
          <h1>Sign In</h1>
          <label htmlFor="" className="forms__form__label">
            <Image src={userName} alt="" className="forms__form__label__icon" />
            <input type="text" placeholder="Enter Username" className="forms__form__label__input" />
          </label>
          <label htmlFor="" className="forms__form__label">
            <Image src={password} alt="" className="forms__form__label__icon" />
            <input type="text" placeholder="Enter Password" className="forms__form__label__input" />
          </label>
          <label className="forms__form__label">
            <input type="checkbox" className="forms__form__label__checkbox" />
            <p>Remember me</p>
          </label>

          <button type="submit" className="redBtn forms__form__button">
            Login
          </button>

          <div className="forms__form__alternatives">
            <div className="forms__form__alternatives__title"> Or, Login with</div>
            <div className="forms__form__alternatives__socials">
              <div className="forms__form__alternatives__socials__social">
                <Image src={facebook} alt="facebook" />
              </div>
              <div className="forms__form__alternatives__socials__social">
                <Image src={google} alt="google" />
              </div>
              <div className="forms__form__alternatives__socials__social">
                <Image src={x} alt="x" />
              </div>
            </div>
          </div>

          <div className="forms__form__create-newf form-link">
            Don’t have an account? <a href="/register-pages/signUp">Create One</a>
          </div>
        </form>
      </div>
    </section>
  );
}
