import React, {useEffect, useState} from 'react'
import getRandomOption from '../helpers/get-random-option'
import getWinner from '../helpers/get-winner'
import GameResult from '../data/game-result';
import Results from './Results';
import useStore from "../hooks/useStore"


const Game = () =>{

  const [userSelction, setUserSelection] = useState('')
  const [computerSelction, setcomputerSelction] = useState('')
  const [gameResult, setGameResult] = useState(GameResult.Start)
  const { playerWins, computerWins, player, computer, reset, updateGameState } = useStore()

  const handleOnClick = (value: string) => {
    setUserSelection(value)
    setcomputerSelction(getRandomOption());
  }

  useEffect(()=> {
    const winner = getWinner(userSelction, computerSelction)

    if(winner === GameResult.User){
      playerWins(1)
    }

    if(winner === GameResult.Computer){
      computerWins(1)
    }

    setGameResult(winner);
  }, [userSelction])

  const handleReset = () => {
    setUserSelection('')
    setcomputerSelction('')
    reset();
  }

  return (
    <div>
      <h1>Rock Paper Scissor Lizard Spock</h1>
      <div>
        <div>
          <span>{'player total: ' + player }</span>
        </div>
        <div>
          <span>{'computer total: ' + computer }</span>
        </div>

      </div>
      <Results result={gameResult} />
      <div>
        {'Computer has selected ' + computerSelction}
      </div>

      <div>
        {'User has selected ' + userSelction}
      </div>

      <section>
        <button onClick={()=> handleOnClick('ROCK')}>Rock</button>
        <button onClick={()=> handleOnClick('PAPER')}>Paper</button>
        <button onClick={()=> handleOnClick('SCISSORS')}>Scissor</button>
        <button onClick={()=> handleOnClick('LIZARD')}>Lizard</button>
        <button onClick={()=> handleOnClick('SPOCK')}>Spock</button>
      </section>

      <section>
        <div>
          <button onClick={()=> handleReset()}>Reset</button>
        </div>
        <div>
          <button onClick={()=> updateGameState('menu')}>Menu</button>
        </div>
      </section>
    </div>
  )

}

export default Game