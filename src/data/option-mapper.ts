import { faHandRock, faHandPaper, faHandScissors, faHandLizard, faHandSpock } from '@fortawesome/free-regular-svg-icons';

const optionsMapper = [
  {
    desc: 'ROCK',
    icon: faHandRock,
    defeats: ['SCISSORS', 'LIZARD'],
  },
  {
    desc: 'SCISSORS',
    icon: faHandScissors,
    defeats: ['PAPER', 'LIZARD'],
  },
  {
    desc: 'LIZARD',
    icon: faHandLizard,
    defeats: ['PAPER', 'SPOCK'],
  },
  {
    desc: 'PAPER',
    icon: faHandPaper,
    defeats: ['ROCK', 'SPOCK'],
  },
  {
    desc: 'SPOCK',
    icon: faHandSpock,    
    defeats: ['SCISSORS', 'ROCK'],
  }
]

export default optionsMapper;