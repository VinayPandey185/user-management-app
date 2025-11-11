// src/App.js
import React, { useState } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import "./index.css";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  const refresh = () => {
    setSelectedUser(null);
    setReloadKey(reloadKey + 1); // trigger list refresh
  };

  return (
    <div className="app-wrapper">
      <div className="container">
        <h1>User Management System</h1>
        <UserForm selectedUser={selectedUser} onSuccess={refresh} />
        <UserList key={reloadKey} onEdit={setSelectedUser} />
      </div>
    </div>
  );
}

export default App;
