import React from 'react'
const spock = require('../images/spock.jpeg')

const Menu = ({updateGameState}) => {
  return (
  <div>
    <div>
      <h1 className="header">Rock Paper Spock</h1>
      <p className="text-2xl m-1 p-1">Add some game description</p>
      <img className="mt-3 mb-3 " src={spock} alt="spock"></img>
    </div>
    <div className="button-container">
      <div>
        <button className="button" onClick={()=>{updateGameState('start')}}>
          play
        </button>
      </div>
      <div>
        <button className="button" onClick={()=>{updateGameState('rules')}}>
          rules
        </button>
      </div>
    </div>
  </div>)
}

export default Menu