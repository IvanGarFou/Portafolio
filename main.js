class Eventos{
    constructor(nombre, fecha, lugar, descripcion, image){
        this.nombre = nombre,
        this.fecha = fecha,
        this.lugar = lugar,
        this.descripcion = descripcion
        this.image = image
    }
}

const devfest = new Eventos('Devfest', '10 de Noviembre del 2022', 'Universidad Veracruzana', 'Las DevFests son conferencias de tecnología locales organizadas por Grupos de Google Developers (GDG) de todo el mundo. Los organizadores locales planifican cada evento de DevFest según las necesidades e intereses de su comunidad de desarrolladores locales.' , 'https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2,f_auto,g_center,h_1440,q_auto:good,w_2048/v1/gcs/platform-data-dsc/event_wrapup/GTR_8048.jpg')
const googleio = new Eventos('Google IO', '26 de Junio', 'Google Mexico', 'Hola comunidad falta poco para poder comenzar el Google I/O Extended México, estamos muy contentos de regresar de manera presencial a nuestros meetups.' , 'https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2,f_auto,g_center,h_1440,q_auto:good,w_2048/v1/gcs/platform-data-dsc/chapter_photos/WhatsApp%2520Image%25202022-06-26%2520at%252012.24.29%2520AM.jpeg' )
const community = new Eventos('Community Fest', '26 y 27 de Mayo,2022', 'Universidad Veracruzana' , 'El Google Developer Student Clubs de la Universidad Veracruzana organiza su primer evento presencial Community Fest en el cual celebrará las comunidades universitarias de la facultad de negocios y tecnología desde administración hasta software en un día de charlas proyectos y talleres  con grandes expertos de la comunidad.', 'https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2,f_auto,g_center,h_1440,q_auto:good,w_2048/v1/gcs/platform-data-dsc/chapter_photos/2022-06-09%252010.19.14%25201.jpg')
const androidStudy = new Eventos('Android Study Jams', '27 y 28 de Abril,2022', 'Universidad Veracruzana', 'Te invitamos al primer Android Study Jams de la Universidad Veracruzana de manera presencial donde tendrás la oportunidad de aprender desde cero hasta crear aplicaciones para Android de manera totalmente gratuita en las instalaciones de la Universidad para todos los estudiantes de la Facultad de Negocios y Tecnologías de la Región de Orizaba-Córdoba.😎', 'https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2,f_auto,g_center,h_1440,q_auto:good,w_2048/v1/gcs/platform-data-dsc/event_wrapup/2022-04-28%252010.40.47%25201.jpg')
const infoSession = new Eventos('Info Session', '29 de Julio, 2022', 'Poliforum', 'Estamos emocionados por iniciar este nuevo ciclo 2022 - 2023 en donde iniciaremos un camino para ayudar a la comunidad a construir un puente  entre la tecnología y la ingeniería a través de workshops, webinars y elaboración de proyectos con grupos de investigación en la region universitaria de la región de Orizaba -  Cordoba. ','https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2,f_auto,g_center,h_1440,q_auto:good,w_2048/v1/gcs/platform-data-dsc/chapter_photos/FZwEwE9WIAAHcaI.jfif')
const techMania = new Eventos('TechMania', '25 de Febrero, 2023', 'Casa Rafael Galvan', 'Somos un proyecto interuniversitario en el que buscamos generar un impacto positivo en nuestras comunidades estudiantiles de la mano de la tecnología y el conocimiento teniendo en cuenta los retos y desafíos que afrontamos como universitarios actualmente, el proyecto no busca lucrar de ninguna manera todas sus actividades se desempeñan de manera voluntaria, ningún miembro percibe ingresos derivados de sus actividades dentro de la organización y las decisiones siempre son tomadas de manera horizontal.' , 'https://i.postimg.cc/FRvzZvK3/IMG-8434.jpg')
const googleMexico = new Eventos('Devfest', '26 de Noviembre,2022', 'Google México', 'Hola comunidad, ya que este año regresamos con eventos presenciales la mejor manera de cerrar el año será con un DevFest GDG & GDSC México. A lo largo de varios eventos con comunidades Google Developer Student Clubs cerraremos este año con nuestra comunidad GDG Cloud Mexico City' ,'https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2,f_auto,g_center,h_1440,q_auto:good,w_2048/v1/gcs/platform-data-dsc/chapter_photos/DevFest_Google%2520%252856%2520of%2520213%2529.png' )
const videojuegos = new Eventos('Videojuegos', '12 de Septiembre', 'Universidad Veracruzana', 'Estamos muy contentos por empezar este nuevo año en el GDSC, asi que te invitamos a Into the GDSC UV!, el cual puede ser tu primer o uno de los muchos acercamientos al GDSC UV, en esta info sesion te hablaremos de que es GDSC, como puedes formar parte y todo lo que puedes lograr como estudiante, asi como tambien podras resolver alguna de tus dudas', 'https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2,f_auto,g_center,h_1440,q_auto:good,w_2048/v1/gcs/platform-data-dsc/chapter_photos/IMG_5791.jpg')

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

    var imprimir = '<h2>' + evento.nombre + '</h2>' + '<h4>' + evento.fecha + '</h4>' + '<h6>' + evento.lugar + '</h6>' + '<p>' + evento.descripcion + '</p>'
    document.getElementById('eventos-des').innerHTML = imprimir

    var describir = '<img src="' + evento.image + '">'
    document.getElementById('eventos-descripcion').innerHTML = describir
}
