import { logout } from "../data/user.js";
import { showCatalog } from "../views/catalog.js";
import { showHome } from "../views/home.js";
import { showLogin } from "../views/login.js";
import { showRegister } from "../views/regiester.js";
import { page } from "./lib.js";
import { updateNav } from "./util.js";

updateNav();
page('/', showHome);
page('/catalog', showCatalog);
page('/login', showLogin);
page('/register', showRegister);

document.getElementById('logoutBtn').addEventListener('click', async () => {
    logout();
    updateNav();
    page.redirect('/');
})

page.start();