import "./scss/main.scss";
import router from "./router";

window.addEventListener("load", () => {
    if (!window.location.hash) {
        window.location.hash = "#/";
    } else {
        router(window.location.hash);
    }
});

window.addEventListener("hashchange", (e) => {
    e.preventDefault();
    const currentHash = window.location.hash;
    if (currentHash === "#" || currentHash === "") {
        window.location.hash = "#/";
    }

    router(window.location.hash);
});