import filterReducer from "../components/Filters/FiltersSlice"
import todoListReducer from "../components/TodoList/TodosSlice"
import { combineReducers } from "redux"

// const rootReducer = (state={} ,action) =>{
//     return {
//         filters: filterReducer(state.filter,action),
//         todoList: todoListReducer(state.todoList,action)
//     }
// }

const rootReducer = combineReducers({
    filters: filterReducer,
    todoList: todoListReducer,
})

export default rootReducer