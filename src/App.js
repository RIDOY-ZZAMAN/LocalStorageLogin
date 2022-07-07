import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
