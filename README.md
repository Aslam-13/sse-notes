# 📘 Note Taking Web App

A full-stack note-taking app built with:

- ⚛️ React + Vite (Frontend)
- 🌐 Node.js + Express (Backend)
- 🍃 MongoDB (Database)
- 🔐 JWT (Authentication)


> Features include secure authentication, note CRUD operations, user validation, and clean UI.

---

## 📁 Folder Structure

```
.
├── backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── frontend (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── main.jsx
│   └── index.html
```

---

## ⚙️ Installation

### 1. Clone the repo

```bash
git clone https://github.com/Aslam-13/sse-notes
cd note-app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

**Create `.env` in `/backend`:**

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

Run server:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd ../note-app-frontend
npm install
npm run dev
```

---

## 🔐 .env Variables

### Backend `.env`

| Key         | Description              |
|-------------|--------------------------|
| `PORT`      | Port to run backend      |
| `MONGO_URI` | Your MongoDB connection  |
| `JWT_SECRET`| JWT signing secret key   |

---

## ✅ Features

### 🔐 Authentication

- Register and login users securely
- Password hashing using `bcrypt`
- Protected routes with `JWT` middleware

### 📝 Notes Management (CRUD)

- Create, Read, Update, Delete notes
- Each note is linked to a user
- Notes can't be accessed by other users

### ✅ Validations

- Server-side validations (Joi/express-validator)
- Required fields for both auth and notes
- Handles invalid or expired tokens

### 💄 Frontend

- Login / Register forms with error handling
- Notes UI with Inline CSS
- Add/Edit/Delete note cards
- Responsive and modern layout

---

## 🔌 API Reference

### 🔐 **Auth APIs**

#### POST `/api/auth/register`

- ✅ **Body (JSON):**

```json
{
  "name": "John",
  "email": "john@example.com",
  "password": "123456"
}
```

- 🔁 **Returns:** `token`

---

#### POST `/api/auth/login`

- ✅ **Body (JSON):**

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

- 🔁 **Returns:** `token`

---

### 📝 **Note APIs** (All require JWT in headers)

#### 🔐 Headers (for all note routes):

```http
Authorization: Bearer <your_jwt_token>
Content-Type: application/json
```

---

#### GET `/api/notes`

- 🔁 Returns all notes of the logged-in user

---

#### POST `/api/notes`

- ✅ **Body (JSON):**

```json
{
  "title": "Meeting Notes",
  "content": "Discussed features..."
}
```

- 🔁 Returns created note

---

#### PUT `/api/notes/:id`

- ✅ **Body (JSON):**

```json
{
  "title": "Updated Title",
  "content": "Updated content"
}
```

---

#### DELETE `/api/notes/:id`

- 🔁 Deletes note by ID

---

## 🛡️ Security

- Hashed passwords with `bcryptjs`
- JWT tokens stored in localStorage (frontend)
- Auth middleware to protect routes
- Input validation to prevent invalid requests

---

## 🎨 UI Features

- Clean login/register pages
- Toast/error feedback
- Modular components (`NoteCard.jsx`)
- Responsive grid layout with Tailwind

---

## 📦 Technologies Used

| Backend         | Frontend        | Styling        |
|----------------|----------------|----------------|
| Node.js + Express | React + Vite     | Inline CSS    |
| MongoDB (Mongoose) | React Router     | PostCSS          |
| JWT + bcrypt    | Axios + Context | Responsive UI   |

---

## 🧪 Future Enhancements

- Tags & search for notes
- Markdown support
- Dark mode toggle
- Deployment with Render/Vercel

---

## 🧑‍💼 About This Project

This project was created as part of an interview coding task to demonstrate:

- Full-stack development
- RESTful API design
- React + Node integration
- Secure authentication
- Clean and maintainable code