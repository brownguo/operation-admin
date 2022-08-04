import {legacy_createStore as createStore, combineReducers} from "redux";
import {CollapsedReducer} from "./reducers/CollapsedReducer";
import TestParamsReducer from "./reducers/TestParamsReducer";
//这里可以合并多个reducer
const reducer = combineReducers({
    CollapsedReducer,TestParamsReducer
})

const store = createStore(reducer)
export default store