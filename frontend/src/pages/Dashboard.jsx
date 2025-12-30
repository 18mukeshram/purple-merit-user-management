import { useContext } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../auth/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Dashboard</h2>
        <p>Welcome, {user?.name}</p>
        <p>Role: {user?.role}</p>
      </div>
    </>
  );
};

export default Dashboard;
