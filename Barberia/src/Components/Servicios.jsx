import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import "../styles/Home.css";

export const Servicios = () => {
  const { trabajos, loading } = useContext(DataContext);

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="servicios">
      <h2 className="servicios-title">Servicios</h2>
      <div className="servicios-container">
        {trabajos.map((t) => (
          <div key={t.id} className="servicios-card">
            <p>{t.name}</p>
            <img src={t.img} alt={t.name} className="servicios-img" />
            <p>{t.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
