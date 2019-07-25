//Requireds
const axios = require('axios');

//---------------------------------------

const getLugarLatLng = async(userDireccion) => {

    const encoudedUrl = encodeURI(userDireccion);
    // console.log(encoudedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoudedUrl}`,
        timeout: 10000,
        headers: { 'X-RapidAPI-Key': 'beb7f1ae61mshc377af08369a1efp1cd730jsn4e82a15d7233' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${userDireccion}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;



    return {
        direccion,
        lat,
        lng
    }

}

//Exports
module.exports = {
    getLugarLatLng,
}