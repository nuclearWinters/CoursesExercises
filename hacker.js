const titulos = [
  "Developing a mobile application using multiplatform frameworks with a native output",
  "Using React Native for mobile software development",
  "CROSS-PLATFORM MOBILE APPLICATION DEVELOPMENT WITH REACT NATIVE",
  "“ESTUDIO COMPARATIVO DE LOS FRAMEWORKS IONIC Y REACT NATIVE” APLICACIÓN MÓVIL DE PEDIDOS A DOMICILIO BASADA EN LA NORMA ISO 9126",
  "Practical application of advanced React Native concepts",
  "BUILDING A HYBRID APPLICATION USING REACT NATIVE",
  "React Native application development – A comparison between native Android and React Native",
  "React Native Performance Evaluation",
  "React Native vs Xamarin – Mobile for industry",
  "REACTIVE PROGRAMMING Building a Hybrid Mobile App",
  "Cross platform mobile application development: a comparison study of React Native Vs Flutter",
  "REACT JS: LA NUEVA TENDENCIA EN APLICACIONES WEB, ENFOCADAS EN EL CONTROL DINÁMICO DE LOS DATOS.",
  "Desarrollo de una aplicación móvil multiplataforma con Geolocalización para localizar sitios y establecimientos cercanos",
  "React Native: acortando las distancias entre desarrollo y diseño móvil multiplataforma",
  "Aplicación móvil con React Native sobre noticias y puntos de interés en la provincia de Castellón",
  "Técnicas de geolocalización para apps React y React Native basadas en Push Notification",
  "DESARROLLO DE UNA APLICACIÓN MÓVIL MULTIPLATAFORMA PARA LA CONSULTA DE INFORMACIÓN ACADÉMICA DE LA UNIVERSIDAD FRANCISCO DE PAULA SANTANDER OCAÑA",
  "Comparing modifiability of React Native and two native codebases",
  "Cross-platform development with React Native",
];

const nombres = [
  ["Filip Drgoň"],
  ["Oliver Gill"],
  ["Mika Kuitunen"],
  ["Robinson Vicente Ruano Valenzuela"],
  ["Aleksei Fomushkin"],
  ["Pauli Sairanen"],
  ["William Danielsson"],
  ["Rasmus Eskola"],
  ["Dervis Avdic"],
  ["Carlos Barceló Castell"],
  ["Awel Eshetu Fentaw"],
  ["JOSÉ MIGUEL CERÓN GALINDO"],
  ["Morocho Rocha Darwin Santiago"],
  [
    "Ricardo Neftali Lazcano Calixto",
    "Luis Ángel Valencia González",
    "Daniel Esteban Baena Díaz",
    "Ricardo Venegas Guzmán",
  ],
  ["Adrián Enríquez Ballester"],
  ["Matias Szarfer Barenblit"],
  ["JULIO CESAR MALDONADO MORENO"],
  ["Robin Abrahamsson", "David Berntsen"],
  ["Aymen Beshir"],
];

const años = [
  "2017",
  "2018",
  "2019",
  "2018",
  "2019",
  "2020",
  "2016",
  "2018",
  "2019",
  "2016",
  "2020",
  "2019",
  "2018",
  "2019",
  "2018",
  "2019",
  "2017",
  "2017",
  "2016",
];

const pais = [
  "Republica Checa",
  "Finlandia",
  "Finlandia",
  "Ecuador",
  "Finlandia",
  "Finlandia",
  "Suecia",
  "Finlandia",
  "Suecia",
  "España",
  "Finlandia",
  "Colombia",
  "Ecuador",
  "México",
  "España",
  "España",
  "Colombia",
  "Suecia",
  "Suecia",
];

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.toLowerCase().slice(1);
};

//Autor, A., & Autor, A. (Año). Título de la tesis (Tesis de pregrado, maestria o doctoral). Nombre de la institución, Lugar.

const citas = titulos
  .map((item, i) => ({
    titulo: item,
    autores: nombres[i].reduce((pV, cV) => {
      const cVSplit = cV.split(" ").map((text) => capitalize(text));
      if (cVSplit.length === 4) {
        return (
          pV +
          ", " +
          `${cVSplit[2]} ${cVSplit[3]}, ${cVSplit[0][0]}. ${cVSplit[1][0]}.`
        );
      } else if (cVSplit.length === 3) {
        return pV + ", " + `${cVSplit[1]} ${cVSplit[2]}, ${cVSplit[0][0]}.`;
      } else {
        return pV + ", " + `${cVSplit[1]}, ${cVSplit[0][0]}.`;
      }
    }, ""),
    pais: pais[i],
    año: años[i],
  }))
  .map(
    (item) =>
      `${item.autores} (${item.año}). ${item.titulo} (Tesis de pregrado). Universidad, ${item.pais}.`
  )
  .map((item) => {
    console.log(item);
  });
