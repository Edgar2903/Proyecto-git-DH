import React, { useEffect, useState } from "react";

export const Actions = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !description) {
      setError("Todos los campos son obligatorios");
      return;
    }
    const duplicate = products.find(
      (product) => product.name.toLowerCase() === name.toLowerCase(),
    );

    if (duplicate) {
      setError("Ya existe un producto con ese nombre");
      return;
    }

    const newProduct = {
      name,
      price,
      description,
      image,
    };
    setProducts([...products, newProduct]);

    setName("");
    setPrice("");
    setDescription("");
    setImage(null);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        throw new Error("Error al guardar el producto");
      }
      await fetchProducts();
    } catch (error) {
      setError("No se pudo guardar el producto");
    }
  };

  const url = "http//localhost:8080/products";

  const fetchProducts = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new error("Error al obtener productos");
      }
      const data = await res.json();
      setProducts(data);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h2>Agregar Producto</h2>

      <form className="form" onSubmit={handleSubmit}>
        <div className="input">
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="number"
            placeholder="Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="description">
          <textarea
            type="text"
            placeholder="Descripcion"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <button type="sumbit">Guardar</button>
        </div>
      </form>

      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price} - {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
};
