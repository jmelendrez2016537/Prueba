'use strict'

function numPrimos(req, res) {
    var residuo = 0;
    var contador = 0;
    var contadorNum = 0;



    for (var i = 2; i <= 10001; i++) {
        for (var r = 1; r <= i; r++) {

            residuo = i % r;

            if (residuo == 0) {
                contador++;
            }
        }

        if (contador <= 2) {
            console.log('Este es un numero primo ' + i);
            contadorNum++;

        }
        contador = 0;
    }
    console.log('Este ultimo numero primo es el: ' + contadorNum);
    return res.status(200).send({ mensaje: "YA" })
}

module.exports = {
    numPrimos
}