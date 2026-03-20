import React from "react";
import '../styles/Footer.css'
import logo from '../assets/barber.jpg' 

export const Footer = () => {
  return (
<footer>
  <img src={logo} alt="Logo empresa" />
  <p>© 2026 Barbería Real. Todos los derechos reservados.</p>
</footer>


  );
};
