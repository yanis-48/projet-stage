function submitPlayer() {
    
    const playerList = document.getElementsByClassName("player");

    let playerNames = [];

    for (const player of playerList) {
        playerNames.push(player.value)
    }

    console.log(playerNames);
    
    
    let html = "";
   
    for (let index = 0; index < playerNames.length; index++) { 
        var max = 809;
        let random = Math.floor(Math.random() * max);
        
        // if (random > 809) {
        //     random = 809;
        // }
        
        let randomToString = random.toString();

        if (randomToString.length !== 3) {
            for (let indexTer = 0; indexTer < (3 - randomToString.length); indexTer++) {
                randomToString = "0" + randomToString
            }
        }

        html = html + `
        <div id="display-player-${index + 1}" class="card" style="width: 18rem;">
            <img class="card-img-top" 
                 src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${randomToString}.png" 
                 alt="Card image cap">
            <div class="card-body">
                <h5>${playerNames[index]}</h5>
                <p>Bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla </p>
            </div>
        </div>
        \n`;
    }

    const playerDiv = document.getElementById("display-players");

    playerDiv.innerHTML = html;

    const startGame = document.getElementById("start-game");
    startGame.innerHTML = `<a href="file:///home/yanis/workspace/perso/projet_stage/index.html" target="_blank">démarrer</a>`
}
