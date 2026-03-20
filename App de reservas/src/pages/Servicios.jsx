import React from "react";
import "../styles/Servicios.css";
import { Buscador } from "../Components/Buscador";
import { Categorias } from "../Components/Categorias";
import { Recomendaciones } from "../Components/Recomendaciones";
import { ProductosDestacados } from "../Components/ProductosDestacados";

export const Servicios = () => {
  return (
    <main>
      <section className="search-section">
        <Buscador />
      </section>
      <section className="featured-products">
        <ProductosDestacados />
      </section>

      <section className="categories-section">
        <Categorias />
      </section>

      <section className="recommendations-section">
        <Recomendaciones />
      </section>
    </main>
  );
};
