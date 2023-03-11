import React from 'react'
import PageTransition from './page/PageTransition'

const spock = require('../images/spock.jpeg')

const Menu = ({updateGameState}) => {
  return (
    <PageTransition>
      <div>
        <h1 className="header">Rock Paper Spock</h1>
        {/* <p className="text-2xl m-1 p-1">Add some game description</p> */}

        <div className="mt-8 mb-8 ml-auto mr-auto max-w-3xl" >
          <img src={spock} alt="spock"></img>
        </div>

      </div>
      <div className="button-container">
        <div>
          <button className="button" onClick={()=>{updateGameState('start');}}>
            play
          </button>
        </div>
        <div>
          <button className="button" onClick={()=>{updateGameState('rules')}}>
            rules
          </button>
        </div>
      </div>
      </PageTransition>
  )
}

export default Menu