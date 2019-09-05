const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
//console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('=========== Por Hacer ======='.green);
            console.log('Descripcion :', tarea.descripcion);
            console.log('Estado :', tarea.completado);
            console.log('============================='.green);
        }
        break;
    case 'actualizar':
        try {
            let proces = porHacer.actualizar(argv.descripcion, argv.completado);
            if (proces) {
                console.log('Se actualizo correctamente');
            } else {
                console.log('no Existe la tarea a actualizar');
            }
        } catch (e) {
            console.log('No se pudo actualizar', e);
        }
        break;
    case 'borrar':
        try {
            let proces = porHacer.borrar(argv.descripcion);
            if (proces) {
                console.log('Se borro correctamente');
            } else {
                console.log('no Existe la tarea a borrar');
            }
        } catch (e) {
            console.log('No se pudo borrar', e);
        }
        break;

    default:
        console.log('No se reconoce el comando');


};