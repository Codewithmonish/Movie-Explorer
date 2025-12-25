🎬 Movie Explorer

Movie Explorer is a full-stack MERN application inspired by Netflix that allows users to browse movies while providing administrators with a secure dashboard to manage movie content.
This project demonstrates real-world full-stack development, authentication, and role-based access control.

🚀 Features
👤 User Features

User Signup & Login

JWT-based authentication

Session management using LocalStorage

Browse movies with posters, genres, and ratings

User profile visible after login

Secure logout functionality

🛠 Admin Features

Separate Admin authentication

Admin-only dashboard

Add, Edit, Delete movies

View total users and movies

Role-based access control

🧰 Tech Stack
Frontend

React.js

CSS3 (Netflix-inspired UI)

Axios

LocalStorage

Backend

Node.js

Express.js

JWT Authentication

bcrypt.js (Password Hashing)

Database

MongoDB

Mongoose

🏗 System Architecture
React Frontend → Express Backend API → MongoDB Database

🔐 Authentication & Security

Password hashing using bcrypt

JWT-based authentication

Role-based authorization (User & Admin)

Secure protected API routes

📡 Backend API Endpoints
Authentication
Method	Endpoint	Description
POST	/api/auth/signup	Register new user
POST	/api/auth/login	User login
POST	/api/auth/admin	Admin login
Movies
Method	Endpoint	Description
GET	/api/movies	Fetch all movies
POST	/api/movies	Add movie (Admin only)
PUT	/api/movies/:id	Update movie
DELETE	/api/movies/:id	Delete movie
⚙️ How to Run the Project
Step 1️⃣ Start MongoDB

Start MongoDB using MongoDB Compass
or

Run MongoDB locally:

mongod

Step 2️⃣ Run Backend
cd server
npm install
npm start


Backend runs at:
👉 http://localhost:5000

Step 3️⃣ Run Frontend
cd client
npm install
npm run dev


Frontend runs at:
👉 http://localhost:5173

🌐 Application Routes
User

Login: /login

Signup: /signup

Admin

Admin Login: /admin/login

Admin Dashboard: /admin
