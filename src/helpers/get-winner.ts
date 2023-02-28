import GameResult from "src/data/game-result";
import gameLogic from "src/data/game-logic";

const getWinner = (userOption: string, computerOption:string) => {

  if(userOption === computerOption){
    console.log('its a tie')
    return GameResult.Tie
  }

  for(let [k, v] of Object.entries(gameLogic)){
    if(k === userOption.toLowerCase() && v.includes(computerOption)){

      console.log('user wins')
      return GameResult.User
    }
  }

  console.log('computer wins')
  return GameResult.Computer
}

export default getWinner;