$(document).ready(function(){
    let arrayPrecio=[];
    let arrayNombre=[];
    var costo=0;
    var nombre="";
    $("#maruchan").click(function(){
        costo = 10;
        nombre="Maruchan";
        arrayPrecio.push(costo);
        arrayNombre.push(nombre);
    });
    $("#nutella").click(function(){
        costo = 15;
        nombre="Nutella";
        arrayPrecio.push(costo);
        arrayNombre.push(nombre);
    });
    $("#marias").click(function(){
        costo = 20;
        nombre="Marias";
        arrayPrecio.push(costo);
        arrayNombre.push(nombre);
    });
    $("#bimbollos").click(function(){
        costo = 34;
        nombre="Bimbollos";
        arrayPrecio.push(costo);
        arrayNombre.push(nombre);
    });
    $("#zucaritas").click(function(){
        costo = 35;
        nombre="Zucaritas";
        arrayPrecio.push(costo);
        arrayNombre.push(nombre);
    });
    $("#frootLoops").click(function(){
        costo = 12;
        nombre="Froot Loops";
        arrayPrecio.push(costo);
        arrayNombre.push(nombre);
    });
    $("#nescafe").click(function(){
        costo = 18;
        nombre="Nescafe";
        arrayPrecio.push(costo);
        arrayNombre.push(nombre);
    });
    $("#nescafeMamado").click(function(){
        costo = 24;
        nombre="Nescafe Mamado";
        arrayPrecio.push(costo);
        arrayNombre.push(nombre);
    });
    $("#lechera").click(function(){
        costo = 18;
        nombre="Lechera";
        arrayPrecio.push(costo);
        arrayNombre.push(nombre);
    });
    $("#pagar").click(function (){
        var total =0;
       for (var i =0; i<arrayPrecio.length;i++){
           total=arrayPrecio[i]+total;
           document.write("<table style='background-color: #ffe8a1;border: 2px solid' >"+"<tr>"+"<th>Producto</th>"+"<th>Precio</th>"+"</tr>"+"<tr>"+"<td>"+arrayNombre[i]+"</td>"+"<td>"+"$"+arrayPrecio[i]+"</td>"+"</tr>");
       }
       window.alert("Producto Agregado al carrito: "+arrayNombre.length+",   Total a pagar: $"+total)

    });
});