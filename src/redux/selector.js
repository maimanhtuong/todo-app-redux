import { createSelector } from "@reduxjs/toolkit"
// export const todoListSelector = (state) => {
//     const searchText = searchTextSelector(state)
//     const todoRemaining = state.todoList.filter((todo) => {
//         return todo.name.toLowerCase().includes(searchText.toLowerCase())
//     })
//     return todoRemaining
// }
// export const searchTextSelector = (state) => state.filters.search

export const todoListSelector = (state) => state.todoList.todos;
export const sSelector = (state) => state.todoList.status;

export const searchTextSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const prioritiesFilterSelector = (state) => state.filters.priority;
export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusFilterSelector,
  prioritiesFilterSelector,
  sSelector,
  (todoList, searchText, status,priorities,sSelector) => {
    console.log(todoList, searchText, status,priorities,sSelector)
    
   
    return todoList.filter((todo) => {


     
       if(status === 'All'){
          return priorities.length ? todo.name.toLowerCase().includes(searchText.toLowerCase() ) && priorities.includes(todo.priority) : todo.name.toLowerCase().includes(searchText.toLowerCase() )
       }

      return (todo.name.toLowerCase().includes(searchText.toLowerCase()) 
        && (status === 'Completed'? todo.completed : !todo.completed)
        && (priorities.length ? priorities.includes(todo.priority):true)
      ) ;
     
    })
  }
  )
  




