import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";
import { Bell } from "lucide-react";
import search from "../../assets/search-solid.svg";
import Avatar from "../../components/Avatar/Avatar";
import "./Navbar.css";
import "./notification.css";
import { setCurrentUser } from "../../actions/currentUser";

const Navbar = ({ handleSlideIn }) => {
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);

  return (
    <header className="modern-header">
      <div className="modern-header-container">
        <div className="modern-header-left">
          <div className="modern-logo">
            <div className="modern-logo-icon">
              <span>SI</span>
            </div>
            <span className="modern-logo-text">StackIt</span>
          </div>
          <nav className="modern-nav">
            <Link to="/" className="modern-nav-btn">
              About
            </Link>
         
          </nav>
        </div>
        <div className="modern-header-right">
          <div className="modern-search-container">
            <img src={search} alt="search" className="modern-search-icon" />
            <input
              type="text"
              placeholder="Search questions..."
              className="modern-search-input"
            />
          </div>
          <button className="modern-bell-btn" onClick={() => setShowNotifications((prev) => !prev)}>
            <Bell size={20} />
          </button>
          {showNotifications && (
            <div className="notification-bar">
              <div className="notification-header">
                <span>Notifications</span>
                <button className="close-notification-btn" onClick={() => setShowNotifications(false)}>&times;</button>
              </div>
              <ul className="notification-list">
                <li className="notification-item">You have a new answer on your question!</li>
                <li className="notification-item">Welcome to StackIt! 🎉</li>
              </ul>
            </div>
          )}
          {User === null ? (
            <Link to="/Auth" className="modern-login-btn">
              Log in
            </Link>
          ) : (
            <>
              <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white"
              >
                <Link
                  to={`/Users/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button className="modern-login-btn" onClick={handleLogout}>
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
