import { Navigate, Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { Servicios } from "./pages/Servicios";
import { Reservas } from "./pages/Reservas";
import { ProductosDestacados } from "./Components/ProductosDestacados";
import { DetalleProducto } from "./Components/DetalleProducto";
import { Footer } from "./Components/Footer";
import { AdminLayout } from "./pages/AdminLayout";


export const Barberia = () => {
  return (
    <main>
      {" "}
      <NavBar />{" "}
      <div className="container">
        {" "}
        <Routes>
          {" "}
          <Route path="/" element={<Servicios />} />{" "}
          <Route path="/reservas" element={<Reservas />} />{" "}
          <Route path="/admin/*" element={<AdminLayout />} />{" "}
          <Route path="/producto/:id" element={<DetalleProducto />} />{" "}
          <Route path="/destacados" element={<ProductosDestacados />} />{" "}
          <Route path="*" element={<Navigate to="/" />} />{" "}
        </Routes>{" "}
      </div>{" "}
      <Footer/> {" "}
    </main>
  );
};
