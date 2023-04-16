import {legacy_createStore} from "redux"
import basicReducer from "./Reducer";
export const myStore = legacy_createStore(basicReducer);
console.log(myStore)
// export default myStore