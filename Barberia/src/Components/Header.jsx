import React from "react";
import logo from "../assets/barber.jpg";
import "../styles/Header.css";
import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      
        <div className="nav ">
         <Link to="/">
          <img src={logo} alt="Logo de la empresa" className="logo" />
        </Link>
          <h1 className="title"  >Barberia</h1>
        </div>
        <form className="d-flex" role="search">
          <button className="btn" type="submit">
            Iniciar Sesión
          </button>
          <button className="btn " type="submit">
            Crear Cuenta
          </button>
        </form>
      
    </nav>

    
  );
};
