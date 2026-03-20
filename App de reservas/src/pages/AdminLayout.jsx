import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminSideBar } from "../Components/AdminComponentes/AdminSideBar";
import { Actions } from "../Components/AdminComponentes/Actions";
import { Barberos } from "../Components/AdminComponentes/Barberos";
import { Historial } from "../Components/AdminComponentes/HistorialClients";
import { Dashboard } from "../Components/AdminComponentes/Dashboard";

export const AdminLayout = () => {
  return (
    <div className="admin">
      <AdminSideBar />
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="acciones" element={<Actions />} />
        <Route path="historial" element={<Historial />} />
        <Route path="barberos" element={<Barberos />} />
      </Routes>
    </div>
  );
};
