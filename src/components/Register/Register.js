import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addToDB } from "../LocalStorgae/AddToDB";
import "./Register.css";
const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [Loading, setLoaing] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const registerDetails = { name, email, password };
    addToDB(registerDetails)
      .then((data) => {
        if (data === "success") {
          alert("You have Registerd Successfully");
          setLoaing(true);
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      })
      .catch((err) => {
        alert("err");
      });
  };
  return (
    <div className="Container">
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div className="Register-Container">
          <div className="Register-Label">
            <label htmlFor="">Name</label>
            <label htmlFor="">Email</label>
            <label htmlFor="">Password</label>
          </div>

          <div className="Register-Input">
            <input type="text" name="" ref={nameRef} id="" />
            <input type="email" name="" ref={emailRef} id="" />
            <input type="password" name="" ref={passwordRef} id="" />
            <div className="Button-Container">
              <button type="submit" className="Button">
                Register
              </button>
            </div>
            {Loading && (
              <h3 className="LaodingMessage">
                Redirecting to Login Page, Please Wait ....
              </h3>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
