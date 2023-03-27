const getQuote = (player:string, computer:string, quotes: string[]) => {

  let quote = "it's a tie try again";

  if(player === computer) return quote;

  for(let quote of quotes){

    const strArray = quote.toLowerCase().split(' ');

    if(strArray.includes(player.toLowerCase()) && strArray.includes(computer.toLowerCase())){
      return quote;
    }
  }

  return quote;
}

export default getQuote