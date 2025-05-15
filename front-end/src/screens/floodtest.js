import { FloodPlayer } from "@engine/floodplayer.js";
import { Vector } from "@utils/vector.js";
import styles from "@screens/styles/game.module.css";

export default function floodTestScreen() {
  setTimeout(() => {
    const canvas = document.getElementById("game");
    if (!canvas) return; // Protección en caso de que el canvas no exista

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    const flood = new FloodPlayer({
      position: new Vector(200, 200),
      width: 50,
      height: 50,
      color: "purple"
    });

    const keys = {};
    window.addEventListener("keydown", (e) => (keys[e.key.toLowerCase()] = true));
    window.addEventListener("keyup", (e) => (keys[e.key.toLowerCase()] = false));

    function loop() {
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

      flood.draw(ctx);

      requestAnimationFrame(loop);
    }

    loop();
  }, 0);

  return `
    <main class="${styles.container}">
      <canvas id="game"></canvas>
    </main>
  `;
}
