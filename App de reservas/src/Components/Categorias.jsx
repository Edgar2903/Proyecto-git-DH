import React, { useState, useEffect } from "react";
import "../styles/recomendaciones.css";

export const Categorias = () => {
  const [products, setProducts] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await fetch(
          "https://69a5a560885dcb6bd6a8ded1.mockapi.io/api/productos",
        );
        if (!response.ok) throw new Error("Error al obtener productos");
        const datos = await response.json();
        setProducts(datos);
      } catch (err) {
        setError(err.message);
        console.error("Error:", err);
      } finally {
        setCargando(false);
      }
    };

    obtenerProductos();
  }, []);

  const selectPageHandler = (selectPage) => {
    if (selectPage >= 1 && selectPage <= totalPages && selectPage !== page) {
      setPage(selectPage);
    }
  };
  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="categorias">
      <h1>Buscar por tipo de servicio</h1>

      <div className="categorias-grid">
        {products
          .slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage)
          .map((p) => (
            <div className="categoria-card" key={p.id}>
              <img src={p.img} alt={p.nombre} />
              <h3>{p.nombre}</h3>
            </div>
          ))}
      </div>
      {products.length > 0 && (
        <div className="paginacion">
          <span>
            <button
              onClick={() => selectPageHandler(1)}
              className={page === 1 ? "pagina-inactiva" : ""}
            >
              Inicio
            </button>
            <button
              onClick={() => selectPageHandler(page - 1)}
              className={page > 1 ? "" : "pagina-inactiva"}
            >
              Anterior
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                className={page === i + 1 ? "pagina-activa" : ""}
                key={i}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => selectPageHandler(page + 1)}
              className={page < totalPages ? "" : "pagina-inactiva"}
            >
              Siguiente
            </button>
          </span>
        </div>
      )}
    </section>
  );
};
