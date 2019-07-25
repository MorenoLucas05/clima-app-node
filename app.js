/** Aplicacion del clima */

//Requireds
const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const colors = require('colors');



//-------------------------------------------------//

// console.log(argv.direccion);


const getInfo = async(direccion) => {

    try {
        let coordenadas = await lugar.getLugarLatLng(direccion);

        let temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng)

        return `La T° en ${coordenadas.direccion} es de ${temperatura}`.green;

    } catch (error) {
        return `No se pudo determminar la T° de ${direccion}`.red;
    }

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)




// lugar.getLugarLatLng(argv.direccion)
//     .then(info => {
//         console.log(`lat = ${info.lat} y lon = ${info.lng}`);
//     });


// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log)