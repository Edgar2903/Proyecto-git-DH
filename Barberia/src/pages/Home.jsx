import "../styles/Home.css"
import { Buscador } from '../Components/Buscador'
import { Servicios } from '../Components/Servicios'
import { Barberos } from "../Components/Barberos"

export const Home = () => {
  return (
    <main className="home-container">
      <Buscador />
      <Servicios/>
      <Barberos/>
    </main>
  )
}
