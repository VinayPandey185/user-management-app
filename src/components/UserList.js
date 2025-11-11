// src/components/UserList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList({ onEdit }) {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("/api/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete user
  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`/api/users/${id}`);
        setUsers(users.filter((u) => u.id !== id)); // update UI instantly
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <div className="user-list">
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users available</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              <span>{u.name}</span> — <span>{u.email}</span> —{" "}
              <span>{u.department}</span>
              <div>
                <button onClick={() => onEdit(u)}>Edit</button>
                <button
                  onClick={() => deleteUser(u.id)}
                  style={{ marginLeft: "10px", backgroundColor: "#ff4d4d", color: "white" }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
