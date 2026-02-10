import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GoogleLoginBtn from "../Components/GoogleLoginBtn";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Email and Password required");
      return;
    }

    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password);
    localStorage.setItem("isLogin", "true");

    navigate("/");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card shadow-lg">
        <h3 className="text-center mb-4">Movie Ticket Booking 👋</h3>

        <div className="input-group-custom">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group-custom">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100 mt-3" onClick={handleLogin}>
          Login
        </button>

        <div className="divider my-3">
          <span>OR</span>
        </div>

        <GoogleLoginBtn />
      </div>
    </div>
  );
};

export default LoginPage;

