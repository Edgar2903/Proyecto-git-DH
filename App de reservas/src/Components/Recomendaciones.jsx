import React, { useState, useEffect } from "react";
import "../styles/recomendaciones.css";

export const Recomendaciones = () => {
  const [barberos, setBarberos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(barberos.length / itemsPerPage);


  useEffect(() => {
    const fetchBarberos = async () => {
      try {
        const res = await fetch(
          "https://69a5a560885dcb6bd6a8ded1.mockapi.io/api/barberos",
        ); // ajusta la URL a tu backend
        if (!res.ok) throw new Error("Error al obtener barberos");
        const data = await res.json();
        setBarberos(data);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setCargando(false);
      }
    };

    fetchBarberos();
  }, []);

  const selectPageHandler = (selectPage) => {
    if (selectPage >= 1 && selectPage <= totalPages && selectPage !== page) {
      setPage(selectPage);
    }
  };

  if (cargando) return <p>Cargando barberos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="recomendaciones">
      <h1>Barberos recomendados</h1>

      <div className="categorias-grid">
        {barberos
          .slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage)
          .map((b) => (
            <div className="categoria-card" key={b.id}>
              <img src={b.img} alt={b.nombre} />
              <h3>{b.nombre}</h3>
            </div>
          ))}
      </div>
      {barberos.length > 0 && (
        <div className="paginacion">
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
              key={i}
              className={page === i + 1 ? "pagina-activa" : ""}
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
        </div>
      )}
    </section>
  );
};
