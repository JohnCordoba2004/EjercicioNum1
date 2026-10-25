interface AnimeProps {
  id: string;
  title: string;
  country: string[]; //array
  genre: string[];
  year: number;
}

interface AccionProps extends AnimeProps {
  description: string;
}

class Anime {
  public id: string;
  public title: string;
  public country: string[];
  public genre: string[];
  public year: number;

  constructor({ id, title, country, genre, year }: AnimeProps) {
    this.id = id;
    this.title = title;
    this.country = country;
    this.genre = genre;
    this.year = year;

    //Metodos validacion
    this.validarAnimes(id);
    this.validarTitle(title);
    this.validarCountry(country);
    this.validarGenre(genre);
    this.validarYear(year);
  }

  static get listaGeneros(): string[] {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Comedy",
      "Crime",
      "Drama",
      "Family",
      "Fantasy",
      "Game-Show",
      "Horror",
      "Romance",
      "Sci-Fi",
      "Sport",
      "Shounen",
      "Slice of Life",
      "Supernatural",
      "Vampire",
      "Yaoi",
      "Yuri",
      "Mystery",
      "Military",
      "Music",
      "Musical",
      "News",
      "Parody",
      "Reality-TV",
      "Thriller",
      "War",
      "Western",
      "Dementia",
      "Demons",
      "Gaming",
      "Psychological",
      "Sports",
      "School",
      "Mecha",
      "Harem",
      "Shoujo",
      "Shoujo-ai",
      "Shounen-ai",
      "Josei",
      "Kids",
      "Seinen",
      "Shounen",
      "Hentai",
      "Ecchi",
    ];
  }

  static get listaPaises(): string[] {
    return [
      "Japon",
      "USA",
      "UK",
      "Australia",
      "Francia",
      "España",
      "Canada",
      "India",
      "China",
      "Italia",
      "Reino Unido",
      "Rusia",
      "Singapur",
      "Alemania",
      "Belgica",
      "Portugal",
      "Suecia",
      "Dinamarca",
      "Noruega",
      "Polonia",
      "Suecia",
      "Turquia",
      "Bolivia",
      "Brasil",
      "Argentina",
      "Chile",
      "Colombia",
      "Ecuador",
      "Guatemala",
      "Honduras",
      "Mexico",
      "Nicaragua",
      "Panama",
      "Paraguay",
      "Peru",
      "Uruguay",
      "Venezuela",
      "Zimbabue",
      "Jamaica",
      "Cuba",
      "Colombia",
    ];
  }

  static generosAceptados(): void {
    return console.info(
      `Los generos aceptados: "${Anime.listaGeneros.join(", ")}"`,
    );
  }

  static paisesAceptados(): void {
    return console.info(
      `Los paises aceptados: "${Anime.listaPaises.join(", ")}"`,
    );
  }

  validarCadena(valor: unknown, nombre: string): void {
    if (!valor) throw new Error(`${nombre} es obligatorio`);

    if (typeof valor !== "string")
      throw new Error(`El valor de ${nombre} debe ser una cadena de texto`);
  }

  validarArreglo(nombre: string, valor: unknown): void {
    if (!valor) throw new Error(`${nombre} está vacío`);
    if (!Array.isArray(valor)) throw new Error(`${nombre} debe ser un arreglo`);
    if (valor.length === 0) throw new Error(`${nombre} no tiene elementos`);

    for (let element of valor) {
      if (typeof element !== "string")
        throw new Error(
          `El valor "${element}", ingresado no es una cadena de texto`,
        );
    }
  }

  validarYear(year: number): void {
    if (!year) throw new Error("Year es obligatorio");
    if (typeof year !== "number") throw new Error("Year debe ser un numero");
    if (year < 1900 || year > new Date().getFullYear() + 5)
      throw new Error("El año no es valido");
  }

  validarAnimes(id: string): void {
    this.validarCadena(id, "Anime Id");
    if (!/^[a-zA-z]{2}[0-9]{7}$/.test(id) && !/^[a-zA-Z]{4}-[0-9]{3}$/.test(id))
      throw new Error(`Anime Id "${id}" no es valido`);
  }

  validarTitle(title: string): void {
    this.validarCadena(title, "title");
    if (title.length > 100)
      throw new Error("El titulono puede tener más de 100 caracteres");
  }

  validarCountry(country: string[]): void {
    this.validarArreglo("Country", country);
    for (const pais of country) {
      if (!Anime.listaPaises.includes(pais))
        throw new Error(`País incorrecto: "${pais}"`);
    }
  }

  validarGenre(genre: string[]): void {
    this.validarArreglo("Genre", genre);
    for (const genero of genre) {
      if (!Anime.listaGeneros.includes(genero))
        throw new Error(`Género incorrecto: "${genero}"`);
    }
  }

  fichaTecnica(): void {
    console.info(`Ficha tecnica:
        \nTitle: "${this.title}";
        \nYear: "${this.year}";
        \nCountry: "${this.country.join(", ")}";
        \nGenre: "${this.genre.join(", ")}";
    `);
  }
}

