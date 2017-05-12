import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
  switch(action.type){
    // concatene la liste des villes avec la nouvelle
    case FETCH_WEATHER: return [action.payload.data, ...state];
  }
  return state;
}
