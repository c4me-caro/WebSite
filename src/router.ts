const navigation = require("./views/navigation.html");
const error404 = require("./views/error404.html");
const home = require("./views/home.html");

var app = document.getElementById("app");
app.innerHTML = "";

const routes = [
    {
        path: "#/",
        view: home,
    },
];

export default (route: string) => {
    const routeData = routes.find((item) => item.path === route);
    app.innerHTML  = routeData ? navigation.default + routeData.view.default : error404.default;
} 