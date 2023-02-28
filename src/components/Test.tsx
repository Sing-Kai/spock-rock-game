import React, {useState} from 'react'
import getRandomOption from '../helpers/get-random-option'
import getWinner from '../helpers/get-winner'

const Test = () =>{

  const [userSelction, setUserSelection] = useState('')
  const [computerSelction, setcomputerSelction] = useState('')

  const handleOnClick = (value: string) => {
    setUserSelection(value)
    setcomputerSelction(getRandomOption());

    const winner = getWinner(userSelction, computerSelction)

    console.log(winner);
  }

  const handleReset = () => {
    setUserSelection('')
    setcomputerSelction('')
  }

  return (
    <div>
      <h1>Rock Paper Scissor Lizard Spock</h1>

      <div>
        {'Computer has selected ' + computerSelction}
      </div>

      <div>
        {'User has selected ' + userSelction}
      </div>

      <section>
        <button onClick={()=> handleOnClick('ROCK')}>Rock</button>
        <button onClick={()=> handleOnClick('PAPER')}>Paper</button>
        <button onClick={()=> handleOnClick('SCISSOR')}>Scissor</button>
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