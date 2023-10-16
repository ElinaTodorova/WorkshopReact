import "./NavBar.css"
import logo from '../assets/logo.png'

export default function NavBar(){

    return (
        <nav>
            <img src= {logo} alt="logo мечка" />
            <p id="titre">мечка</p>
            <button>Log in</button>
        </nav>
    )
}
