// const initState =
//     [
//         {id:1,name:'Learn Yoga', completed:false,priority:'Medium'},
//         {id:2,name:'Learn Redux', completed:true,priority:'High'},
//         {id:3,name:'See Esports', completed:false,priority:'Low'},
//     ]

// const todoListReducer = (state = initState,action) =>{
//     console.log(state,action)
//     switch(action.type){
//         case 'todoList/addTodo':
//             return [ ...state, action.payload]

//         case 'todoList/toggleTodoStatus':
//             return state.map(todo => todo.id===action.payload
//                 ? {...todo,completed: !todo.completed}
//                 : todo )

//         default: return state;
//     }
// }

// export default todoListReducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todoList",
  initialState: {
    status: "idle",
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    }, //action creator
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
  },
  extraReducers:(builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        console.log("pending");
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        console.log(state.todos)
        state.todos = action.payload;
        state.status = "idle";
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        console.log({action});
        state.todos.push(action.payload);
      })
      .addCase(updateTodo.fulfilled,( state,action)=>{
        console.log('id',action.payload.id)
        console.log(state.todos)
        let currentTodo = state.todos.find(todo => todo.id === action.payload)
        console.log({currentTodo})
        currentTodo = action.payload
      })
  },
});

export function addTodos(todo) {
  return function addTodosThunk(dispatch, getState) {
    todo.name = "tao test";
    dispatch(todosSlice.actions.addTodo(todo));
  };
}
//////////////////////////////////////
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("/api/todos");
  const data = await res.json();
  console.log({data});
  return data.todos;
});

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (newTodo) => {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
    });
    const data = await res.json();
    
    return data.todos;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async(id) =>{
    const res = await fetch("/api/updateTodo",{
      method:"POST",
      body: JSON.stringify(id)
    })
    const data = await res.json()
    console.log({data})
    return data.todos
  }
)
export default todosSlice;
