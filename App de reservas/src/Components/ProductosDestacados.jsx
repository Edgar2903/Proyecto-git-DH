import React from "react";
import { useState, useEffect } from "react";
import "../styles/detalleProducto.css";
import { Link } from "react-router-dom";



function getUniqueProducts(arr) {
  return arr.filter(
    (p, index, self) => index === self.findIndex((t) => t.nombre === p.nombre)
  );
}

function getRandomItems(arr, max) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, max);
}

export const ProductosDestacados = () => {
  const [productosAleatorios, setProductosAleatorios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await fetch('https://69a5a560885dcb6bd6a8ded1.mockapi.io/api/productos');
        if (!res.ok) throw new Error('Error al obtener productos');
        const data = await res.json();
        const productosUnicos = getUniqueProducts(data);
        const seleccion = getRandomItems(productosUnicos, 10);
        setProductosAleatorios(seleccion);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setCargando(false);
      }
    };

    fetchProductos();
  }, []);

  if (cargando) return <p>Cargando servicios destacados...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="categorias">
      <h2>Servicios destacados</h2>
      <div className="productos-container">
        {productosAleatorios.map((producto) => (
          <Link
            to={`/producto/${producto.id}`}
            key={producto.id}
            className="producto"
            id="elemento-destacados"
          >
            <img src={producto.imgs} alt={producto.nombre} />
          </Link>
        ))}
      </div>
    </section>
  );
};
