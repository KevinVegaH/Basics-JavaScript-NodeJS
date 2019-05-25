//requireds
const fs = require('fs'); // <-- ya existe y en node.
//const fs = require('express'); // <-- no es nativo de node.
//const fs = require('../s'); // <-- son archivos que nosotros mismos escribimos y estan en alguna parte del proyecto.
const colors = require('colors/safe');

let listarTabla = (base, limite = 10) => {

    console.log('========================'.green);
    console.log(` TABLA DE ${base} `.yellow);
    console.log('========================'.green);

    for (let i = 0; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}\n`);
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`)
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(colors.green(`tabla-${base}.txt`))

        });


    });

}



module.exports = {
    crearArchivo,
    listarTabla
}