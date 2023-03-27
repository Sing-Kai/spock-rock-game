import React from "react";
import useStore from "../../hooks/useStore"
import {Game, Menu, Rules} from './index'

const Canvas = () => {
  const {gameState, updateGameState} = useStore();
  
  if(gameState === 'menu'){
    return <Menu updateGameState = {updateGameState}/>
  }

  if(gameState === 'rules'){
    return <Rules updateGameState = {updateGameState}/>
  }

  return (
    <Game/>
  )
}

export default Canvas