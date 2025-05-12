import { Player } from "../core/engine/objectplayer.js";
import { ObjectStructure } from "../core/engine/objectstructure.js";

export default function testScene() {
  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 600;
  canvas.id = "game";
  document.getElementById("app").innerHTML = ""; // Limpiar contenido previo
  document.getElementById("app").appendChild(canvas);

  const ctx = canvas.getContext("2d");

  const player = new Player({ x: 100, y: 100 }, 50, 50);
  const wall = new ObjectStructure({
    position: { x: 300, y: 100 },
    width: 100,
    height: 100
  });

  const keys = {};
  window.addEventListener("keydown", (e) => keys[e.key] = true);
  window.addEventListener("keyup", (e) => keys[e.key] = false);

  function loop() {
    if (keys["w"]) player.move("up");
    if (keys["s"]) player.move("down");
    if (keys["a"]) player.move("left");
    if (keys["d"]) player.move("right");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Visual feedback si colisiona
    if (player.hitbox.collidesWith(wall.hitbox)) {
      ctx.fillStyle = "red";
    } else {
      ctx.fillStyle = "green";
    }

    wall.draw(ctx);
    player.draw(ctx);

    requestAnimationFrame(loop);
  }

  loop();
}
