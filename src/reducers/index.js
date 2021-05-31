import { combineReducers } from "redux";
import entitiesReducer from "reducers/entitiesReducer";
import notificationsReducer from "reducers/notificationsReducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  notifications: notificationsReducer,
});

export default rootReducer;
