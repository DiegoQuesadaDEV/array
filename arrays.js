const listaCompra = ["patatas", "tomates", "queso", "leche", "pan"];
listaCompra.push("Aceite de Girasol");
listaCompra.pop();
const pelisFavoritas = [
    { titulo: "Interstellar", director: "Christopher Nolan", fecha: 2014 },
    { titulo: "Avatar", director: "James Cameron", fecha: 2009 },
    { titulo: "Jurassic Park", director: "Steven Spielberg", fecha: 1993 }
];
const peliculasPosteriores2010 = pelisFavoritas.filter(obj => obj.fecha > 2010);
const directores = pelisFavoritas.map(obj => obj.director);
const titulos = pelisFavoritas.map(obj => obj.titulo);
const directoresTitulos = directores.concat(titulos);
const directoresTitulosPropagacion = [...directores, ...titulos];