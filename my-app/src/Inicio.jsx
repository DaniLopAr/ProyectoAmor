import { useState, useEffect } from "react";
import './Inicio.css'
import ConWalle from "./assets/conwalle.jpeg"
import Ellayarcoiris from "./assets/ellayarcoiris.jpeg"
import Ellalinda from "./assets/Ellalinda.jpeg"
import { FaSpotify } from "react-icons/fa";



export function MensajeInicial() {
    return (
        <div>
            <h1 className="textoMovible">Bienvenida a nuestra aplicacion❤️</h1>
            <p className="textoMovible">Esta aplicación está diseñada para mostrarte cuánto te amo y lo especial que eres para mí.</p>
            <p className="textoMovible">Ademas, la ire actualizando con el paso de los dias</p>

        </div>
    )
}




export function CuteButtons() {

    return (
        <div class="card">
            <p><span>Mujer Hermosa</span></p>
            <p><span><img src={ConWalle} alt="Nosotros" /></span></p>
            <p><span>Me encantas</span></p>
            <p><span><img src={Ellalinda} alt="Nosotros" /></span></p>
            <p><span>Tus ojitos me encantan</span></p>
        </div>
    )
}

export function DiasJuntos() {
    const [dias, setDias] = useState(0);

    useEffect(() => {
        const fechaInicio = new Date("2026-02-05"); // Cambia esta fecha por la fecha de inicio de tu relación
        const fechaActual = new Date();
        const diferencia = fechaActual - fechaInicio;
        const diasJuntos = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        setDias(diasJuntos);
    }, []);

    return (
        <div>
            <h2 className="ContadorDias">Días juntos: {dias}</h2>
        </div>
    );
}

export function ShowLetter() {
    const texto = "Eres una mujer increible, aqui estoy para acompañarte y darte apoyo siempre que lo necesites, y quiero que sepas que me encantas, esa carita tuya toda hermosa con esos ojitos y esa sonrisa que me derrite, la verdad es que haria de todo por verte sonreir, por verte feliz, y ya tenemos muchos recuerdos juntos y espero que sigamos creando muchos mas, te amo y quiero hacer de esto como un tipo album de recuerdos o al menos esa es la idea, que tu puedas agregar cositas y yo tambien y que lo vayamos creando juntos, esto es solo el inicio de lo nuestro y espero que te guste montones, lo hago con mucho amor";

    return (

        <p className="carta">
            {texto.split("").map((letra, index) => (
                <span key={index} className="letra">
                    {letra === " " ? "\u00A0" : letra}
                </span>
            ))}
        </p>
    )
}

export function SpotifyFlotante() {
    const [abierto, setAbierto] = useState(false);

    const toggleSpotify = () => {
        setAbierto(!abierto);
    };

    return (
        <>
            <button className="boton-spotify" onClick={toggleSpotify}>
                <FaSpotify />
            </button>

            <div className={`contenedor-spotify ${abierto ? "mostrar" : ""}`}>
                <iframe
                    src="https://open.spotify.com/embed/playlist/3C3lNZYznBnkRwaVY0o1MJ"
                    width="300"
                    height="380"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>
        </>
    );
}

export function Razones() {
    const [razonActual, setRazonActual] = useState("");

    const razones = [
        "Porque tu sonrisa ilumina mis días.",
        "Porque me apoyas incluso cuando yo dudo.",
        "Porque haces que todo sea más bonito.",
        "Porque contigo me siento en casa.",
        "Porque eres increíblemente especial."
    ];

    const mostrarRazon = () => {
        const indice = Math.floor(Math.random() * razones.length);
        setRazonActual(razones[indice]);
    };

    return (
        <div className="contenedor-razones">
            <button className="boton-razon" onClick={mostrarRazon}>
                Dime una razón 💕
            </button>

            {razonActual && (
                <p className="razon-texto">{razonActual}</p>
            )}
        </div>
    );
}

export function CorazonFlotante() {

    return (
        <div className="heart">
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>

            <div className="pixel"></div>
            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel"></div>
            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel"></div>

            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel soft-pink"></div>

            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>

            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>

            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>

            <div className="pixel"></div>
            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel"></div>

            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>

            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>

            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel white"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>

            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>

            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel pink"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
        </div>

    )
}

export function CorazonesFondo({ cantidad = 5 }) {
    const [corazones, setCorazones] = useState([]);

    useEffect(() => {
        const nuevos = Array.from({ length: cantidad }).map(() => ({
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            duration: 5 + Math.random() * 5 + "s",
            scale: 0.5 + Math.random() * 0.7,
            delay: Math.random() * 5 + "s"
        }));
        setCorazones(nuevos);
    }, [cantidad]);

    return (
        <div className="contenedor-corazones-fondo">
            {corazones.map((c, i) => (
                <div
                    key={i}
                    className="corazon-absoluto"
                    style={{
                        left: c.left,
                        top: c.top,
                        animationDuration: c.duration,
                        animationDelay: c.delay,
                        transform: `scale(${c.scale})`
                    }}
                >
                    <CorazonFlotante />
                </div>
            ))}
        </div>
    );
}