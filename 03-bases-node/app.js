const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

console.log();

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)

        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo ${archivo} ha sido creado`))
            .catch(e => console.log(e));


}

// node app --base= 6 // ---> ingresamos la base por la consola