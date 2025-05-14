import { navigate } from "@utils/router.js";
import styles from "./styles/main.module.css";

export default function () {
  setTimeout(() => {
    const startButton = document.getElementById("start-game-btn");
    if (startButton) {
      startButton.addEventListener("click", () => navigate("play"));
    }
  }, 0);

  return `
    <section class="${styles.screen}" style="text-align:center;">
      <h1>Cosmonavt</h1>
      <button id="start-game-btn">Start Game</button>
    </section>
  `;
}
