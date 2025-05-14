import { navigate } from "@utils/router.js";
import styles from "./styles/main.module.css";

export default function () {
  document.addEventListener("DOMContentLoaded", () => {
    // Añadir event listeners a los botones una vez que el DOM esté cargado
    const floodBtn = document.getElementById("flood-btn");
    if (floodBtn) floodBtn.addEventListener("click", () => console.log("Flood selected"));
    
    const humanBtn = document.getElementById("human-btn");
    if (humanBtn) humanBtn.addEventListener("click", () => console.log("Human selected"));
    
    const statsBtn = document.getElementById("stats-btn");
    if (statsBtn) statsBtn.addEventListener("click", () => console.log("Navigate to stats"));
    
    const settingsBtn = document.getElementById("settings-btn");
    if (settingsBtn) settingsBtn.addEventListener("click", () => console.log("Navigate to settings"));
    
    const backBtn = document.getElementById("back-btn");
    if (backBtn) backBtn.addEventListener("click", () => navigate("menu"));
  });

  // Retornar HTML como string en lugar de un elemento DOM
  return `
    <section class="${styles.screen}" style="text-align:center;">
      <h2 style="margin-bottom: 40px;">Choose Your Side</h2>
      
      <button id="flood-btn">🧬 Play as Flood</button>
      <button id="human-btn">🚀 Play as Human</button>
      <button id="stats-btn">📊 Stats</button>
      <button id="settings-btn">⚙️ Settings</button>
      <button id="back-btn">← Back to Menu</button>
    </section>
  `;
}
