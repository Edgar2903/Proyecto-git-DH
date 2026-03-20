
export const Buscador = () => {
  return (
    <section className="buscador">
      <h1  className="buscador-title">Encontrá tu barbero ideal</h1>

      <div className="buscador-inputs">
        <input type="text" className="form-control" placeholder="Servicio o Barbero" />
        <input className="form-control" type="date" />
        <button className="buscador-button">Buscar</button>
      </div>
    </section>
  )
}
