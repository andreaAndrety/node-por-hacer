const argv = require('yargs')
    .command('crear', 'Crea una tarea nueva por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'actualza la tarea , si esta completada o pendiente', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'

        }
    })
    .command('listar', 'lista las tareas con el estado')
    .command('borrar', 'borrar el elemento', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
};