import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

export const Barberos = () => {


  const {barberos, loading} = useContext(DataContext)

  if (loading) return <p>Cargando...</p>

  return (
    <div className="barberos">
      <h2 className="barberos-title">Barberos Recomendados</h2>
      <div className="barberos-container">
        {barberos.map((b) => (
          <div key={b.id} className="barberos-card"> 
          <h3>{b.name} {b.lastName}</h3>
          <img src={b.img} alt={b.name} className="barberos-img" />
          <p>{b.score}</p>
          </div>
        ))}

      </div>
    </div>
  )
}
