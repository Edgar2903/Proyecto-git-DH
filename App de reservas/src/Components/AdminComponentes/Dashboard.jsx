import React, { useEffect, useState } from 'react'
import '../../styles/admin.css'

export const Dashboard = () => {
    const [barberos, setBarberos] = useState([]);
    const [error, setError] = useState(null);
    const [productos, setProductos] = useState([]);


    
  useEffect(() => {
    const obtenerBarberos = async () => {
      try {
        const response = await fetch(
          "https://69a5a560885dcb6bd6a8ded1.mockapi.io/api/barberos",
        );
        if (!response.ok) throw new Error("Error al obtener barberos");
        const datos = await response.json();
        console.log(datos);
        setBarberos(datos);
      } catch (err) {
        setError(err.message);
        console.error("Error:", err);
      } 
    };

    obtenerBarberos();
  }, []);
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await fetch(
          "https://69a5a560885dcb6bd6a8ded1.mockapi.io/api/productos",
        );
        if (!response.ok) throw new Error("Error al obtener productos");
        const datos = await response.json();
        console.log(datos);
        setProductos(datos);
      } catch (err) {
        setError(err.message);
        console.error("Error:", err);
      } 
    };

    obtenerProductos();
  }, []);






return (
<div className="dashboard-cards">
  <div className="card">
    <p>Cantidad de barberos</p>
    <p>{barberos.length}</p>
  </div>
  <div className="card">
    <p>Cantidad de productos</p>
    <p>{productos.length}</p>
  </div>
  <div className="card">
    <p>Cantidad de barberos</p>
    <p>{barberos.length}</p>
  </div>
  <div className="card">
    <p>Cantidad de productos</p>
    <p>{productos.length}</p>
  </div>
</div>
)


}
