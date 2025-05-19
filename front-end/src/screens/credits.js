import { navigate } from "@utils/router.js";
import style from "@screens/styles/credits.module.css";

export default function () {
    const listener = () => {
        const btn = document.getElementById("menu-btn");

        btn?.addEventListener("click", () => navigate("menu"))
    }

    document.addEventListener("screen-credits-loaded", listener);

    return (`
    <main class="${style.main}">
        <h1>Cosmonavt Developer Team</h1>
        <div class="${style.container}">
            <div class="${style.containerTeam}">
                <h2>Humans Team</h2>
                <ul>
                    <li>#Name</li>
                    <li>#Name</li>
                    <li>#Name</li>
                </ul>
            </div>   
            <div class="${style.containerTeam}">
                <h2>Flood Team</h2>
                <ul>
                    <li>#Name</li>
                    <li>#Name</li>
                    <li>#Name</li>
                </ul>
            </div>    
        </div>
        <button id="menu-btn">Back to Menu</button>
    </main>
    `);
}