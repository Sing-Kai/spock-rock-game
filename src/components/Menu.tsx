import React from 'react'
import {PageTransition, OptionHover} from './animation/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors, faHandLizard, faHandSpock } from '@fortawesome/free-regular-svg-icons';

const spock = require('../images/spock.jpeg')

const Menu = ({updateGameState}) => {
  return (
    <PageTransition>
      <div>
        <h1 className="header">Rock Paper Spock</h1>

        <div className='flex flex-row gap-5 justify-center mt-5'>
          <div>
            <FontAwesomeIcon icon={faHandRock} size="2x"/>
          </div>
          <div>
            <FontAwesomeIcon icon={faHandPaper} size="2x"/>
          </div>
          <div>
            <FontAwesomeIcon icon={faHandSpock} size="2x"/>
          </div>
        </div>

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