import React from 'react'
import { AgregarTrabajo } from '../Components/AdminComponents/AgregarTrabajo'
import "../styles/Admin.css"

export const Admin = () => {
  return (
    <main className="admin-container">
        <AgregarTrabajo/>
    </main>
  )
}
