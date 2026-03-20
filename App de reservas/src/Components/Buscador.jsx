import React from 'react'
import "../styles/recomendaciones.css";

export const Buscador = () => {
  return (
    <section className="buscador">
      <h1>Encontrá tu barbero ideal</h1>

      <div className="buscador-inputs">
        <input type="text" placeholder="Servicio o barbero" />
        <input className="input-date" type="date" />
        <button>Buscar</button>
      </div>
    </section>
  )
}
