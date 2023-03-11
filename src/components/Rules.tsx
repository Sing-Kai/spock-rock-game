import React from 'react'
import PageTransition from './page/PageTransition'

const rules = require('../images/rules.jpeg')

const Rules = ({updateGameState}) => {
  return (
    <PageTransition>
      <div>
        <h1 className='header'>
          Rules 
        </h1>
      </div>
      <div className="ml-auto mr-auto max-w-3xl">
        <img src={rules} alt='rules'/>
      </div>
      <div className="mt-3">
        <button className="button"onClick={()=>{updateGameState('menu')}}>
          Return to Menu
        </button>
      </div>
    </PageTransition>
  )
}

export default Rules