import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../LocalStorgae/AddToDB";
import "./ForgotPassword.css";
const ForgotPassword = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [Loading, setLoaing] = useState(false);
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    password === confirmPassword
      ? changePassword(email, password, confirmPassword)
          .then((data) => {
            if (data === "Success") {
              alert("Password Change Successfully");
              setLoaing(true);
              setTimeout(() => {
                navigate("/login");
              }, 2000);
            }
          })
          .catch((err) => alert(err))
      : alert("Password and Confirm Password are not same");
  };

  return (
    <div className="Container">
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div className="ForgotPassword-Container">
          <div className="ForgotPassword-Label">
            <label htmlFor="">Email</label>
            <label htmlFor="">New Password</label>
            <label htmlFor="">Confirm Password</label>
          </div>

          <div className="ForgotPassword-Input">
            <input type="email" name="" ref={emailRef} id="" />
            <input type="password" name="" ref={passwordRef} id="" />
            <input type="password" name="" ref={confirmPasswordRef} id="" />
            <div className="Button-Container">
              <button type="submit" className="Button">
                Change Password
              </button>
            </div>
            {Loading && <h2>Please Wait...</h2>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
