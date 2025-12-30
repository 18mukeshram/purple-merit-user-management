import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api/axios";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/users/me");
        setProfile(res.data.data);
        setName(res.data.data.name);
      } catch {
        setError("Failed to load profile");
      }
    };

    fetchProfile();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.put("/users/me", { name });
      setProfile(res.data.data);
    } catch {
      setError("Update failed");
    }
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>My Profile</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <p>Email: {profile.email}</p>
        <p>Role: {profile.role}</p>

        <form onSubmit={handleUpdate}>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <button type="submit">Update Name</button>
        </form>
      </div>
    </>
  );
};

export default Profile;
