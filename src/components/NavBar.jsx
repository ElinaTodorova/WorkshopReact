import "./NavBar.css"
import logo from '../assets/logo.png'
import maintenance from '../assets/maintenance-icon.svg'



export default function NavBar(){

 function handleClickLogin () {
 alert ("Under maintenance, please comme back later.")
 }
    return (
        <nav>
            <img src= {logo} alt="logo мечка" />
            <p id="titre">мечка</p>
            <button onClick={handleClickLogin}>Log In</button>
        </nav>
    )
}
