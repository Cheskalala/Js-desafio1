precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio


cantidadSpan = document.querySelector(".cantidad");
total = document.querySelector(".valor-total");

cuenta = 0;

function sumaFunc(){
    cuenta++

    precioTotal = precio * cuenta

    cantidadSpan.innerHTML = cuenta
    total.innerHTML = precioTotal


};

function restaFunc(){
    cuenta--

    if(precio * cuenta >= 0){
        precioTotal = precio * cuenta
    
        cantidadSpan.innerHTML = cuenta
        total.innerHTML = precioTotal
    }
    else{ 
        cuenta = 0
        precioTotal = 0
    }
};





// solución V2
// mas = document.getElementById("mas");
// menos = document.getElementById("menos");
// mas.addEventListener("click", function(){
//     cuenta++

//     precioTotal = precio * cuenta

//     cantidadSpan.innerHTML = cuenta
//     total.innerHTML = precioTotal
// });

// menos.addEventListener("click", function(){
//     cuenta--
// if(precio * cuenta >= 0){
//     precioTotal = precio * cuenta

//     cantidadSpan.innerHTML = cuenta
//     total.innerHTML = precioTotal
// }
// else{ 
//     cuenta = 0
//     precioTotal = 0
// }
// });






