import { navigate } from "@utils/router.js";
import styles from "./styles/main.module.css";

export default function () {
  const section = document.createElement("section");
  section.className = styles.screen;

  const title = document.createElement("h2");
  title.innerText = "Choose Your Side";
  title.style.marginBottom = "40px";
  section.appendChild(title);

  const floodBtn = document.createElement("button");
  floodBtn.innerText = "🧬 Play as Flood";
  floodBtn.onclick = () => console.log("Flood selected");
  section.appendChild(floodBtn);

  const humanBtn = document.createElement("button");
  humanBtn.innerText = "🚀 Play as Human";
  humanBtn.onclick = () => console.log("Human selected");
  section.appendChild(humanBtn);

  const statsBtn = document.createElement("button");
  statsBtn.innerText = "📊 Stats";
  statsBtn.onclick = () => console.log("Navigate to stats");
  section.appendChild(statsBtn);

  const settingsBtn = document.createElement("button");
  settingsBtn.innerText = "⚙️ Settings";
  settingsBtn.onclick = () => console.log("Navigate to settings");
  section.appendChild(settingsBtn);

  const backBtn = document.createElement("button");
  backBtn.innerText = "← Back to Menu";
  backBtn.onclick = () => navigate("menu");
  section.appendChild(backBtn);

  return section;
}
