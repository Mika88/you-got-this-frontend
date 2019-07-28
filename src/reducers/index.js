import { combineReducers } from "redux";
import goalsReducer from './manageGoals';
import stepsReducer from './manageSteps';
import eventsReducer from "./manageEvents";
const rootReducer = combineReducers({
    goals: goalsReducer,
    steps: stepsReducer,
    events: eventsReducer
  });

export default rootReducer