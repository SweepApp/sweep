export default function Login() {
  return (
    <div className="login">
      <div className="sign">
        <div className="sign__container">
          <h1>Log in</h1>
          <div className="sign__container__form">
            <form>
              <input type="text" placeholder="Email" required/>
              <input type="password" placeholder="Password" required/>
              <button type="submit" className="sign">Sign In</button>
            </form>
          </div>
          <div className="sign__container__links">
            <a href="#">Forgot Password?</a>
            <a href="/signup">Create Account</a>
          </div>
        </div>
      </div>
    </div>
  );
}
