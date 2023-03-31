import crecemos2 from "../imgs/crecemos2.png"
import crecemos1 from "../imgs/crecemos1.png"
import crecemos3 from "../imgs/crecemos3.jpg"


export default function Crecemos(){


    return(
        <div className="sect-crecemos">
            <h1>CRECEMOS JUNTOS <br />¡SUMATE!</h1>
            <div className="cont-crecemos">
                <div className="sing-crecemos">
                    <img src={crecemos2} alt="" />
                    <h2>SUMA TU</h2>
                    <h3>EMPRESA</h3>
                    <p>Ofrece a tus colaboradores un plan de bienestar integral y se parte de la comunidad que busca mejorar su estilo de vida.</p>
                    <button>Conectarse</button>
                </div>
                <div className="sing-crecemos">
                    <img src={crecemos1} alt="" />
                    <h2>SUMA TU</h2>
                    <h3>COMERCIO</h3>
                    <p>Unite a nuestra red de beneficios y forma parte de los comercios que apoyan el deporte.</p>
                    <button>Ver mas</button>
                </div>
                <div className="sing-crecemos">
                    <img src={crecemos3} alt="" />
                    <h2>SUMA TU</h2>
                    <h3>CENTRO DEPORTIVO</h3>
                    <p>Inegrate a la plataforma digital que reune entidades del deporte interesados en comercializar sus servicios</p>
                    <button>Ver mas</button>
                </div>
            </div>
        </div>
    )
}