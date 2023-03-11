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

//import { faHandRock, faHandPaper, faHandScissors, faHandLizard, faHandSpock } from '@fortawesome/free-solid-svg-icons';
//import { solid} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Game = () =>{
  const [play, setPlay] = useState(false);
  const [userSelction, setUserSelection] = useState('')
  const [computerSelction, setcomputerSelction] = useState('')
  const [icon, setIcon] = useState(null);
  const [gameResult, setGameResult] = useState(GameResult.Start)
  const { playerWins, computerWins, player, computer, reset, updateGameState, progress, updateProgress } = useStore()

  const handleOnClick = (value: string) => {
    setUserSelection(value)
    setcomputerSelction(getRandomOption());
    setPlay((current)=>!current)
    updateProgress(Progress.Playing);
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
    <PageTransition>
      <h1 className="header wave">Rock Paper Spock</h1>

      <div>
        <Computer 
          play={play} 
          progress={progress} 
          updateProgress={updateProgress} 
          finalIcon ={computerSelction}
        />
      </div>

      <div className='mt-10'>
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

      <div className="mt-4 mb-8">
        <div className="w-64 mt-5 mb-5 ml-auto mr-auto p-1 flex flex-col justify-center">
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

      </div>

      <div className="mt-4 mb-4">
        <div className="w-72 ml-auto mr-auto p-1">
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
      </div>

      <div className='mt-4 mb-4'>
        <Results result={gameResult} />
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