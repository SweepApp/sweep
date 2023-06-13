export default function Signup() {
  return (
    <div className="login">
      <div className="sign">
        <div className="sign__container">
          <h1>Create an account</h1>
          <div className="sign__container__form">
            <form>
              <input type="text" placeholder="Username" required/>
              <input type="text" placeholder="Email" required/>
              <input type="password" placeholder="Password" required/>
              <input type="password" placeholder="Confirm password" required/>
              <button type="submit" className="sign">Sign Up</button>
            </form>
          </div>
          <div className="sign__container__links">
            <a href="/login">Already have an account? Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
}
