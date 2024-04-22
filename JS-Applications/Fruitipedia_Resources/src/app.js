import { showCatalog } from "../views/catalog.js";
import { showHome } from "../views/home.js";
import { showLogin } from "../views/login.js";
import { page } from "./lib.js";

page('/', showHome);
page('/catalog', showCatalog);
page('/login', showLogin);

page.start();