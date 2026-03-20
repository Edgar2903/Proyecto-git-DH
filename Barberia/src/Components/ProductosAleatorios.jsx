import React, { useState, useContext, useEffect } from 'react';
import { DataContext } from '../context/DataProvider';
import { Link } from 'react-router-dom';

function getUniqueProducts(arr) {
  return arr.filter(
    (p, index, self) => index === self.findIndex((t) => t.nombre === p.nombre)
  );
}

function getRandomItems(arr, max) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, max);
}

export const ProductosAleatorios = () => {
  const data = useContext(DataContext); // productos del contexto
  const [productosAleatorios, setProductosAleatorios] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const productosUnicos = getUniqueProducts(data);
      const seleccion = getRandomItems(productosUnicos, 10);
      setProductosAleatorios(seleccion);
    }
  }, [data]);

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
            <img src={producto.img} alt={producto.nombre} />
          </Link>
        ))}
      </div>
    </section>
  );
};
