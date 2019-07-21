import { combineReducers } from "redux";
import goalsReducer from './manageGoals';
import stepsReducer from './manageSteps';
const rootReducer = combineReducers({
    goals: goalsReducer,
    steps: stepsReducer
  });

export default rootReducer