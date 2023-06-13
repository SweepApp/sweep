export default function Sign(login) {
  return login === true ? (
    <div className="sign">
      <div className="sign__container">
        <div className="sign__container__logo">
          <img src="/src/assets/img/logo.png" alt="logo" />
        </div>
        <div className="sign__container__form">
          <form>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="sign__container__links">
          <a href="#">Forgot Password?</a>
          <a href="#">Create Account</a>
        </div>
      </div>
    </div>
  ) : (
    <div className="sign">
      <div className="sign__container">
        <div className="sign__container__logo">
          <img src="/src/assets/img/logo.png" alt="logo" />
        </div>
        <div className="sign__container__form">
          <form>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="sign__container__links">
          <a href="/login">Already have an account ? Log in</a>
        </div>
      </div>
    </div>
  );
}