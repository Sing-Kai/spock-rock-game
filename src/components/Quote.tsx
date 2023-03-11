import React from 'react'
import Progress from '../data/enums';
import useStore from '../hooks/useStore'
import getQuote from '../helpers/get-quote'
import quotes from '../data/quotes'

const Quote = ({player, computer}) => {
  const {progress} = useStore();

  if(progress === Progress.Ready){
    return <div className="text-5xl">
      {'Ready'}
    </div>
  }

  if(progress === Progress.Start){
    return <div className="text-5xl">
      {'Start'}
    </div>
  }

  if(progress === Progress.Finished){
    const quote = getQuote(player, computer, quotes)
    return <div className="text-5xl">
      {quote}
    </div>
  }

  return (
    <div className="text-5xl">
      {'Waiting for Spock to respond'}
    </div>
  )
}

export default Quote