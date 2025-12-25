import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./AdminStyles.css";

const AdminLayout = () => {
  return (
    <div className="admin-container">
      
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">🎬 Admin Panel</h2>

        <nav className="admin-menu">
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/movies">Movies</Link>
          <Link to="/admin/add-movie">➕ Add Movie</Link>
          <Link to="/admin/genres">Genres</Link>
          <Link to="/admin/users">Users</Link>
          <Link to="/admin/settings">Settings</Link>
          <Link to="/login" className="logout">Logout</Link>
        </nav>
      </aside>

      {/* Page Content */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

