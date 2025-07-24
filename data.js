const niveles = [
  {
    nombre: "Nivel 5",
    cursos: [
      { id: "ECO255", nombre: "Microeconomía I" },
      { id: "ECO290", nombre: "Macroeconomía I" },
      { id: "MAT291", nombre: "Matemáticas para Economistas" },
      { id: "1ECO12", nombre: "Historia Económica del Perú" },
    ]
  },
  {
    nombre: "Nivel 6",
    cursos: [
      { id: "ECO263", nombre: "Microeconomía II", prereq: ["ECO255", "MAT291"] },
      { id: "ECO293", nombre: "Macroeconomía II", prereq: ["ECO290", "MAT291"] },
      { id: "EST241", nombre: "Estadística Inferencial" },
      { id: "EOO-1", nombre: "Electivo EOO", electivo: true },
      { id: "EOO-2", nombre: "Electivo EOO", electivo: true }
    ]
  },
  {
    nombre: "Nivel 7",
    cursos: [
      { id: "ECO208", nombre: "Economía Internacional", prereq: ["ECO263", "ECO293"] },
      { id: "ECO220", nombre: "Historia del Pensamiento Económico" },
      { id: "1ECO11", nombre: "Fundamentos de Econometría", prereq: ["ECO255", "ECO290", "EST241"] },
      { id: "1ECO23", nombre: "Intro. al Estudio de la Economía Peruana", prereq: ["1ECO11"] },
      { id: "B1", nombre: "Electivo B", electivo: true }
    ]
  },
  {
    nombre: "Nivel 8",
    cursos: [
      { id: "1ECO20", nombre: "Seminario de Investigación", prereq: ["1ECO11"] },
      { id: "EOO-3", nombre: "Electivo EOO", electivo: true },
      { id: "A1", nombre: "Electivo A", electivo: true },
      { id: "B2", nombre: "Electivo B", electivo: true },
      { id: "C1", nombre: "Electivo C", electivo: true },
      { id: "C2", nombre: "Electivo C", electivo: true }
    ]
  },
  {
    nombre: "Nivel 9",
    cursos: [
      { id: "1ECO47", nombre: "Seminario de Tesis 1", prereq: ["1ECO20"] },
      { id: "EOO-4", nombre: "Electivo EOO", electivo: true },
      { id: "EOO-5", nombre: "Electivo EOO", electivo: true },
      { id: "EOO-6", nombre: "Electivo EOO", electivo: true },
      { id: "B3", nombre: "Electivo B", electivo: true }
    ]
  },
  {
    nombre: "Nivel 10",
    cursos: [
      { id: "IDM304", nombre: "Idiomas" },
      { id: "1ECO48", nombre: "Seminario de Tesis 2", prereq: ["1ECO47"] },
      { id: "EOO-7", nombre: "Electivo EOO", electivo: true },
      { id: "EOO-8", nombre: "Electivo EOO", electivo: true },
      { id: "EOO-9", nombre: "Electivo EOO", electivo: true },
      { id: "EBR1", nombre: "Electivo EBR", electivo: true }
    ]
  }
];

const electivos = {
  EOO: [
    "Antropología Económica",
    "Lengua y Cultura Quechua 1",
    "Estadística Aplicada",
    "Procesos Sociales y Políticos de América Latina",
    "Economía y Población",
    "Economía Laboral",
    "Temas en Economía",
    "Economía del Comportamiento",
    "Teoría de Juegos",
    "Economía del Género"
  ],
  A: [
    "Econometría Intermedia: Macro",
    "Econometría Intermedia: Micro"
  ],
  B: [
    "Economía Pública",
    "Economía del Desarrollo",
    "Economía Monetaria",
    "Organización Industrial",
    "Teoría del Crecimiento",
    "Economía Política",
    "Economía Ecológica"
  ],
  C: [
    "Laboratorio de Stata",
    "Laboratorio de Matlab",
    "Laboratorio de R y Python",
    "Lab de Escritura Académica"
  ],
  EBR: [
    "Ética y Economía"
  ]
};
