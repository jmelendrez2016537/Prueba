'use strict'


function sumaYCuadrados(req, res) {
    var total3 = 0;
    var total2 = 0;
    var total = 0;
    var suma = 0;

    for (let i = 1; i <= 100; i++) {
        var cuadrado = 0;
        //console.log(i * i);
        cuadrado = i * i;
        total += cuadrado;
    }
    console.log('');
    console.log('La sumatoria de los 100 numeros al cuadrado es: ' + total);

    for (let e = 1; e <= 100; e++) {
        // console.log(e);
        suma += e;
    }
    total2 = suma * suma;
    console.log('');
    console.log('El cuadrado de la sumatoria de los 100 numero es: ' + total2);

    total3 = total2 - total;
    console.log('');
    console.log('La diferencia de los resultados es de: ' + total3)

    return res.status(200).send({ mensaje: "YA" })
}

module.exports = {
    sumaYCuadrados
}