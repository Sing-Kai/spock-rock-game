import Options from "./options";

import { faHandRock, faHandPaper, faHandScissors, faHandLizard, faHandSpock } from '@fortawesome/free-regular-svg-icons';

const optionsMapper = {
  rock : {
    desc: 'ROCK',
    icon: faHandRock,
    defeats: ['SCISSORS', 'LIZARD'],
  }, 
  paper : {
    desc: 'PAPER',
    icon: faHandPaper,
    defeats: ['ROCK', 'SPOCK'],
  }, 
  scissors : {
    desc: 'SCISSORS',
    icon: faHandScissors,
    defeats: ['PAPER', 'LIZARD'],
  }, 
  lizard : {
    desc: 'LIZARD',
    icon: faHandLizard,
    defeats: ['PAPER', 'SPOCK'],
  }, 
  spock : {
    desc: 'SPOCK',
    icon: faHandSpock,    
    defeats: ['SCISSORS', 'ROCK'],
  }, 

}

export default optionsMapper;