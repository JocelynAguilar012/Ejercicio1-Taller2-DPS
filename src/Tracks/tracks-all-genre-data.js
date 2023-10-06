import { TRACKSROCK, TRACKSLATINO, TRACKSPOP} from "./tracks-data-rock";//arreglo de las canciones del genero ROCK
export function GETTRACKSDATA(genero, name) {
    let arrFinal=[];
    if (genero=="rock") {
        for (let j = 0; j < TRACKSROCK.length; j++) {
            if (TRACKSROCK[j].artist==name) {
                arrFinal.push(TRACKSROCK[j]);
            }
        }
    }if (genero=="latino") {
        for (let j = 0; j < TRACKSLATINO.length; j++) {
            if (TRACKSLATINO[j].artist==name) {
                arrFinal.push(TRACKSLATINO[j]);
            }
        }
    }
    if (genero=="pop") {
        for (let j = 0; j < TRACKSPOP.length; j++) {
            if (TRACKSPOP[j].artist==name) {
                arrFinal.push(TRACKSPOP[j]);
            }
        }
    }
    return arrFinal;
}