import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api/axios";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await api.get(`/admin/users?page=${page}&limit=5`);
      setUsers(res.data.data.users);
    };

    fetchUsers();
  }, [page]);

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Admin – User Management</h2>

        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id}>
                <td>{u.email}</td>
                <td>{u.name}</td>
                <td>{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </>
  );
};

export default AdminUsers;
