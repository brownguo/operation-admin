import {legacy_createStore as createStore, combineReducers} from "redux";
import {CollapsedReducer} from "./reducers/CollapsedReducer";
import TestParamsReducer from "./reducers/TestParamsReducer";
import LoadingReducer from "./reducers/LoadingReducer";

//引入并合并reducer
const reducer = combineReducers({
    CollapsedReducer,TestParamsReducer, LoadingReducer
})

const store = createStore(reducer)
export default store