//requires
const fs = require('fs');
const colors = require('colors');
//Forma de exportar 1
// module.exports.crearArchivo=()=>{}
crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido: "${base}"  no es válido`);
            return;
        }
        let data = '';
        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`)
            console.log(`El archivo tabla-${base}.txt ha sido creado`);
        });
    });

}

listarTabla = (base, limite = 10) => {
    console.log("==========".green);
    console.log(`tabla de ${base}`.green);
    console.log("==========".green);
    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base * index }`);
    }
}

//Forma de exportar más usada
module.exports = {
    crearArchivo,
    listarTabla
}