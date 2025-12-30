import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Dashboard</Link> <Link to="/profile">Profile</Link>{" "}
      {user?.role === "ADMIN" && <Link to="/admin/users">Admin Users</Link>}
      <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
