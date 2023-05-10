const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach( (link) => {
      link.addEventListener("click", event => {
        event.preventDefault();
        const url = event.target.getAttribute("href");
        Router.go(url);
      })
    })
    window.addEventListener("popstate", (event)=> {
      Router.go(event.state.route, false);
    })

    Router.go(location.pathname);
  },

  go: (route, addToHistory=true) => {
    console.log("Going to " + route);

    if(addToHistory){
      history.pushState({route}, "", route);
    }

    let pageElement = null ;
    switch(route){
      case "/":
        pageElement = document.createElement("menu-page");
        pageElement.textContent = "Menu";
        break;
      case "/order":
        pageElement = document.createElement("order-page");
        pageElement.textContent = "Your order";
        break;
      default: 
        if(route.startsWith("/product-")){
          pageElement = document.createElement("details-page");
          pageElement.textContent = "Product";
          product.dataset.productId = route.substring(route.lastIndexOf("-") + 1);
        }


      
    }

    if (pageElement){
    let cache =  document.querySelector("main");
    cache.innerHTML = "";
     cache.appendChild(pageElement);
   
    }
    
    
  }

}

export default Router;