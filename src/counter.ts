import random from 'lodash/random';
import range from 'lodash/range';

export function superRandom(){
  return random(0, 100);
}
export function superrange(){
  return range(0, 100);
}