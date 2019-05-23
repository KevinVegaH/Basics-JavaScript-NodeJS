const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10

        }
    })
    .help()
    .argv;


const { crearArchivo } = require('./multiplicar/multiplicar')


let argv2 = process.argv;
console.log('Limite', argv.limite);
// let parametro = argv[2];
// let base = parametro.split('=')[1]; // --> recibimos la base ingresada por la consola.

// node app --base= 6 // ---> ingresamos la base por la consola

// crearArchivo(base)
//     .then(archivo => console.log(`El archivo ${archivo} ha sido creado`))
//     .catch(e => console.log(e));