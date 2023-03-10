import React from 'react'
const spock = require('../images/spock.jpeg')

const Menu = ({updateGameState}) => {
  return (
  <div>
    <div>
      <h1>Rock Paper Spock</h1>
      <p>Add some game description</p>
      <img src={spock} alt="spock"></img>
    </div>
    <div>
      <div>
        <button onClick={()=>{updateGameState('start')}}>
          start game
        </button>
      </div>
      <div>
        <button onClick={()=>{updateGameState('rules')}}>
          rule
        </button>
      </div>
    </div>
  </div>)
}

export default Menu