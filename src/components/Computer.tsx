import React, { useState } from 'react'
import {Spin} from './animation'
import Progress from '../data/enums'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors, faHandLizard, faHandSpock } from '@fortawesome/free-regular-svg-icons';
import getIcon from '../helpers/get-icon';

const Computer = ({play, progress, updateProgress, finalIcon}) => {

  if(progress === Progress.Ready){
    return (
      <div className="mt-10">
        <FontAwesomeIcon icon={faHandRock} size="4x"/>
      </div>
    )
  }

  if(progress === Progress.Finished){

    const icon = getIcon(finalIcon);
    console.log('computers final selection ', finalIcon)
    return (
      <div className="mt-10">
        <FontAwesomeIcon icon={icon} size="4x"/>
      </div>
    )
  }

  return (
      <Spin play={play} progress={progress} updateProgress={updateProgress}/>
  )
}

export default Computer