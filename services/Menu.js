import API from "./API.js";


export default async function LoadData() {
  app.store.menu =  await API.fetchMenu();
}