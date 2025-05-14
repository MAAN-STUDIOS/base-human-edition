import { navigate } from "@utils/router.js";
import styles from "./styles/main.module.css";

export default function () {
  document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-game-btn");
    if (startButton) {
      startButton.addEventListener("click", () => navigate("play"));
    }
  });
  return `
    <section class="${styles.screen}" style="text-align:center;">
      <h1>Cosmonavt</h1>
      <button id="start-game-btn">Start Game</button>
    </section>
  `;
}

//TODO: Añadir boton de creditos, cuando el juego este terminado
