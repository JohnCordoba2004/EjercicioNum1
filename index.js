// class Anime {
//   constructor({ id, title, country, genre, year }) {
//     //Asigna el valor de id a una propiedad del objeto
//     this.id = id;
//     this.title = title;
//     this.country = country;
//     this.genre = genre;
//     this.year = year;

//     //Llama a los metodos de validacion
//     this.validarAnimes(id);
//     this.validarTitle(title);
//     this.validarCountry(country);
//     this.validarGenre(genre);
//     this.validarYear(year);
//   }

//   validarCadena(valor, nombre) {
//     if (!valor) {
//       throw Error(`${nombre} es obligatorio`);
//     }

//     if (typeof valor !== "string") {
//       throw Error(`El valor de ${nombre} debe ser una cadena de texto`);
//     }
//   }

//   validarlongitudCadena(valor, nombre, min, max) {
//     if (valor.length < min || valor.length > max) {
//       return console.error(
//         `El valor de ${nombre} debe tener entre "${min}" y "${max}" caracteres`,
//       );
//     }
//     return true;
//   }

//   validarNumero(a, b) {
//     if (!b) return console.error(`${a} "${b}" esta vacio`);
//     if (typeof b !== "number")
//       return console.error(`${a} "${b}" ingresado no es numero`);

//     return true;
//   }

//   validarArreglo(a, b) {
//     if (!b) return console.error(`${a} "${b}" esta vacío`);
//     if (!(b instanceof Array))
//       return console.error(`${a} ${b} ingresado, no es un arreglo`);
//     if (b.length === 0) return console.error(`${a} "${b}" no tiene elementos`);
//     for (let cadena of b) {
//       if (typeof cadena !== "string")
//         return console.error(
//           `El valor "${cadena}", ingresado no es una cadena de texto`,
//         );
//     }
//     return true;
//   }

//   //Metodo de validacion para el titulo
//   validarAnimes(id) {
//     if (this.validarCadena("Anime Id", id)) {
//       if (!/^[a-zA-z]{2}[0-9]{7}$/.test(id)) {
//         throw Error(
//           `Anime Id "${id}" debe tener 9 caracteres, 2 letras y 7 numeros`,
//         );
//       }
//     }
//   }

//   //Metodo de validacion para el titulo
//   validarTitle(title) {
//     if (this.validarCadena("Título", title)) {
//       if (title.length > 100) {
//         throw Error("El titulo no puede tener mas de 100 caracteres");
//       }
//     }
//   }

//   //Metodo de validación para el año
//   validarYear(year) {
//     if (this.validarCadena("Year ", year)) {
//       if (!/^[0-9]{4}$/.test(year)) {
//         return console.error("El año debe ser un numero entero de 4 digitos");
//       }
//     }
//   }

//   //Metodo de validación para el país
//   validarCountry(country) {
//     if (this.validarArreglo("Country", country)) {
//       for (const paises of country) {
//         if (!Anime.listaPaises.includes(paises)) {
//           console.error(`Pais(s) incorrectos "${country.join(", ")}"`);
//           Anime.paisesAceptados();
//         }
//       }
//     }
//   }

//   //Metodo de validacion para el genero
//   validarGenre(genre) {
//     if (this.validarArreglo("Genre", genre)) {
//       for (const generos of genre) {
//         if (!Anime.listaGeneros.includes(generos)) {
//           console.error(`Generos(s) incorrectos "${genre.join(", ")}"`);
//           Anime.generosAceptados();
//         }
//       }
//     }
//   }

//   fichaTecnica() {
//     console.info(`Ficha tecnica:
//             \nTitle: "${this.title}"
//             \nYear: "${this.year}"
//             \nCountry: "${this.country.join(", ")}"
//             \nGenre: "${this.genre.join(", ")}"
//             `);
//   }
// }

// //Clase que hereda de la clase Anime
// class Accion extends Anime {
//   constructor({ id, title, country, genre, year, description }) {
//     super({ id, title, country, genre, year });
//     this.description = description;
//   }

//   ValidarDescripcion(description) {
//     if (this.validarCadena("Descripción", description)) {
//       if (description.length > 300) {
//         throw Error("La descripción no puede tener mas de 300 caracteres");
//       }
//     }
//   }

//   fichaTecnica() {
//     console.info(`Ficha tecnica:
//             \nTitle: "${this.title}"
//             \nYear: "${this.year}"
//             \nCountry: "${this.country.join(", ")}"
//             \nGenre: "${this.genre.join(", ")}"
//             \nDescription: "${this.description}"
//             `);
//   }
// }

// const anime = [
//   {
//     id: "JJKR-001",
//     title: "Jujutsu Kaisen 0",
//     year: 2020,
//     country: ["Japon"],
//     genre: ["Shounen", "Action"],
//   },
// ];

// anime.forEach((el) => new Anime(el).fichaTecnica());

// const accion = [
//   {
//     id: "Ani1234567",
//     title: "Naruto",
//     year: 2002,
//     country: ["Japon"],
//     genre: ["Shounen", "Action"],
//     description:
//       "Naruto es una serie de manga y anime que narra la historia de Naruto Uzumaki, un ninja adolescente que sueña con convertirse en el Hokage, el líder de su aldea, Konoha. ",
//   },
//   {
//     id: "Ani1234568",
//     title: "Dragon Ball",
//     year: 1995,
//     country: ["Japon"],
//     genre: ["Shounen", "Action"],
//     description:
//       "Dragon Ball es una serie de manga y anime que narra la historia de las aventuras de los personajes",
//   },
// ];

// accion.forEach((el) => new Accion(el).fichaTecnica());
