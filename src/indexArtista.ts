import { Artista } from "./Artista";

const artistas: Artista[] = [];

for (let i = 1; i <= 100; i++) {
    // Crea 100 artistas

    const artista = new Artista(`Artista ${i}`, i);
    // Nombra a los artistas como "Artista i"
    // y les asigna una cantidad de canciones igual al número i

    artistas.push(artista);
}