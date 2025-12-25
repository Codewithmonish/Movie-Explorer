const AdminDashboard = () => {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Admin Dashboard</h1>

        <a href="/admin/add-movie" style={styles.button}>
          ➕ Add New Movie
        </a>

        <a href="/" style={styles.backLink}>← Back to Home</a>
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
    width: "400px",
    padding: "30px",
    background: "rgba(0,0,0,0.7)",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 0 12px rgba(255,0,0,0.25)",
  },

  title: {
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: "bold",
  },

  button: {
    display: "block",
    background: "#e50914",
    padding: "12px",
    borderRadius: "6px",
    color: "white",
    fontSize: "18px",
    margin: "15px 0",
    textDecoration: "none",
  },

  backLink: {
    color: "#bbb",
    fontSize: "14px",
    textDecoration: "none",
  },
};

export default AdminDashboard;





