import topimg from "../imgs/fondo.png"

export default function Planes(){

    return(
        <>
        <div className="plntop">
            <img src={topimg} alt="" />
        </div>
        <div className="sect-planes">
            <div className="selectplan">
                <h1>ELEGI TU PLAN</h1>
                <p>Todo lo que buscas en un solo lugar.
                    Estas a un click de distancia de asociarte a la comunidad deportiva mas grande del pais.
                </p>
                <div className="cont-btns">
                    <button className="btn-special">Mensual</button>
                    <button>Anual</button>
                </div>
            </div>
            <div className="plan-description">
                <h1>Mensual</h1>
                <h2>PLAN TOTAL</h2>
                <h3>$ 12.000 /mes</h3>
                <h4>¡Accede a +300 sedes!</h4>
                <button>ASOCIATE</button>
                <ul>
                    <li>Acceso a +300 sedes</li>
                    <li>Actividades Indoor/Outdoor</li>
                    <li>Clases en vivo y On Deman</li>
                    <li>App Nutricion</li>
                    <li>Tuluka</li>
                </ul>
                <h4>Ver Sedes Total</h4>
                <p>*No incluye las sedes Al Rio,Ushuaia y Mujer Pilar</p>
            </div>
            <div className="plan-description">
                <h1>Mensual</h1>
                <h2>PLAN PLUS</h2>
                <h3>$ 9.500 /mes</h3>
                <h4>¡Accede a +250 sedes!</h4>
                <button className="plusbtn">ASOCIATE</button>
                <ul>
                    <li>Acceso a +250 sedes</li>
                    <li>Actividades Indoor/Outdoor</li>
                    <li>Clases en vivo y On Deman</li>
                    <li>App Nutricion</li>
                    <li>Tuluka</li>
                </ul>
                <h4 className="plustitle">Ver Sedes Plus</h4>
                <p>*No incluye las sedes Al Rio,Ushuaia y Mujer Pilar</p>
            </div>
        </div></>
    )
}