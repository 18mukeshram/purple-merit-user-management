## Purple Merit – Mini User Management System

A production-ready Mini User Management System built as part of the Purple Merit Technologies – Backend Developer Intern final assessment.

This project demonstrates secure authentication, role-based authorization, clean backend architecture, and cloud deployment with a minimal React frontend for integration proof.

## 🚀 Live Links

Frontend (Vercel):
https://purple-merit-user-management.vercel.app

Backend (Render):
https://purple-merit-user-management.onrender.com

## 🛠 Tech Stack

Backend

Node.js

Express.js

MongoDB (Atlas)

JWT Authentication

bcrypt (password hashing)

Jest + Supertest (testing)

Frontend

React (Hooks)

React Router

Context API

## Deployment

Backend: Render

Frontend: Vercel

## 🔐 Features

User Signup & Login

JWT-based authentication

Role-Based Access Control (USER / ADMIN)

Protected routes (backend enforced)

User dashboard

Profile update (name)

Secure password hashing

Environment-based configuration

Cloud deployment

## 📂 Project Structure

/
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── middleware/
│ │ ├── models/
│ │ ├── config/
│ │ └── server.js
│ └── tests/
│
├── frontend/
│ ├── src/
│ │ ├── auth/
│ │ ├── pages/
│ │ ├── components/
│ │ └── routes/
│
└── README.md

## 🧪 Testing

Backend tests implemented using Jest + Supertest covering:

Authentication

Protected routes

RBAC enforcement

Run locally:

npm test

## ⚙️ Environment Variables

Backend (Render)

MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
NODE_ENV=production
PORT=5000

Frontend (Vercel)

REACT_APP_API_URL=https://purple-merit-user-management.onrender.com/api

## 🎯 Assessment Focus

This project prioritizes:

Backend correctness & security

Clean API design

Proper authorization

Production readiness

Frontend is intentionally minimal to demonstrate backend integration.

## 👤 Author

Sai Mukesh Ram Bellamkonda
