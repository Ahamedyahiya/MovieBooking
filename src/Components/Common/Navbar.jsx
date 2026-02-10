import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";
import "./Navbar.css";

const Navbar = () => {
  const { search, setSearch } = useContext(DataContext);
  const navigate = useNavigate();

  const isLogin = localStorage.getItem("isLogin") === "true";
  const profilePic = localStorage.getItem("ProfilePic");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/loginpage");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="navbar-logo">
         <Link className="navbar-brand fw-bold text-white" to="/">
        🎬 PSA
      </Link>
      </div>
     

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav mx-auto gap-2">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/productpage">Product</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cardpage">Cart</Link>
          </li>
        </ul>
        <div className="d-flex gap-3 align-items-center">
          <input
            className="search-input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔍 Search movie..."
          />

          {!isLogin ? (
            <Link to="/loginpage" className="btn btn-login">
              Login
            </Link>
          ) : (
            <img
              src={profilePic || "/user.png"}
              alt="user"
              className="user-logo"
              onClick={handleLogout}
              title="Logout"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



