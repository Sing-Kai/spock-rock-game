import React from "react"
import GameResult from "../data/game-result"

const Results = ({result}) => {

  if(GameResult.Start === result){
    return <div>{'Start Game'}</div>
  }

  if(GameResult.Tie === result){
    return <div>{'Game is a tie'}</div>
  }

  if(GameResult.User === result){
    return <div>{'User Wins'}</div>
  } else{ 
    return <div>{'Computer Wins'}</div>
  }
}

export default Results