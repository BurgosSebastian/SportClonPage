import act1 from "../imgs/musculacion.png"
import act2 from "../imgs/fitnes.png"
import act3 from "../imgs/natacion.png"
import act4 from "../imgs/mente.png"
import act5 from "../imgs/mayores.png"
import act6 from "../imgs/airelibre.png"


export default function Actividades(){

    return(
        <div className="sect-membresia">
            <div className="mem-prin">
                <h1>TODAS LAS</h1>
                <h2>ACTIVIDADES</h2>
                <h1>QUE BUSCAS</h1>
                <p>Combinar distintas actividades es fundamental para mantener 
                    la motivación y disfrutar al máximo tu rutina deportiva.
                </p>
                <button>Asociate</button>
            </div>
            <div className="mem-secun">
                <div className="mem-element">
                    <img src={act1} alt="" />
                    <p>Trabajá la fuerza y resistencia, desarrollando todos los grupos musculares. Prevení lesiones y mejorá tu calidad de vida. Contamos con +300 gimnasios equipados con la última tecnología.</p>
                </div>
                <div className="mem-element">
                    <img src={act2} alt="" />
                    <p>+100 disciplinas orientadas al acondicionamiento físico. GAP, Localizada, Ritmos, SportCycle, SportFunctional, taller de abdominales y más, te están esperando.</p>
                </div>
                <div className="mem-element">
                    <img src={act3} alt="" />
                    <p>Disfrutá de todos los beneficios de nadar, mejorá tu aparato respiratorio y cardiovascular. +30 piletas cubiertas y al aire libre. </p>
                </div>
                <div className="mem-element">
                    <img src={act4} alt="" />
                    <p>Respirá, relajá tu mente y mejorá tu movilidad articular. Pilates, yoga, stretching y muchas actividades más, orientadas a encontrar tu bienestar integral.</p>
                </div>
                <div className="mem-element">
                    <img src={act5} alt="" />
                    <p>Mantenerte activo es sinónimo de salud, ya no hay excusas. Cientos de actividades para estimular tu cuerpo y ralentizar el paso de la edad.</p>
                </div>
                <div className="mem-element">
                    <img src={act6} alt="" />
                    <p>Entrená al aire libre en clubes y espacios outdoor. Accedé a la grilla completa de actividades</p>
                </div>
            </div>
        </div>
    )
}