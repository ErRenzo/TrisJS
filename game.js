// Gestione turni
let turn = 0; // 0 per player X, 1 per player O
let giocate = 0; // Calcola le giocate fatte per controllare la vittoria
// Griglia del gioco
// Inizializza la griglia come una matrice 3x3 vuota
let grid = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
function btnScelta(){
    hideMenuScelta();
    const propietàPlayer = document.getElementById("turnoPlayer");
    turn =  Math.floor(Math.random() * 2); // Scegli casualmente tra 0 e 1
    turnoWho(propietàPlayer);
}
function turnoWho(propietàPlayer){
    if(turn == 0){
        propietàPlayer.innerHTML = "X";
        propietàPlayer.style.color = "blue";
    } 
    else {
        propietàPlayer.innerHTML = "O";
        propietàPlayer.style.color = "red";
    }
}
function hideMenuScelta(){
    // Nascondi il menu di scelta del turno e mostra gli elementi del gioco
    document.getElementById("turnoScelta").style.visibility = "hidden";
    document.getElementById("turnoScelta").style.height = "0";
    document.getElementById("turnoLive").style.visibility = "visible";
    document.getElementById("turnoLive").style.height = "10%";
    document.getElementById("gameIn").style.visibility = "visible";
    document.getElementById("gameIn").style.height = "70%";
}
function btnGame1Func(){
    let coordinateX = 0;
    let coordinateY = 0;
    let elementID = "btnGame1";
    gestioneGrigliaGioco(coordinateX, coordinateY, elementID)
}
function btnGame2Func(){
    let coordinateX = 0;
    let coordinateY = 1;
    let elementID = "btnGame2";
    gestioneGrigliaGioco(coordinateX, coordinateY, elementID)
}
function btnGame3Func(){
    let coordinateX = 0;
    let coordinateY = 2;
    let elementID = "btnGame3";
    gestioneGrigliaGioco(coordinateX, coordinateY, elementID)
}
function btnGame4Func(){
    let coordinateX = 1;
    let coordinateY = 0;
    let elementID = "btnGame4";
    gestioneGrigliaGioco(coordinateX, coordinateY, elementID)
}
function btnGame5Func(){
    let coordinateX = 1;
    let coordinateY = 1;
    let elementID = "btnGame5";
    gestioneGrigliaGioco(coordinateX, coordinateY, elementID)
}
function btnGame6Func(){
    let coordinateX = 1;
    let coordinateY = 2;
    let elementID = "btnGame6";
    gestioneGrigliaGioco(coordinateX, coordinateY, elementID)
}
function btnGame7Func(){
    let coordinateX = 2;
    let coordinateY = 0;
    let elementID = "btnGame7";
    gestioneGrigliaGioco(coordinateX, coordinateY, elementID)
}
function btnGame8Func(){
    let coordinateX = 2;
    let coordinateY = 1;
    let elementID = "btnGame8";
    gestioneGrigliaGioco(coordinateX, coordinateY, elementID)
}
function btnGame9Func(){
    let coordinateX = 2;
    let coordinateY = 2;
    let elementID = "btnGame9";
    gestioneGrigliaGioco(coordinateX, coordinateY, elementID)
}
function gestioneGrigliaGioco(coordinateX, coordinateY, elementID)
{
    giocate++;
    const propietàPlayer = document.getElementById("turnoPlayer");
    if(turn == 0){
        grid[coordinateX][coordinateY] = 'X';
        document.getElementById(elementID).innerHTML = "X";
        document.getElementById(elementID).style.color = "blue";
        turn = 1; // Passa il turno al giocatore O
        turnoWho(propietàPlayer);
        if(giocate >= 5)
        {
            controlVittoria();
        }
    }
    else{
        grid[coordinateX][coordinateY] = 'O';
        document.getElementById(elementID).innerHTML = "O";
        document.getElementById(elementID).style.color = "red";
        turn = 0; // Passa il turno al giocatore X
        turnoWho(propietàPlayer);
        if(giocate >= 5)
        {
            controlVittoria();
        }
    }
}
function controlVittoria(){
    let primaRigaOrizzontale = grid[0];
    let secondaRigaOrizzontale = grid[1];
    let terzaRigaOrizzontale = grid[2];
    // Map effettua una funzione su ogni elemento della matrice o vettore, in questo caso prende ogni cella necessaria e la memorizza
    let primaRigaVerticale = grid.map(riga => riga[0]); // Prende ogni cella nella prima riga verticale
    let secondaRigaVerticale = grid.map(riga => riga[1]); // Prende ogni cella nella seconda riga verticale
    let terzaRigaVerticale = grid.map(riga => riga[2]); // Prende ogni cella nella terza riga verticale

    let rigaDiagonaleSD = grid.map((riga, i) => riga[i]); // Prende ogni cella nella riga diagonale che va da sinistra a destra
    let rigaDiagonaleDS = grid.map((riga, i) => riga[grid.length - 1 - i]) // Prende ogni cella nella riga diagonale che va da destra a sinistra (-1 per addattare il lenght)
    if(
    //CONTROLLO ORIZZONTALE 
    primaRigaOrizzontale.every(cella => cella === 'X') || //Se le X sono presenti nella prima riga orizzontale 
    secondaRigaOrizzontale.every(cella => cella === 'X') || //Se le X sono presenti nella seconda riga orizzontale
    terzaRigaOrizzontale.every(cella => cella === 'X') || // Se le X sono presenti nella terza riga orizzontale
    //CONTROLLO VERTICALE
    primaRigaVerticale.every(cella => cella === 'X') || // Se le X sono presenti nella prima riga verticale
    secondaRigaVerticale.every(cella => cella === 'X') || // Se le X sono presenti nella seconda riga verticale
    terzaRigaVerticale.every(cella => cella === 'X') || // Se le X sono presenti nella terza riga verticale
    //CONTROLLO DIAGONALE
    rigaDiagonaleSD.every(cella => cella === 'X') || // Se le X sono presenti nella riga diagonale che va da sinistra a destra
    rigaDiagonaleDS.every(cella => cella === 'X')) // Se le X sono presenti nella riga diagonale che va da destra a sinistra    
    {
        alert("Le X hanno vinto!")
        // Ricarica la pagina
        location.reload();
    }
    else if(
    //CONTROLLO ORIZZONTALE 
    primaRigaOrizzontale.every(cella => cella === 'O') || //Se le X sono presenti nella prima riga orizzontale 
    secondaRigaOrizzontale.every(cella => cella === 'O') || //Se le X sono presenti nella seconda riga orizzontale
    terzaRigaOrizzontale.every(cella => cella === 'O') || // Se le X sono presenti nella terza riga orizzontale
    //CONTROLLO VERTICALE
    primaRigaVerticale.every(cella => cella === 'O') || // Se le X sono presenti nella prima riga verticale
    secondaRigaVerticale.every(cella => cella === 'O') || // Se le X sono presenti nella seconda riga verticale
    terzaRigaVerticale.every(cella => cella === 'O') || // Se le X sono presenti nella terza riga verticale
    //CONTROLLO DIAGONALE
    rigaDiagonaleSD.every(cella => cella === 'O') || // Se le X sono presenti nella riga diagonale che va da sinistra a destra
    rigaDiagonaleDS.every(cella => cella === 'O')) // Se le X sono presenti nella riga diagonale che va da destra a sinistra
    {
        alert("Le O hanno vinto!")
        // Ricarica la pagina
        location.reload();
    }
}