import ele1 from "../imgs/cercatuyo.png"
import ele2 from "../imgs/coworking.png"
import ele3 from "../imgs/tucarnetdigital.png"
import ele4 from "../imgs/ondeman.png"
import ele5 from "../imgs/nutricion.png"
import ele6 from "../imgs/beneficiosesclusivos.png"


export default function Membresia(){

    return(
        <div className="sect-membresia">
            <div className="mem-prin">
                <h1>TU MEMBRESIA</h1>
                <h2>A OTRO NIVEL</h2>
                <p>Todo lo que necesitas para acceder a un mundo de deporte,salud y bienestar
                    con +300 centros deportivos en todo el pais.
                </p>
                <button>Asociate</button>
            </div>
            <div className="mem-secun">
                <div className="mem-element">
                    <img src={ele1} alt="" />
                    <p>Encontra tu espacio mas cercano para mantenerte activo y saludable</p>
                </div>
                <div className="mem-element">
                    <img src={ele2} alt="" />
                    <p>WorkClub, un nuevo concepto que combina parte de tus actividades diarias en un mismo lugar.</p>
                </div>
                <div className="mem-element">
                    <img src={ele3} alt="" />
                    <p>Descargate la APP y lleva con vos tu credencial de acceso y descuentos.</p>
                </div>
                <div className="mem-element">
                    <img src={ele4} alt="" />
                    <p>La plataforma digital que revolucionara a tu entrenamiento. Clases en vivo, grabadas, rutinas personalizadas y mucho mas.</p>
                </div>
                <div className="mem-element">
                    <img src={ele5} alt="" />
                    <p>Registrate en SportClub Nutricion y complementa tu entrenamiento con una buena alimentacion. Un staff de nutricionistas a disposicion para ayudarte a alcanzar tu objetivo.</p>
                </div>
                <div className="mem-element">
                    <img src={ele6} alt="" />
                    <p>Encontra todos los descuentos que estas buscando en +5000 comercios que apoyan el deporte. Hasta 50% de decuento en locales adheridos.</p>
                </div>
            </div>
        </div>
    )
}