import { useState } from "react"
import logo from "../imgs/logo.png"
import menu from "../imgs/menubtn.png"

export default function Navbar(){
    const[view, setview] = useState("hide")

    const showMenu = ()=>{
        if(view === "hide"){
            setview("show")
        } else setview("hide")
    }

    return(
        <nav>
            <div className={`cont-nav ${view}`} >
                <img src={logo} alt="" />
                <ul>
                    <li onClick={showMenu}>Conocé las sedes</li>
                    <li onClick={showMenu}>Beneficios</li>
                    <li className="btn-asociate" onClick={showMenu}>Asociate</li>
                </ul>
                <img className="menubtn" src={menu} onClick={showMenu}  />
            </div>
        </nav>
    )
}