import { combineReducers } from "redux";
import goalsReducer from './manageGoals';

const rootReducer = combineReducers({
    goals: goalsReducer
 
  });

export default rootReducer