import Store from "./services/Store.js";
import API from "./services/API.js";
import Router from "./services/Router.js";
import LoadData from "./services/Menu.js";


window.app = {};
app.store = Store;
app.router = Router;

//Link my web Component
import { MenuPage } from "./components/Menupage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { OrderPage } from "./components/OrderPage.js";



window.addEventListener("DOMContentLoaded", () => {
  app.router.init();
  LoadData();
})