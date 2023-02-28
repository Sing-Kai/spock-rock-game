import Options from '../data/options'

const getRandomOption = () => {
  const enumValues = Object.values(Options);
  const index = Math.floor(Math.random() * Object.keys(Options).length);
  return enumValues[index];
}

export default getRandomOption