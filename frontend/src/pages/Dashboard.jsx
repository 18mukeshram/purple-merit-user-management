import { useContext } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../auth/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Dashboard</h2>

        {user ? (
          <>
            <p>
              <strong>Welcome:</strong> {user.name}
            </p>
            <p>
              <strong>Role:</strong> {user.role}
            </p>
          </>
        ) : (
          <p>Loading user...</p>
        )}
      </div>
    </>
  );
};

export default Dashboard;
