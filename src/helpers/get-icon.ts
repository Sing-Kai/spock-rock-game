import { IconDefinition } from "@fortawesome/free-regular-svg-icons"
import optionsMapper from "src/data/option-mapper"

const getIcon = (desc:string):IconDefinition => {

  let res!: IconDefinition;

  for(let opts of optionsMapper){
    if(opts.desc === desc){
      res = opts.icon
    }
  }

  return res;
}

export default getIcon