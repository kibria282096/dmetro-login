import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log("context", user);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to="/" className="btn btn-ghost text-xl">
          MetroRail Dhaka
        </Link>
        <Link className="btn btn-ghost text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost text-xl" to="/purchaseticket">
          Buy-Ticket
        </Link>
        <Link className="btn btn-ghost text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost text-xl" to="/register">
          Register
        </Link>
        {user?.email && <span>Welcome, {user.email} </span>}
        {user?.email ? (
          <button onClick={handleSignOut} className="btn btn-sm">
            Log out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm">Log In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
