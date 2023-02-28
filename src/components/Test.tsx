import React, {useEffect, useState} from 'react'
import getRandomOption from '../helpers/get-random-option'
import getWinner from '../helpers/get-winner'
import GameResult from '../data/game-result';
import Results from '../components/Results';


const Test = () =>{

  const [userSelction, setUserSelection] = useState('')
  const [computerSelction, setcomputerSelction] = useState('')
  const [gameResult, setGameResult] = useState(GameResult.Start)

  const handleOnClick = (value: string) => {
    setUserSelection(value)
    setcomputerSelction(getRandomOption());
  }

  useEffect(()=> {
    const winner = getWinner(userSelction, computerSelction)
    setGameResult(winner);
  }, [userSelction, computerSelction])

  const handleReset = () => {
    setUserSelection('')
    setcomputerSelction('')
    setGameResult(GameResult.Start);
  }

  // const getResult = () =>{

  //   console.log('result is ', gameResult);

  // } 

  // const content = 

  return (
    <div>
      <h1>Rock Paper Scissor Lizard Spock</h1>
      <Results result={gameResult}/>
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
      </section>
    </div>
  )

}

export default Test