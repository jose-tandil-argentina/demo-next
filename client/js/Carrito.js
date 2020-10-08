let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let btnTotal = document.querySelector("#btnTotal");
btnTotal.addEventListener("click", sumar);



let compras = [];

//#####################

async function agregar() {
    console.log("Funcion Agregar");
    let producto = document.querySelector('#producto').value;
    let precio = parseInt(document.querySelector('#precio').value);
    console.log(preducto,precio);
    let renglon = {
        "productoProducto": producto,
        "precio": precio
    }
    
        let respuesta = await fetch("http://localhost:3000/productos",{
            mothod: "POST",
            headers: {
            "Content-Type": "application/json"
            },
        body: JSON.stringify(renglon)
    });

    if (respuesta.ok) {
        compras.push(renglon);
        mostrarTablaCompras();
    }else{
        console.log("hubo un error");
    }
}


function sumar() {
    console.log("Funcion Sumar");
    let total = 0;
    for (let i = 0; i < compras.length; i++) {
        total += compras[i].precio;
    }
    let max = compras[0].precio;
    for (let r of compras) {
        if (max < r.precio)
            max = r.precio;
    }
    document.querySelector("#total").innerHTML =
        "<p>Total: $" + total + "</p>" +
        "<p>Maximo: $" + max + "</p>"
}
/*
function mostrarTablaCompras() {
    html = "";
    for (let i = 0; i < compras.length; i++) {
        r = compras[i];
    
    }
    document.querySelector("#tblCompras").innerHTML = html;
    let botonesBorrar = document.querySelectorAll(".btn-delete-producto");
    botonesBorrar.forEach(boton => {
        boton.addEventListener("click", btnAgregarClick());
    })
}
*/

async function botonesBorrarClick() {
    console.log(this.botonesBorrarClick);
    let pos = this.getAttributo("pos");
    let response = await fetch(`/productos/${pos}`, {

        "method": "DELETE",
        "headers": {
            "Content-Type": "application/json"
        }
    });
    load();
}


async function load() {
    let container = document.querySelector("#use-ajax");
    let h1 = document.createElement("h1");
    container.innerHTML = "<h1>Logiand...</h1>";
    h1.innerHTML = "Loading";
    container.appendChild(h1);
    try {

        let response = await fetch("/productos");
        if (response.ok) {
            let t = await response.json()
            container.innerHTML = t;
        }
        else
            container.innerHTML = "<h1>Error - Failed URL!</h1>";
    }
    catch (response) {
        container.innerHTML = "<h1>Connection error</h1>";
    };
    load()
}

function mostrarTablaCompras() {
    html = "";
    for (let i = 0; i < compras.length; i++) {
        let r = compras[i];
        html += `<tr>
        <td><input type=”text” value=”${r.nombreProducto}” id="prod${i}"></td>
        <td><input type=”text” value=”${r.precio}” id="prec${i}"></td>
        <td><button class="btnUpdProd" pos="${i}">Actualizar</button></td>
        <td><button class="btn-delete-producto" pos="${i}"Borrar</button></td>
        </tr>`;  

        
    }
    document.querySelector("#tblCompras").innerHTML = html;
    let botonesBorrar = document.querySelectorAll(".btnUpdProd");
    let botonesUpd = document.querySelectorAll(".btnUpdProd");
    botonesBorrar.forEach(boton => {
        boton.addEventListener("click",  btnUpdClick);
    });

    botonesBorrar.forEach(boton =>{
        boton.addEventListener("click", btnUpdClick);
    })

        /* html += `
    <tr>
    <td>${r.producto}</td>
    <td>${r.precio}</td>
    <td><button class="btn-delete-producto" pos="${i}"Borrar</button></td>
    </tr>
    `;*/

}


async function btnUpdClick() {
    let pos = this.getAttribute("pos");
    let renglon = {
        "productoProducto": document.getElementById(`prod${pos}`).value,
        "precio": document.getElementById(`pos${pos}`).value
    }
    /*    let renglon = {
        "producto": document.getElementByID(`prod${pos}`).value,
        "precio": document.getElementByID(`prec${pos}`).value
    };
  */
    let response = await fetch(`/productos/${pos}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(renglon),
    });
    console.log("borrando elemento pos " + pos);
    load();
}



/*
async function load() {
    let container = document.querySelector("#use-ajax");
    container.innerHTML = "<h1>Logiand...</h1>";
    let response = await fetch("http://localhost:3000/mock.json");
    if (response.ok) {
        console.log(response);
        let t = await response.json()
        container.innerHTML = t;
    }


}

load();
* /


//let response = await fetch("http://localhost:3000/mock.json");
///if (response.ok) {
  ///  console.log(response);
    //let t = await response.json()
    //container.innerHTML = t;
//}

//*


//
}
*/
