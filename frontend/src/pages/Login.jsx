import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  // ✅ ADD THIS EFFECT
  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, loading, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        { email, password }
      );

      const { accessToken, user } = res.data.data;

      localStorage.setItem("token", accessToken);
      // setUser is handled by AuthContext via /users/me
      navigate("/dashboard");
    } catch (err) {
      setError("Login failed");
    }
  };

  if (loading) return null; // prevent flicker

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
