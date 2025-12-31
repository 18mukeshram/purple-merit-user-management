## Mini User Management System

Backend Developer Intern Assessment – Purple Merit Technologies

This project is a production-oriented Mini User Management System built to demonstrate secure backend design, authentication, role-based authorization, and deployment readiness.

The focus of this implementation is backend correctness and security, with a minimal frontend used purely to validate API behavior and access control.

## 🔗 Live Deployment

Frontend (Vercel):
https://purple-merit-user-management.vercel.app

Backend (Render):
https://purple-merit-user-management.onrender.com

## 🧠 Design Philosophy

This project was designed with the following principles:

Backend as the single source of truth

Explicit authentication and authorization enforcement

Clear separation of concerns

Minimal but functional frontend

Production-style deployment and configuration

UI polish was intentionally kept minimal to prioritize system correctness and architecture.

## 🛠️ Tech Stack
Backend

Node.js

Express.js

MongoDB Atlas

JWT Authentication

bcrypt for password hashing

Jest + Supertest for testing

Frontend

React (Hooks)

React Router

Context API for auth state

## Deployment

Render – backend hosting

Vercel – frontend hosting

## ✨ Features
Authentication

User signup with input validation

Secure password hashing using bcrypt

JWT-based login

Token-based session handling

Authorization (RBAC)

Default role: USER

Admin-only routes protected via backend middleware

Strict server-side role enforcement (no frontend trust)

User Management

Fetch authenticated user (/users/me)

Update own profile (name)

Protected dashboard and profile routes

Security Practices

Passwords never stored in plain text

JWT secrets stored in environment variables

Role checks enforced at backend level

Proper HTTP status codes for auth failures

## 📂 Project Structure
root/
├── backend/
│   ├── src/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── admin/
│   │   ├── middlewares/
│   │   ├── config/
│   │   └── server.js
│   └── tests/
│
├── frontend/
│   ├── src/
│   │   ├── auth/
│   │   ├── pages/
│   │   ├── components/
│   │   └── routes/
│
└── README.md


Each layer has a single responsibility, following real-world backend service conventions.

## 🔐 API Overview
Auth Routes

POST /api/auth/signup – Create new user

POST /api/auth/login – Authenticate user and issue JWT

User Routes (Authenticated)

GET /api/users/me – Get current user

PUT /api/users/me – Update profile

Admin Routes (ADMIN only)

GET /api/admin/users

PATCH /api/admin/users/:id/role

DELETE /api/admin/users/:id

## 🧪 Testing

Backend tests are implemented using Jest + Supertest, covering:

Signup and login flows

Auth-protected routes

Role-based access control

Run tests locally:

cd backend
npm test

## ⚙️ Environment Variables
Backend (Render / Local)
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=production
PORT=5000

Frontend (Vercel)
REACT_APP_API_URL=https://purple-merit-user-management.onrender.com/api


No secrets are committed to the repository.

## 🚀 Deployment

Backend deployed on Render

Frontend deployed on Vercel

Environment variables managed per platform

End-to-end system fully cloud-hosted

## 📌 Notes on Roles

All users are created with the USER role by default

Admin privileges are intentionally not assignable via signup

This mirrors real-world systems where admin roles are granted explicitly

## 🎯 Assessment Focus

This project demonstrates:

Secure authentication & authorization

Clean REST API design

Role-based access control

Production deployment readiness

Backend-first engineering mindset

## 👤 Author

Sai Mukesh Ram Bellamkonda
Backend Developer Intern Candidate

## ✅ Final Note

This system is intentionally simple, secure, and correct.
The goal is to demonstrate how backend systems are designed and enforced in production, not frontend styling complexity.
