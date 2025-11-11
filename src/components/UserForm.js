// src/components/UserForm.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function UserForm({ selectedUser, onSuccess }) {
  const [user, setUser] = useState({ name: "", email: "", department: "" });

  useEffect(() => {
    if (selectedUser) setUser(selectedUser);
  }, [selectedUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user.id) {
        await axios.put(`/api/users/${user.id}`, user);
      } else {
        await axios.post("/api/users", user);
      }
      setUser({ name: "", email: "", department: "" });
      onSuccess(); // refresh user list
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        value={user.email}
        onChange={handleChange}
        required
      />
      <input
        name="department"
        placeholder="Department"
        value={user.department}
        onChange={handleChange}
        required
      />
      <button type="submit">{user.id ? "Update" : "Add"} User</button>
    </form>
  );
}

export default UserForm;
