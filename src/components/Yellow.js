import celus from "../imgs/celus.png"
import imggoogle from "../imgs/googleplay.png"
import appstore from "../imgs/AppStore.png"
import carnet from "../imgs/carnet.png"
import ubicacion from "../imgs/ubicacion.png"
import beneficios from "../imgs/beneficios.png"
import codigo from "../imgs/codigoqr.png"

export default function Yellow(){


    return(
        <section className="sec-yellow">
            <div className="cont-celus">
                <img src={celus} alt="" />
                <div className="celusinf">
                    <img src={imggoogle} alt="" />
                    <img src={appstore} alt="" />
                </div>
            </div>
            <div className="cont-textyellow">
                <h3>CARNET DIGITAL</h3>
                <div className="text-all">
                    <div className="text-sing">
                        <img src={carnet}/>
                        <div className="sing-son">
                            <h1>Carnet Digital</h1>
                            <p>Tu carnet ahora en tu celular, siempre con vos.</p>
                        </div>
                    </div>
                    <div className="text-sing">
                        <img src={ubicacion}/>
                        <div className="sing-son">
                            <h1>Encontra tu sede mas cercana</h1>
                            <p>Estes donde estes vas a encontrar el lugar mas cercano para entrenar.</p>
                        </div>
                    </div>
                    <div className="text-sing">
                        <img src={beneficios}/>
                        <div className="sing-son">
                            <h1>Beneficios y Descuentos</h1>
                            <p>Mostrar tu credencial y accede a miles de descuentos en comerciosadheridos.</p>
                        </div>
                    </div>
                    <div className="text-sing">
                        <img src={codigo}/>
                        <div className="sing-son">
                            <h1>Accede facil y rapido</h1>
                            <p>Con la aplicacion mobile vas a poder acceder a todas las sedes.</p>
                        </div>
                    </div>
                </div>
                <button>Descargar mi carnet</button>
            </div>
        </section>
    )
}