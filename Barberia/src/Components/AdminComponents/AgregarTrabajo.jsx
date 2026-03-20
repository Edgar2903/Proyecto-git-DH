import React from "react";
import { useState } from "react";

export const AgregarTrabajo = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    imagenes: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, imagenes: [...e.target.files] });
  };

  const handleSubmit = async () => {
  try {
    const response = await fetch("http://localhost:8080/trabajo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.nombre,
        price: formData.precio,
        description: formData.descripcion,
        img: formData.imagenes[0]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      alert(errorText); // mostrará "El nombre ya está en uso"
      return;
    }

    alert("Trabajo guardado correctamente");
  } catch (error) {
    alert("Error al guardar trabajo");
  }
};


  return (
    <div>
      <h1 className="title-agregar-trabajo">Agregar Producto</h1>
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        placeholder="Nombre"
        className="form-control mb-3"
      />
      <input
        type="number"
        name="precio"
        value={formData.precio}
        onChange={handleChange}
        placeholder="Precio"
        className="form-control mb-3"
      />
      <textarea
        name="descripcion"
        value={formData.descripcion}
        onChange={handleChange}
        placeholder="Descripción"
        className="form-control mb-3"
      />
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="form-control mb-3"
      />
      <button onClick={handleSubmit} className="form-control">
        Guardar
      </button>
    </div>
  );
};
