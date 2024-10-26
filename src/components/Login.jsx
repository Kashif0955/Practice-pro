import React from "react";

const LoginForm = () => {
  return (
    <div className="background">
      <div className="shapes"></div>
      <div className="shapes"></div>
      <form>
        <h3>Login Form</h3>
        <label htmlFor="user">Username</label>
        <input
          type="text"
          name="user"
          id="user"
          placeholder="Enter Username"
          autoComplete="name"
        />
        <label htmlFor="psw">Password</label>
        <input
          type="password"
          name="psw"
          id="psw"
          placeholder="Enter Password"
          autoComplete="password"
        />
        <button type="submit">Login Now</button>
        <div className="social">
          <div className="gg">
            <i className="bi bi-google"></i> Google
          </div>
          <div className="fb">
            <i className="bi bi-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
