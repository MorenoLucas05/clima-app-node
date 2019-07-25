/**Configuracion de Yargs */
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



// Exports
module.exports = {
    argv
}