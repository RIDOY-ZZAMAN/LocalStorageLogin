import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authorization } from "../LocalStorgae/AddToDB";
import "./Login.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    email && password === ""
      ? alert("Email and Password Can not be empty")
      : authorization(email, password)
          .then((data) => {
            if (data === "Succes") {
              navigate("/");
            }
          })
          .catch((err) => {
            alert("Email or Password Does not Match");
          });
  };

  return (
    <div className="Container">
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div className="Login-Container">
          <div className="Login-Label">
            <label htmlFor="">Email</label>
            <label htmlFor="">Password</label>
          </div>

          <div className="Login_Input">
            <input type="email" name="" ref={emailRef} id="" />
            <input type="password" name="" ref={passwordRef} id="" />
            <div className="Button-Container">
              <button type="submit" className="Button">
                Login
              </button>
            </div>
            <br />
            <div className="RegAndForgotPassword">
              <div>
                <span className="commonSpanColor">Don't Have an Account?</span>{" "}
                <br />
                <span className="commonSpanColor">Click Here to </span>
                <Link to={"/register"}>Register</Link>
              </div>
              <div>
                <span className="commonSpanColor">Forgot Password?</span> <br />
                <Link to={"/forgotpassword"}>Reset Password</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
