import React, {useEffect, useState} from 'react'
import getRandomOption from '../helpers/get-random-option'
import getWinner from '../helpers/get-winner'
import GameResult from '../data/game-result';
import Results from './Results';
import useStore from "../hooks/useStore"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors, faHandLizard, faHandSpock } from '@fortawesome/free-regular-svg-icons';
import {PageTransition, OptionHover} from './animation/index'
import Progress from '../data/enums';
import Computer from './Computer';
import Scores from './Scores';
import Quote from './Quote';

const Game = () =>{
  const [play, setPlay] = useState(false);
  const [userSelction, setUserSelection] = useState('')
  const [computerSelction, setcomputerSelction] = useState('')
  const [gameResult, setGameResult] = useState(GameResult.Start)
  const { playerWins, computerWins, player, computer, reset, updateGameState, progress, updateProgress } = useStore()

  const handleOnClick = (value: string) => {
    setUserSelection(value)
    setcomputerSelction(getRandomOption());
    setPlay((current)=>!current)
    updateProgress(Progress.Playing);
  }

  useEffect(()=>{
    updateProgress(Progress.Ready)
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
    updateProgress(Progress.Ready)
  }

  return (
    <PageTransition>
      <h1 className="header wave">Rock Paper Spock</h1>

      <div>
        <Computer 
          play={play} 
          progress={progress} 
          finalIcon ={computerSelction}
        />
      </div>

      <div className='mt-10 text-3xl'>
        <span>vs</span>
      </div>

      <div className="flex flex-row justify-center gap-2 mb-3 mt-5">
        <OptionHover>
          <button className="select-option" onClick={()=> handleOnClick('ROCK')}>
            <FontAwesomeIcon icon={faHandRock} size="4x"/>
          </button>
        </OptionHover>

        <OptionHover>
          <button className="select-option" onClick={()=> handleOnClick('PAPER')}>
            <FontAwesomeIcon icon={faHandPaper} size="4x"/>
          </button>
        </OptionHover>

        <OptionHover>
          <button className="select-option" onClick={()=> handleOnClick('SCISSORS')}>
            <FontAwesomeIcon icon={faHandScissors} size="4x"/>
          </button>
        </OptionHover>
        
        <OptionHover>
          <button className="select-option" onClick={()=> handleOnClick('LIZARD')}>
            <FontAwesomeIcon icon={faHandLizard} size="4x"/>
          </button>
        </OptionHover>

        <OptionHover>
          <button className="select-option" onClick={()=> handleOnClick('SPOCK')}>
            <FontAwesomeIcon icon={faHandSpock} size="4x"/>
          </button>
        </OptionHover>

      </div>

      <Scores player={player} computer={computer}/>

      <div className="mb-10">
        <Quote player={userSelction} computer={computerSelction}/>
      </div>

      <div className="button-container">
        <div>
          <button className="button" onClick={()=> updateGameState('menu')}>Menu</button>
        </div>
        <div>
          <button className="button" onClick={()=> handleReset()}>Reset Scores</button>
        </div>
      </div>
    </PageTransition>
  )
}

export default Game