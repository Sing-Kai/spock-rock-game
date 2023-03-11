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

  useEffect(()=>{
    reset();
  }, [])

  useEffect(()=> {
    const winner = getWinner(userSelction, computerSelction)

    if(winner === GameResult.User){
      playerWins(1)
    }

    if(winner === GameResult.Computer){
      computerWins(1)
    }

    setGameResult(winner);
  }, [userSelction, computerSelction])

  const handleReset = () => {
    setUserSelection('')
    setcomputerSelction('')
    reset();
  }

  return (
    <div>
      <h1 className="header">Rock Paper Spock</h1>

      <div className="mt-8 mb-8">
        <div className="w-64 mt-5 mb-5 ml-auto mr-auto p-5 flex flex-col justify-center">
          <div className="text-left">
            <span className='text-left'>{'Scores'}</span>
          </div>
          <div className='flex flex-row justify-between'>
            <div>
              <span >{'player total: '}</span>  
            </div>
            <div>
              <span >{player}</span>  
            </div>
          </div>

          <div className='flex flex-row justify-between'>
            <div>
              <span >{'computer total: '}</span>  
            </div>
            <div>
              <span >{computer}</span>  
            </div>
          </div>
        </div>

        <div className="w-72 ml-auto mr-auto p-5">
          <div className='flex flex-row justify-between'>
            <div>
              <span>Player</span>
            </div>
            <div>
              <span>Computer</span>
            </div>
          </div>

          <div className='flex flex-row justify-between'>
            <div>
              {userSelction}
            </div>
            <div>
              <span>vs</span>
            </div>
            <div>
            {computerSelction} 
            </div>
          </div>

        </div>

        <Results result={gameResult} />
      </div>


      <div className="flex flex-row justify-center gap-3 mb-3 mt-3">
        <button className="button" onClick={()=> handleOnClick('ROCK')}>Rock</button>
        <button className="button" onClick={()=> handleOnClick('PAPER')}>Paper</button>
        <button className="button" onClick={()=> handleOnClick('SCISSORS')}>Scissor</button>
        <button className="button" onClick={()=> handleOnClick('LIZARD')}>Lizard</button>
        <button className="button" onClick={()=> handleOnClick('SPOCK')}>Spock</button>
      </div>

      <div className="button-container">
        <div>
          <button className="button" onClick={()=> handleReset()}>Reset</button>
        </div>
        <div>
          <button className="button" onClick={()=> updateGameState('menu')}>Menu</button>
        </div>
      </div>
    </div>
  )

}

export default Game