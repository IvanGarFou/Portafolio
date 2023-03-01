class Eventos{
    constructor(nombre, fecha, lugar, descripcion){
        this.nombre = nombre,
        this.fecha = fecha,
        this.lugar = lugar,
        this.descripcion = descripcion
    }
}

const devfest = new Eventos('Devfest', '10 de Noviembre del 2022', 'Universidad Veracruzana')
const googleio = new Eventos('Google IO', '26 de Junio', 'Google Mexico')
const community = new Eventos('Community Fest', '26 y 27 de Mayo,2022', 'Universidad Veracruzana')
const androidStudy = new Eventos('Android Study Jams', '27 y 28 de Abril,2022', 'Universidad Veracruzana')
const infoSession = new Eventos('Info Session', '25 de Julio, 2022', 'Poliforum')
const techMania = new Eventos('TechMania', '25 de Febrero, 2023', 'Casa Rafael Galvan')
const googleMexico = new Eventos('Devfest', '26 de Noviembre,2022', 'Google México')
const videojuegos = new Eventos('Videojuegos', '12 de Septiembre', 'Universidad Veracruzana')

function eventos(evento) {
    switch (evento) {
        case 'devfest':
            evento = devfest
            break;
        case 'googleio':
            evento = googleio
            break;
        case 'community':
            evento = community
            break;
        case 'androidStudy':
            evento = androidStudy
            break;
        case 'googleMexico':
            evento = googleMexico
            break;
        case 'techMania':
            evento = techMania
            break;
        case 'infoSession':
            evento = infoSession
            break;
        case 'videojuegos':
            evento = videojuegos
            break;
        default:
            break;
    }

    console.log(evento.nombre)
}