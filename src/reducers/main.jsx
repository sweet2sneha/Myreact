import { combineReducers } from "redux"
import changeNumber from "./reducer"

let all_reducers = combineReducers({
    changeNumber
})

export default all_reducers