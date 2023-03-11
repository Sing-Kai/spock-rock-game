import React from 'react'

const Scores = ({player, computer}) => {
  return (
    <div className="mt-4 mb-8">
    <div className="w-64 mt-5 mb-5 ml-auto mr-auto p-1 flex flex-col justify-center">
      <div className="text-left">
        <span className='text-left'>{'Scores'}</span>
      </div>
      <div className='flex flex-row justify-between'>
        <div>
          <span >{'player total: '}</span>  
        </div>
        <div>
          <span >{player}</span>  
        </div>
      </div>

      <div className='flex flex-row justify-between'>
        <div>
          <span >{'computer total: '}</span>  
        </div>
        <div>
          <span >{computer}</span>  
        </div>
      </div>
    </div>
  </div>
  )
}

export default Scores