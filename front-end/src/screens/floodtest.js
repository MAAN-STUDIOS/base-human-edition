// import { FloodPlayer } from "@engine/floodplayer.js";
// import { Vector } from "@utils/vector.js";
// import styles from "@screens/styles/game.module.css";

// export default function floodTestScreen() {
//   setTimeout(() => {
//     const canvas = document.getElementById("game");
//     if (!canvas) return; // Protección en caso de que el canvas no exista

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     const ctx = canvas.getContext("2d");

//     const flood = new FloodPlayer({
//       position: new Vector(200, 200),
//       width: 50,
//       height: 50,
//       color: "purple"
//     });

//     const keys = {};
//     window.addEventListener("keydown", (e) => (keys[e.key.toLowerCase()] = true));
//     window.addEventListener("keyup", (e) => (keys[e.key.toLowerCase()] = false));

//     function loop() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Movement
//       if (keys["w"]) flood.position.y -= 2;
//       if (keys["s"]) flood.position.y += 2;
//       if (keys["a"]) flood.position.x -= 2;
//       if (keys["d"]) flood.position.x += 2;

//       // Abilities
//       if (keys["e"]) flood.evolve();
//       if (keys["c"]) flood.createClone();
//       if (keys["f"]) flood.attack("melee", { position: new Vector(250, 250) });

//       flood.draw(ctx);

//       requestAnimationFrame(loop);
//     }

//     loop();
//   }, 0);

//   return `
//     <main class="${styles.container}">
//       <canvas id="game"></canvas>
//     </main>
//   `;
// }
import { FloodPlayer } from "@engine/floodplayer.js";
import { Vector } from "@utils/vector.js";
import styles from "@screens/styles/game.module.css";

export default function () {
  setTimeout(() => {
    const canvas = document.getElementById("game");
    if (!canvas) {
      console.error("Canvas not found!");
      return;
    }
    console.log("Canvas found:", canvas);

    // Ajustar tamaño del canvas al tamaño de la ventana
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log("Canvas resized to:", canvas.width, canvas.height);
    }

    // Inicializar tamaño y agregar listener para resize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Could not get canvas context!");
      return;
    }
    console.log("Canvas context obtained");

    // Crear el jugador en el centro de la pantalla
    const flood = new FloodPlayer({
      position: new Vector(
        canvas.width / 2 - 25,  // Centrar horizontalmente (restamos la mitad del ancho)
        canvas.height / 2 - 25  // Centrar verticalmente (restamos la mitad del alto)
      ),
      width: 50,
      height: 50,
      color: "purple"
    });
    console.log("Flood player created at:", flood.position);

    const keys = {};
    window.addEventListener("keydown", (e) => (keys[e.key.toLowerCase()] = true));
    window.addEventListener("keyup", (e) => (keys[e.key.toLowerCase()] = false));

    function loop() {
      // Limpiar el canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Movement
      if (keys["w"]) flood.position.y -= 2;
      if (keys["s"]) flood.position.y += 2;
      if (keys["a"]) flood.position.x -= 2;
      if (keys["d"]) flood.position.x += 2;

      // Abilities
      if (keys["e"]) flood.evolve();
      if (keys["c"]) flood.createClone();
      if (keys["f"]) flood.attack("melee", { position: new Vector(250, 250) });

      // Dibujar el jugador
      flood.draw(ctx);

      // Dibujar texto de estado
      ctx.font = "16px monospace";
      ctx.fillStyle = "white";
      ctx.fillText(`Biomass: ${flood.biomass}`, 20, 30);
      ctx.fillText(`Evo: ${flood.evolution}`, 20, 50);

      requestAnimationFrame(loop);
    }

    // Iniciar el loop
    loop();
  }, 100);

  return `
    <main class="${styles.container}">
      <canvas id="game"></canvas>
    </main>
  `;
}
