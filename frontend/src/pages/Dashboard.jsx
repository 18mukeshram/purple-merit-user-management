import { useContext } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../auth/AuthContext";

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Dashboard</h2>

        {loading ? (
          <p>Loading user...</p>
        ) : user ? (
          <>
            <p>
              <strong>Welcome:</strong> {user.name}
            </p>
            <p>
              <strong>Role:</strong> {user.role}
            </p>
          </>
        ) : (
          <p>User not found</p>
        )}
      </div>
    </>
  );
};

export default Dashboard;
