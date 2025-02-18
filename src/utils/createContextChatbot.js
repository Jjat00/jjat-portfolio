export const contextChatBot = ({ contentCards, contentAboutMe }) => {
  const projectDescriptions = contentCards
    .map(
      (project) =>
        `${project.title}: ${project.description} (Tech: ${project.technologies})`,
    )
    .join("\n");

  const fullContext = `
Nombre: ${contentAboutMe.name} ${contentAboutMe.lastname}
Edad: 27 años
Años de experiencia: 3 años
Información: ${contentAboutMe.information}
LinkedIn: ${contentAboutMe.linkedIn}
GitHub: ${contentAboutMe.github}
Sobre mí: Desarrollador de software con 3 años de experiencia en React.js y Node.js. Poseo una sólida comprensión de los conceptos
de desarrollo web y de cómo integrar los diferentes componentes de una aplicación. He demostrado habilidades en el
desarrollo de aplicaciones tanto en el lado del servidor como en el cliente, enfocándome en proporcionar soluciones
eficientes y escalables. Estoy comprometido a brindar soluciones innovadoras y a mantenerme actualizado con las últimas
tendencias en desarrollo web. Me gusta trabajar en equipo y colaborar con otros desarrolladores para asegurar la entrega
de soluciones de alta calidad y eficientes. Me gustaría continuar mi carrera en una empresa innovadora y en constante
crecimiento donde pueda seguir creciendo profesionalmente y contribuir al éxito de la empresa.
EXPERIENCIA: 
Decimetrix
Full Stack Developer Engineer — 01, 2022 - Presente
● Diseñé la arquitectura de datos de un digital twin y el esquema de migraciones de base de datos del producto
haciendo uso de Sequelize y PostreSQL, esto facilitó la escalabilidad del producto.
● Realicé la refactorización del código hecho en react para que sea más legible y escalable, alcanzando la optimización
del mismo en un 50%.
● Desarrollé nuevos módulos para la gestión de usuarios y visualización de objetos en mapas usando react, mapbox
y node. Esto permitió optimizar la recolección de datos en campo en un 40%.
Stack tecnológico: React.js · Node.js · Mapbox · Python · Liderazgo · PostgreSQL · MongoDB · Sequelize.js · Docker.
Software Development Engineer — 05, 2021 - 12, 2021
● Empecé la creación de la aplicación Green Dragon, escogiendo las tecnologías y realizando el modelo de la base de
datos, esto dió punto de partida a la implementación del producto.
● Desarrollé el MVP de la aplicación web Green Dragon, un digital twin que ayuda a la gestión de la huella de carbono.
Con esto se optimizó las actividades diarias realizadas en instancias petroleras
Stack tecnológico: React.js · Node.js · Mapbox · PostgreSQL · Docker · AWS · EC2 · S3 · Lambda.
Intecol — 01, 2021 - 04, 2021
● Logré manipular una cámara térmica FLIR con el lenguaje Python, esto permitió realizar pruebas en laboratorio con
librerías open source como OpenCV reduciendo costos asociados a las librerías de pago.
● Realicé una aplicación de escritorio usando Python y PyQt para facilitar la adquisición y procesamiento de imágenes de cámaras de visión artificial industriales de Cognex y FLIR agilizando el tiempo de la adquisición en un 30%. Stack tecnológico: Python · OpenCV · PyQt · Visión por computador · NumPy
EDUCACIÓN
Universidad del Valle – Cali, Colombia. Ingeniería electrónica, facultad de ingeniería, 2015 - 2020.
Universidad del Valle – Cali, Colombia. Ingeniería de sistemas y computación, facultad de ingeniería, 2019 - 2021.
Proyectos:
${projectDescriptions}
`;

  return fullContext;
};
