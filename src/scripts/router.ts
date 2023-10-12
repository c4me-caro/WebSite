const navigation = require("../views/navigation.html");
const error404 = require("../views/error404.html");
const home = require("../views/home.html");

var app = document.getElementById("app");

const routes = [
  {
    path: "#/",
    view: home,
  },
];

function createObject(view: {path: string, view: any}): HTMLElement {
  const object = document.createElement("div");
  object.innerHTML = view ? navigation.default + view.view.default : error404.default;
  return object;
}

export default (route: string) => {
  const routeData = routes.find((item) => item.path === route);
  app.innerHTML = "";
  app.appendChild(createObject(routeData));
}