export default function (router: any) {
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

  document.getElementById("app").addEventListener("click", (events) => {
    const hamburguer = document.getElementById("hamburguer");
    const i = hamburguer.children[0];
    const target = document.getElementById("nav-menu");
    if (events.target == i) {
      target.classList.toggle("active");
    } else if (target.classList.contains("active")) {
      target.classList.remove("active");
    }
  });
}