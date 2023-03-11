import React from 'react'
import { motion } from "framer-motion"

const rules = require('../images/rules.jpeg')

const Rules = ({updateGameState}) => {
  return (
    <motion.div
          className="flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
    >
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
    </motion.div>
  )
}

export default Rules