// const initState = {
//         search:'',
//         status:'All',
//         priority:[]
// }

// const filterReducer = (state = initState,action) =>{
//     switch(action.type){
//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 search:action.payload
//                 }
        
//         case 'filters/statusFilterChange':
//             return {
//                 ...state,
//                 status:action.payload
//             }

//         case 'filters/prioritiesFilterChange':
//             return {
//                 ...state,
//                 priority:action.payload
//             }
            
//         default: return state;
//     }
// }

// export default filterReducer

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'filters',
    initialState:{
        search:'',
        status:'All',
        priority:[]
    },
    reducers:{
        searchFilterChange: (state,action) => {
            state.search = action.payload
        },
        statusFilterChange: (state,action) => {
            state.status = action.payload
        },
        priorityFilterChange: (state,action) => {
            state.priorities = action.payload
        }
    }
})