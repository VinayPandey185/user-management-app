# 🚀 User Management System  

A full-stack **CRUD web application** built with **React** and **Node.js (Express)** that lets you easily **add, view, edit, and delete users**.  
This project demonstrates the core of full-stack development — smooth frontend-backend communication using REST APIs.

---

## 🧠 Features  

✅ Add new users (Name, Email, Department)  
✅ View all users in a list  
✅ Update user information  
✅ Delete existing users  
✅ Responsive, clean React interface  
✅ Axios integration for REST API calls  
✅ Proxy and CORS configured for frontend ↔ backend communication  

---

## 🧩 Tech Stack  

| Layer | Technology | Purpose |
|-------|-------------|----------|
| 🖥️ Frontend | **React.js**, **Axios**, **HTML5**, **CSS3** | User Interface & API calls |
| ⚙️ Backend | **Node.js**, **Express.js** | REST API & logic handling |
| 🔒 Middleware | **CORS** | Enables frontend-backend access |
| 🧰 Dev Tools | **VS Code**, **npm**, **nodemon** | Development setup |

---

## 📂 Project Structure  

UserManagementSystem/
┣ backend/
┃ ┗ server.js ← Express API server
┣ frontend/
┃ ┣ src/
┃ ┃ ┣ components/
┃ ┃ ┃ ┣ UserForm.js ← Add / Edit users
┃ ┃ ┃ ┗ UserList.js ← View / Delete users
┃ ┃ ┗ App.js ← Main container
┃ ┣ index.css ← Styling
┃ ┗ package.json ← React config (includes proxy)
┗ README.md



---

## ⚡ How It Works  

1. The **frontend** runs on `http://localhost:3000`  
2. The **backend** runs on `http://localhost:8080`  
3. React uses **Axios** to call REST endpoints:  
   - `GET /api/users` → Fetch all users  
   - `POST /api/users` → Add a new user  
   - `PUT /api/users/:id` → Update existing user  
   - `DELETE /api/users/:id` → Delete user  

---

## 💻 How to Run Locally  

### 1️⃣ Run the Backend  
```bash
cd backend
npm install
node server.js

### 1️⃣ Run the Frontend  
```bash
cd frontend
npm install
npm start

Then visit 👉 http://localhost:3000

Future Enhancements

💾 Connect to MongoDB or MySQL for persistent storage

🔍 Add search & filtering

🔐 Add authentication (login/signup)

☁️ Deploy on Vercel / Render
