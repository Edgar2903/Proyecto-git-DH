import { Link, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { Home } from './pages/Home';

export const Barberia = () => {
  return (
    <>
      {" "}
      <Header />{" "}
      
      <main className="container">
        {" "}
        <Routes>
          {" "}
        <Route path="/" element={<Home />} />
          {/* <Route path="/reservas" element={<Reservas />} />{" "}
          <Route path="/admin/*" element={<AdminLayout />} />{" "}
          <Route path="/producto/:id" element={<DetalleProducto />} />{" "}
          <Route path="/destacados" element={<ProductosDestacados />} />{" "}
          <Route path="*" element={<Navigate to="/" />} />{" "} */}
        </Routes>{" "}
      </main>{" "}
      {/* <Footer/> {" "} */}
    </>
  );
};