//Clase heredada
class Accion extends Anime {
  //Declaro prop description
  public description: string;

  //Const recibe AccionProps
  constructor(props: AccionProps) {
    //Llamamos a super()
    super(props);
    //Asigna la descri
    this.description = props.description;
    //llamo a mi validador de descripcion
    this.validarDescripcion(this.description);
  }

  //metodo validarDescripcion
  validarDescripcion(description: string) {
    this.validarCadena(description, "Descripción");
    if (description.length > 300)
      throw new Error("La descripción no puede tener más de 300 caracteres");
  }

  //Sobrescribe el método fichaTecnica
  fichaTecnica(): void {
    console.info(`Ficha tecnica:
          \nTitle: "${this.title}";
          \nYear: "${this.year}";
          \nCountry: "${this.country.join(", ")}";
          \nGenre: "${this.genre.join(", ")}";
          \nDescription: "${this.description}";
      `);
  }
}

//Datos de prueba

const datosAnime: AnimeProps[] = [
  {
    id: "JJKR-001",
    title: "Jujutsu Kaisen 0",
    year: 2021,
    country: ["Japon"],
    genre: ["Action", "Adventure", "Shounen"],
  },

  // Prueba a descomentar esta línea para ver cómo salta el error del ID:
  {
    id: "mal-id",
    title: "Error",
    year: 2021,
    country: ["Japon"],
    genre: ["Action"],
  },
];

const datosAccion: AccionProps[] = [
  {
    id: "AN1234567",
    title: "Naruto",
    year: 2002,
    country: ["Japon"],
    genre: ["Action", "Adventure"],
    description:
      "Naruto Uzumaki es un joven ninja rebelde y decidido que quiere ser reconocido por su aldea y cumplir su sueño de convertirse en Hokage. A lo largo de sus aventuras, enfrenta enemigos poderosos y descubre secretos del pasado.",
  },
  {
    id: "AN7654321",
    title: "Tougen Anki",
    year: 2025,
    country: ["Japon"],
    genre: ["Action", "Adventure"],
    description:
      "Tougen Anki sigue a un grupo de jóvenes atrapados en un mundo de fantasía, secretos y peligros sobrenaturales. Mientras exploran su destino, deben enfrentar criaturas misteriosas y decisiones que ponen a prueba su amistad y su valor.",
  },
];

/* Ejecución Anime (Padre) */
console.log("Animes Normales");
datosAnime.forEach((a) => {
  try {
    const anime = new Anime(a);
    anime.fichaTecnica();
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error al crear Anime: ${error.message}`);
    }
  }
});

console.log("Animes de acción");
datosAccion.forEach((a) => {
  try {
    const accion = new Accion(a);
    accion.fichaTecnica();
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error al crear Anime de acción: ${error.message}`);
    }
  }
});
