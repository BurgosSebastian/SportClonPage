import logosport from "../imgs/logo2.png"
import datafiscal from "../imgs/datafiscal.jpg"

export default function Footer(){



    return(
        <div className="section-footer">
            <div className="foot-prin">
                <img src={logosport} alt="" />
                <div className="list1">
                    <h1>SOCIOS</h1>
                    <ul>
                        <li>Atencion al Socio</li>
                        <li>Solicitud de Baja</li>
                        <li>Tramite de Arrepentimiento</li>
                    </ul>
                </div>
                <div className="list1">
                    <h1>LEGAL</h1>
                    <ul>
                        <li>Eventos y Sorteos</li>
                        <li>Terminos y condiciones</li>
                        <li>Politica de Privacidad</li>
                        <li>Defensa del Consumidor</li>
                    </ul>
                </div>
                <div></div>
                <img src={datafiscal} alt="" />
            </div>
            <div className="foot-sec">
                <p>En SportClub cuidamos tu salud, por eso te recordamos que tu apto medico es indispensable al momento de iniciar una actividad fisica --leyes n°139 y 12329. <br />Copyright -c- 2022 SPORTCLUB. Todos los derechos reservados</p>
            </div>
        </div>
    )
}