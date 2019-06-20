const contexto = document.getElementById("lienzoJuego");
const ctx = contexto.getContext("2d");
const WIDTH = 300;
const HEIGHT = 530;
let CANVAS_WIDTH = 300;
let CANVAS_HEIGHT = 530;
contexto.width = WIDTH;
contexto.height = HEIGHT;

let score = 0;
const FPS = 60;
const gravedad = 1.5; // gravedad que afectará al personaje

const personaje = {
    x: 100,
    y: 150,
    w: 50,
    h: 50
};

// Tuberias en el mapa
let tuberias = [];

tuberias[0] = {
    x: contexto.width,
    y: 0
};

// Variables Audios

var punto = new Audio();
punto.src = "audios/punto.mp3";

// Variable Imagenes

const bird = new Image();
bird.src = "imagenes/bird.png";

const background = new Image();
background.src = "imagenes/background.png";

const tuberiaNorte = new Image();
tuberiaNorte.src = "imagenes/tuberiaNorte.png";

const tuberiaSur = new Image();
tuberiaSur.src = "imagenes/tuberiaSur.png";

const suelo = new Image();
suelo.src = "imagenes/suelo.png";

// Creamos el bucle
const loop = () => {
    ctx.clearRect(0, 0, 300, 530);

    // --- Fondo ---//
    ctx.drawImage(background, 0, 0);
    ctx.drawImage(suelo, 0, contexto.height - suelo.height);

    // --- Personaje --- //
    ctx.drawImage(bird, personaje.x, personaje.y);

    // --- Tuberias --- //

    tuberias.forEach(tuberia => {
        const constante = tuberiaNorte.height + 80;
        ctx.drawImage(tuberiaNorte, tuberia.x, tuberia.y);
        ctx.drawImage(tuberiaSur, tuberia.x, tuberia.y + constante);
        tuberia.x--; // Permite el movimiento horizontal de las tuberias.

        if (tuberia.y + tuberiaNorte.height > 80) {
            tuberia.y = 0;
        }

        if (tuberia.x === 150) {
            // Cada vez que tuberia.x sea igual a 150 se generará una nueva tuberia.
            tuberias.push({
                x: contexto.width,
                y: Math.floor(Math.random() * tuberiaNorte.height) - tuberiaNorte.height // floor redondea.
            });
        }

        // Colisiones
        if (
            (personaje.x + bird.width >= tuberia.x &&
                personaje.x <= tuberia.x + tuberiaNorte.width &&
                (personaje.y <= tuberia.y + tuberiaNorte.height ||
                    personaje.y + bird.height >= tuberia.y + constante)) ||
            personaje.y + bird.height >= contexto.heigh - suelo.height
        ) {
            location.reload(); // toda la pagina se recargará.
        }

        if (tuberia.x == personaje.x) {
            // Suma el score
            score++;
            punto.play(); // Reproduce el audio.
        }
    });

    personaje.y += gravedad; // Ará que el personaje caiga.

    // SCORE //
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.font = "25px Arial";
    ctx.fillText(
        "Score: " + score,
        10, // posición x
        contexto.height - 40 // posición Y
    );
};

setInterval(loop, 1000 / FPS); // la función loop se ejecutara 1000/FPS milisegundos

// Mediante esta función el personaje subierá 25px
const presionar = () => {
    personaje.y -= 25;
};

const resize = () => {
    CANVAS_WIDTH = window.innerHeight;
    CANVAS_HEIGHT = window.innerWidth;

    contexto.width = WIDTH;
    contexto.height = HEIGHT;

    contexto.style.height = `${CANVAS_HEIGHT}px`;
};
resize();
// Cada vez que se presione cualquier tecla el personaje subirá
window.addEventListener("resize", resize);
window.addEventListener("keydown", presionar);