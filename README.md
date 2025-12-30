# SOA Project – Person Management Application

## 📌 Description
This project is a web application developed as part of the **Service-Oriented Architecture (SOA)** course.
It demonstrates the design, implementation, and consumption of **RESTful web services** using a modern frontend and a Java backend.

The application allows users to manage persons through a simple and intuitive interface, supporting all basic CRUD operations.

---

## 🏗️ Global Architecture

The project follows a **client-server architecture**:

- **Frontend**: React.js  
- **Backend**: Java (REST services using JAX-RS)  
- **Server**: Apache Tomcat  
- **Communication**: HTTP with JSON data format  


---

## ✨ Features

- 📋 Display the list of persons  
- ➕ Add a new person  
- ✏️ Edit an existing person  
- ❌ Delete a person  
- 🔍 Search persons by name or ID  

All operations are performed through RESTful services.

---

## 🔌 REST Services

The backend exposes the following REST endpoints:

| HTTP Method | Endpoint | Description |
|------------|----------|-------------|
| GET | `/persons` | Retrieve all persons |
| GET | `/persons/{id}` | Retrieve a person by ID |
| GET | `/persons/search?nom=` | Search persons by name |
| POST | `/persons` | Add a new person |
| PUT | `/persons/{id}` | Update a person |
| DELETE | `/persons/{id}` | Delete a person |

---

## 🧩 Frontend Structure

The frontend is composed of reusable React components:

- `App.js` – Main application and routing
- `PersonList` – Displays the list of persons
- `PersonForm` – Add and edit persons
- `PersonSearch` – Search functionality
- `personApi.js` – Centralized API calls using Axios

---

## 🛠️ Technologies Used

- React.js
- Java (JAX-RS)
- Axios
- Apache Tomcat
- REST API
- JSON
- Git & GitHub

---

## 🎓 Educational Objectives

This project applies concepts studied during SOA practical sessions:
- RESTful service design
- HTTP methods (GET, POST, PUT, DELETE)
- Frontend–backend integration
- Clean architecture and separation of concerns

---

## 👩‍💻 Author

**Siwar Mchirgui**  
Computer Science Student  
SOA Project – Academic Year 2025–2026


