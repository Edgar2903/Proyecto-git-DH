import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/paginaDetalle.css";

export const DetalleProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [mostrarTodas, setMostrarTodas] = useState(false);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/productos/${id}`); // ajusta la URL a tu backend
        if (!res.ok) throw new Error('Producto no encontrado');
        const data = await res.json();
        setProducto(data);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setCargando(false);
      }
    };

    fetchProducto();
  }, [id]);

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!producto) return <p>Producto no encontrado.</p>;

  return (
    <section className="detalle-producto">
      {" "}
      <header className="detalle-header">
        {" "}
        <h1 className="titulo-producto">{producto.nombre}</h1>{" "}
        <button className="button" onClick={() => navigate(-1)}>
          ← Volver
        </button>{" "}
      </header>{" "}
      <div className="detalle-body">
        {" "}
        <p className="descripcion">{producto.descripcion}</p>{" "}
        <div className="imagenes">
          {(mostrarTodas ? producto.imgs : producto.imgs.slice(0, 5)).map(
            (img, index) => (
              <img key={index} src={img} alt={producto.nombre} />
            ),
          )}
        </div>
        {producto.imgs.length > 5 && (
          <button
            className="btn-vermas"
            onClick={() => setMostrarTodas(!mostrarTodas)}
          >
            {mostrarTodas ? "Ver menos" : "Ver más"}
          </button>
        )}
      </div>{" "}
    </section>
  );
};
