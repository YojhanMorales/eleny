// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Empece a conducir por las colinas", time: 5 },
  { text: "Me dijiste que fuera a buscarte", time: 9 },
  { text: "No hay palabras que transmitan lo que senti", time: 12 },
  { text: "Cuando finalmente te tuve en mis brazos", time: 15 },
  { text: "El tiempo suficiente para saberlo", time: 20 },
  { text: "Se cada palabra que vas a decir antes de siquiera pensarlo", time: 30 },
  { text: "Pero, de alguna manera, cada broma que hacess es cada vez mas divertida", time: 36 },
  { text: "Tu risa es un sonido tan perfecto", time: 42 },
  { text: "Estas mariposas", time: 53 },
  { text: "Vivieron un millon de vidas", time: 56 },
  { text: "para decirte", time: 59 },
  { text: "Te juro que te conozco desde hace mas tiempo que...", time: 65 },
  { text: "un para siempre y un dia", time: 71 },
  { text: "un dia", time: 80 },
  { text: "por los siglos de los siglos y un dia", time: 83 },
  { text: "un dia", time: 92 },
  { text: "un para siempre y un dia", time: 94 },
  { text: "apuesto que ya sabiamos nuestros nombres antes de conocernos", time: 101 },
  { text: "Apuesto que navegamos por la via lactea y caminamos juntos osbre el sol", time: 108 },
  { text: "¿Como podria olvidar esos ojos?", time: 113 },
  { text: "me tomaron por sorpresa, pero de repente extrañe tu cara", time: 122 },
  { text: "conoci esa sonrisa a kilometros de distancia", time: 126 },
  { text: "supe que ya te he amado", time: 131 },
  { text: "un para siempre y un dia", time: 134 },
  { text: "un dia", time: 144 },
  { text: "en toda mi vida", time: 146 },
  { text: "he esperado cada vez", time: 149 },
  { text: "para oirte decir soy tuya por siempre y un dia", time: 151 },
  { text: "no creo en el destino", time: 171 },
  { text: "pero tal vez tenga que decir que tus melodias me estan cambiando", time: 177 },
  { text: "soy tuyo por siempre y un dia", time: 190 },
  { text: "un para siempre y un dia", time: 204 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);