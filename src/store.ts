
interface Game{
    id:string;
    whitePlayer:string;
    blackPlayer:String,
    moves:string[];


} 
export class GameManager{
    games:Game[] = [];
    constructor(){
        this.games = [];
    }

    addmove(gameId:string,move:string){
        console.log(`Adding Game move ${move} to game ${gameId} `);
        const game = this.games.find(game => game.id === gameId);
        game?.moves.push(move)
    }

    addGame(gameId:string){
        const game= {
            id: gameId,
            whitePlayer:"Mayur",
            blackPlayer:"Raman",
             moves:[]

        
        }
        this.games.push(game)
    }
    log(){
       console.log(this.games);
    }
}


export const gameManager = new GameManager(); 