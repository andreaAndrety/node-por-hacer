const fs = require('fs');
const color = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err)
            throw new Error('no se pudo', err);
    });


}
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');

    } catch (err) {
        listadoPorHacer = [];
    }
    // console.log(listadoPorHacer);
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const getListado = () => {

    cargarDB();
    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    // for (let tarea of listadoPorHacer) {
    //     if (tarea.descripcion == descripcion) {
    //         tarea.completado = completado;
    //     }
    // }
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    cargarDB();
    // let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    // if (index >= 0) {
    //     listadoPorHacer[index] = "";
    //     guardarDB();
    //     return true;
    // } else {
    //     return false;
    // }
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar

};