import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ userName }) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/login");
  };
  return (
    <div className="Header">
      <div className="HeaderContent">
        {userName && <p>Welcome {userName.slice(0, 5)}</p>}
        <div>
          {userName ? (
            <button onClick={handleLogOut}>LogOut</button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
