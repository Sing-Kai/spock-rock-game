import React from 'react'
const rules = require('../images/rules.jpeg')

const Rules = ({updateGameState}) => {
  return (
    <div>
      <div>
        <h1>
          Rules 
        </h1>
      </div>
      <div>
        <img src={rules} alt='rules'/>
      </div>
      <div>
        <button className="button"onClick={()=>{updateGameState('menu')}}>
          Return to Menu
        </button>
      </div>
    </div>
  )
}

export default Rules