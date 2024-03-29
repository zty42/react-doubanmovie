import {fromJS} from 'immutable'


import * as actionTypes from './actionTypes'
const defaultState = fromJS({
  hot_subjects: [],
  coming_subjects: [],
  weekly_subjects: []
})

export default (state=defaultState,action) =>{
  if (action.type === actionTypes.INIT_HOT) {
    return state.set('hot_subjects',fromJS(action.data))
  }
  if (action.type === actionTypes.INIT_COMING) {
    return state.set('coming_subjects',fromJS(action.data))
  }
  if (action.type === actionTypes.INIT_WEEKLY) {
    return state.set('weekly_subjects',fromJS(action.data))
  }

  if (action.type === actionTypes.MORE_HOT) {
    console.log('success');
    console.log(action.data);
    return state.set('hot_subjects',state.get('hot_subjects').concat(action.data))
    
  }
  return state
}