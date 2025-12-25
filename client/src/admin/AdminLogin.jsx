import { useState } from "react";


const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const ADMIN_EMAIL = "admin@gmail.com";
    const ADMIN_PASSWORD = "admin123";

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true");
      window.location.href = "/admin/dashboard";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Admin Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <button style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(180deg, #000, #1c0000)",
    color: "white",
  },

  card: {
    width: "350px",
    padding: "30px",
    background: "rgba(0,0,0,0.7)",
    borderRadius: "12px",
    boxShadow: "0 0 12px rgba(255,0,0,0.3)",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "26px",
    fontWeight: "bold",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "none",
    outline: "none",
    background: "#222",
    color: "white",
    fontSize: "15px",
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#e50914",
    border: "none",
    borderRadius: "6px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "5px",
  },
};

export default AdminLogin;

