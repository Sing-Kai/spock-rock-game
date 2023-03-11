import getQuote from "src/helpers/get-quote"
import quotes from "src/data/quotes"

describe('getQuote', () => {
  test('returns correct quote when players choice same option', () => {

    const actual = getQuote('rock', 'rock', quotes)
    
    expect(actual).toEqual("it's a tie try again")
  })

  test.each`
  player    |   computer  | expected
  ${'ROCK'} |   ${'SCISSORS'} | ${'Rock crushes Scissors'}
  ${'ROCK'} |   ${'LIZARD'} | ${'Rock crushes Lizard'}
  ${'SCISSORS'} |   ${'PAPER'} | ${'Scissors cuts Paper'}
  ${'SCISSORS'} |   ${'LIZARD'} | ${'Scissors decapitates Lizard'}
  ${'LIZARD'} |   ${'PAPER'} | ${'Lizard eats Paper'}
  ${'LIZARD'} |   ${'SPOCK'} | ${'Lizard poisons Spock'}
  ${'PAPER'} |   ${'ROCK'} | ${'Paper covers Rock'}
  ${'PAPER'} |   ${'SPOCK'} | ${'Paper disproves Spock'}
  ${'SPOCK'} |   ${'SCISSORS'} | ${'Spock smashes Scissors'}
  ${'SPOCK'} |   ${'ROCK'} | ${'Spock vaporizes Rock'}
`('to get the correct quote', ({ player, computer, expected }) => {
  expect(getQuote(player, computer, quotes)).toBe(expected)
})

})