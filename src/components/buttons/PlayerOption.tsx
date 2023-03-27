import React from 'react';
import { OptionHover} from '../animation/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IPlayerOption {
  icon: IconDefinition
  handlClick: (string) => void
  option: string
}

const PlayerOption = ({icon, handlClick, option}:IPlayerOption) => {

  return (
    <>
      <OptionHover>
        <button className="select-option" onClick={()=> handlClick(option)}>
          <FontAwesomeIcon icon={icon} size="4x"/>
        </button>
      </OptionHover>
    </>
  )
}

export default PlayerOption