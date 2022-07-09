import React from "react";
import "../components/styles/Testimonio.css";

function Testimonio(props) {
    return (
        <div className="contenedor-testimonio">
            <img 
                className="imagen-testimonio"
                src={require(`../components/images/testimonio-${props.imagen}.png`)}
                alt="Image of the Ciata"  
            />
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"><strong>{props.nombre}</strong>, {props.pais}</p>
                <p className="cargo-testimonio">{props.cargo} em <strong>{props.empresa}</strong></p>
                <p className="texto-testimonio">{props.testimonio}</p>
            </div>
        </div>
    );
}

export default Testimonio;

