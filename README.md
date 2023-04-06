# Rock Paper Spock

Implementation of Rock Paper Spock, made popular by Big Bang Theory. Game is basically the same as traditional Rock, Paper, Scissors but with addition of Lizard and Spock. 

## Pre-requisites and Technologies Used

- latest node version v19.9.0
- React
- Zustand
- Tailwaind
- Jest

## Install and Run

Run application:
- `npm install`
- `npm run start`

Run Jest tests:
- `npm run test`


## Implementation Details

Game state management here is using `zustand`  

This keeps track of a few things
- State of the game i.e where the user is overall
- Progress of the game i.e has the users started playing?
- Keeps track of player scores
- Resets values 

## Game Rules
```
Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
Rock crushes Scissors
```

