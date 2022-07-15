 // import { createStore } from 'redux'
// import rootReducer from './reducer'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composeEnhancers = composeWithDevTools()
// const store = createStore(rootReducer, composeEnhancers)

// export default store

import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../components/Filters/filtersSlice";
import todoListReducer from "../components/TodoList/todosSlice";

const store = configureStore({
  reducer: {
    filters: filterReducer.reducer,
    todoList: todoListReducer.reducer,
  },
});

export default store
