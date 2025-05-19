import { navigate } from "@utils/router.js";
import styles from "@screens/styles/404.module.css"


export default function () {
    const listener  = () => {
        const btn = document.getElementById("menu-btn");

        btn.addEventListener("click", () => navigate('menu'));
    }

    document.addEventListener("page-not-found", listener);
    document.addEventListener("screen-404-loaded", listener);
    return `
    <main class="${styles.container}">
        <h1>404</h1>
        <h2>Page Not Found.</h2>
        <p>The page you're looking for doesn't seem to exist.</p>
        <br/>
        <button id="menu-btn" type="button" class="btn btn-primary">
            Back to Main Page
        </button>
    </main>
    `;
}