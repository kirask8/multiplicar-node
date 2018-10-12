const opciones = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        demand: true,
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('Listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('Crear', 'Crea un archivo con la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}