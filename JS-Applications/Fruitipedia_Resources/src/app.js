import { logout } from "../data/user.js";
import { showCatalog } from "../views/catalog.js";
import { showCreate } from "../views/create.js";
import { showDetails } from "../views/details.js";
import { showEdit } from "../views/edit.js";
import { showHome } from "../views/home.js";
import { showLogin } from "../views/login.js";
import { showRegister } from "../views/regiester.js";
import { showSearch } from "../views/search.js";
import { page } from "./lib.js";
import { updateNav } from "./util.js";

updateNav();
page('/', showHome);
page('/catalog', showCatalog);
page('/login', showLogin);
page('/register', showRegister);
page('/catalog/:id', showDetails);
page('/create', showCreate);
page('/search', showSearch);
page('/edit/:id', showEdit)

document.getElementById('logoutBtn').addEventListener('click', async () => {
    logout();
    updateNav();
    page.redirect('/');
})

page.start();