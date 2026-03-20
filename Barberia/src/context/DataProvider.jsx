import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [barberos, setBarberos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [trabajos, setTrabajos] = useState([]);
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resBarberos, resClientes, resTrabajos, resReservas] = await Promise.all([
          fetch("http://localhost:8080/barbero"),
          fetch("http://localhost:8080/cliente"),
          fetch("http://localhost:8080/trabajo"),
          fetch("http://localhost:8080/reservas")
        ]);

        setBarberos(await resBarberos.json());
        setClientes(await resClientes.json());
        setTrabajos(await resTrabajos.json());
        setReservas(await resReservas.json());
      } catch (err) {
        console.error("Error cargando datos:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ barberos, clientes, trabajos, reservas, loading }}>
      {children}
    </DataContext.Provider>
  );
};

