import React from 'react'

const Rules = ({updateGameState}) => {
  return (
    <div>
      <div>
        <h1>
          Rules 
        </h1>
        <p>
          Add desc and image
        </p>
      </div>
      <div>
        <button onClick={()=>{updateGameState('menu')}}>
          Return to Menu
        </button>
      </div>
    </div>
  )
}

export default Rules