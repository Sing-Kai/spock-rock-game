import React from 'react'
import {Spin} from './animation'
import Progress from '../data/enums'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors, faHandLizard, faHandSpock } from '@fortawesome/free-regular-svg-icons';

const Computer = ({play, progress, updateProgress}) => {
  
  if(progress === Progress.Ready){
    return (
      <div className="mt-10">
        <FontAwesomeIcon icon={faHandRock} size="4x"/>
      </div>
    )
  }

  if(progress === Progress.Finished){
    return (
      <div className="mt-10">
        <FontAwesomeIcon icon={faHandSpock} size="4x"/>
      </div>
    )
  }

  return (
      <Spin play={play} progress={progress} updateProgress={updateProgress}/>
  )
}

export default Computer