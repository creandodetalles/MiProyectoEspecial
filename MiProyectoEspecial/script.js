/* ==========================================
   BOTÓN DE COMENZAR
========================================== */

const btnComenzar = document.getElementById("btnComenzar");

btnComenzar.addEventListener("click", function () {

    document.getElementById("fe").scrollIntoView({
        behavior: "smooth"
    });

    iniciarMusica();

});


/* ==========================================
   CARTA
========================================== */

const btnCarta = document.getElementById("btnCarta");
const carta = document.getElementById("carta");

btnCarta.addEventListener("click", function () {

    carta.classList.toggle("abierta");

    if (carta.classList.contains("abierta")) {

        btnCarta.textContent = "Cerrar";

    } else {

        btnCarta.textContent = "Abrir";

    }

});


/* ==========================================
   SORPRESA ESPECIAL - PASO 15
========================================== */

const cajaSorpresa =
    document.getElementById("cajaSorpresa");

const mensajeSorpresa =
    document.getElementById("mensajeSorpresa");


if (cajaSorpresa) {

    cajaSorpresa.addEventListener(
        "click",
        function () {

            cajaSorpresa.classList.add("abierta");


            setTimeout(function () {

                mensajeSorpresa.classList.add("mostrar");


                mensajeSorpresa.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 650);

        }
    );

}


/* ==========================================
   ANIMACIONES AL HACER SCROLL
========================================== */

const elementosReveal = document.querySelectorAll(".reveal");

const observador = new IntersectionObserver(

    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


elementosReveal.forEach(function (elemento) {

    observador.observe(elemento);

});


/* ==========================================
   MÚSICA - PASO 13
========================================== */

const musica = document.getElementById("musica");


function iniciarMusica() {

    if (!musica) {
        return;
    }


    /* Volumen suave */

    musica.volume = 0.25;


    /* Comenzar reproducción */

    musica.play()
        .then(function () {

            console.log("La música comenzó correctamente. 🎵");

        })
        .catch(function () {

            console.log(
                "El navegador bloqueó la reproducción automática."
            );

        });

}
/* ==========================================
   CORAZONES Y PARTÍCULAS - PASO 11
========================================== */

const contenedorParticulas = document.getElementById("particulas");

const simbolos = [
    "💗",
    "🩷",
    "💫",
    "✧",
    "⋆",
    "✨"
];


function crearParticula() {

    if (!contenedorParticulas) {
        return;
    }

    const particula = document.createElement("span");

    particula.classList.add("particula");

    particula.textContent =
        simbolos[Math.floor(Math.random() * simbolos.length)];

    particula.style.left =
        Math.random() * 100 + "%";

    particula.style.fontSize =
        (12 + Math.random() * 18) + "px";

    particula.style.animationDuration =
        (8 + Math.random() * 8) + "s";

    particula.style.animationDelay =
        Math.random() * 2 + "s";

    contenedorParticulas.appendChild(particula);


    setTimeout(function () {

        particula.remove();

    }, 18000);

}


/* Crear partículas cada cierto tiempo */

setInterval(crearParticula, 900);

/* ==========================================
   MÁQUINA DE ESCRIBIR - PASO 12
========================================== */

const textoEscritura =
    document.getElementById("textoEscritura");


const fraseMaquina =
    "Hay personas que llegan a nuestra vida y simplemente dejan una bonita huella.";


let posicionTexto = 0;


function escribirTexto() {

    if (!textoEscritura) {
        return;
    }


    if (posicionTexto < fraseMaquina.length) {

        textoEscritura.textContent +=
            fraseMaquina.charAt(posicionTexto);

        posicionTexto++;

        setTimeout(escribirTexto, 55);

    }

}


/* Iniciar cuando la página esté lista */

window.addEventListener("load", function () {

    setTimeout(escribirTexto, 1200);

});
/* ==========================================
   EFECTOS DE CLIC - PASO 14
========================================== */

const simbolosClic = [
    "♡",
    "✦",
    "✧",
    "✨"
];


document.addEventListener("click", function (evento) {

    const efecto = document.createElement("span");

    efecto.classList.add("efecto-clic");


    /* Elegir un símbolo al azar */

    efecto.textContent =
        simbolosClic[
            Math.floor(
                Math.random() * simbolosClic.length
            )
        ];


    /* Colocar el efecto donde se hizo clic */

    efecto.style.left =
        evento.clientX + "px";

    efecto.style.top =
        evento.clientY + "px";


    document.body.appendChild(efecto);


    /* Eliminar después de la animación */

    setTimeout(function () {

        efecto.remove();

    }, 900);

});