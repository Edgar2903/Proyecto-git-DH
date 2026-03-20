import React from 'react'
import '../styles/NavBar.css'
import logo from "../assets/barber.jpg"



export const NavBar = () => {
  return (

<nav className="navbar sticky-top bg-body-tertiary  ">

  <div className="container-fluid navbar navbar-expand-lg " >
    <a className="navbar-brand" href="/" >
      <img src={logo}  alt="Bootstrap" role="button" ></img>
      <h1 className="barber-title">Barberia </h1>
      <h1 className="barber-title2">Real</h1>
    </a>

    <ul className="buttons" role="button" data-bs-toggle="collapse" >
          <li type="button" className="btn-barber" >Iniciar sesion</li>
          <li type="button" className="btn-outline-barber">Crear Cuenta</li>
    </ul>
  </div>
</nav>
  );
};

