//requireds
const fs = require('fs'); // <-- ya existe y en node.
//const fs = require('express'); // <-- no es nativo de node.
//const fs = require('../s'); // <-- son archivos que nosotros mismos escribimos y estan en alguna parte del proyecto.

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`)
            return;
        }

        let data = '';

        for (let i = 0; i <= 10; i++) {

            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`)

        });


    });

}



module.exports = {
    crearArchivo
}