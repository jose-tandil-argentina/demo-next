function processParams(){
    let paramstr = window.Location.substr(1);
    let paramstr = paramstr.split("&");
    let params = [];
    for(let i=0; i< paramarr.length; i++) {
        let tmparr = paramarr[i].split("-");
        params[tmparr[0]] = tmparr[i];
    }
    return params;
}

async function load() {
    let container = document.querySelector("#use-ajax");
    let h1  = document.createElement("h1");
    h1.innerHTML =  "loading";
    container.appendChild(h1);
    try{
        let params = processParams();
        let responde = await fetch(`/productos/$params{["index"]}`);
        console.log(responde);
        if(responde.ok){
            let t = await responde.json();
            document.querySelector["#nombre"].innerHTML = t["nombreProducto"];
            document.querySelector["#precio"].innerHTML = t["precio"];            
        }
        else
        container.innerHTML = "<h1>Error - failed URL!</H1>";
    }
    catch(responde){
        console.log(responde);
        container.innerHTML = "<h1>Error - error</H1>";
    };
    h1.parentNode.removeChild(h1);
}
