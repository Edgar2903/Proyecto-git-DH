import { useState, useEffect } from "react";

export const AgregarServicio = () => {
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

      setName("");
      setPrice("");
      setDescription("");
      setImage([]);
      setError("");
    } catch (error) {
      console.error(error);
      setError("No se pudo guardar el producto");
    }
  };

  const url = "http//localhost:8080/products";

  const fetchProducts = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Error al obtener productos");
      }
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="admin-form card p-4 shadow-sm">
      <div className="admin-form card p-4 shadow-sm">
  
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div className="mb-3">
        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        </div>
        <div className="mb-3">
        <textarea
          type="text"
          placeholder="Descripcion"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        </div>
        <div className="mb-3">
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>

        <button type="sumbit">Guardar</button>
      </form>
      </div>

      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
    

  );
};
