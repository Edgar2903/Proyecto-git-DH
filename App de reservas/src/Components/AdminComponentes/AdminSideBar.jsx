import React from "react";
import { Link } from "react-router-dom";
import { Actions } from "./Actions";

export const AdminSideBar = () => {
  return (
      <div className="Sidebar">
        <h2>Menú</h2>
        <div className="container">
        

        <Link to="/admin" className="sidebar-btn">Dashboard</Link>
        <Link to="/admin/acciones" className="sidebar-btn">Acciones</Link>
        <Link to="/admin/historial" className="sidebar-btn">Historial de Clientes</Link>
        <Link to="/admin/barberos" className="sidebar-btn">Barberos</Link>
        <Link to="/admin/productos" className="sidebar-btn">Productos</Link>
      
        
      </div>
    </div>
  );
};
