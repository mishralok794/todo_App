import { createSlice } from "@reduxjs/toolkit";


export let todoOperation=createSlice({
     name:'todo',
     initialState:{
          value:[]
     },
     reducers:{
          add:(state,action)=>{
          //  console.log("add");   
           state.value.push(action.payload);
          },
          update:(state,action)=>{
               console.log("update Reducer")
              state.value[action.payload.index]=action.payload.text;
          },
          delet:(state,action)=>{
console.log("reducer delte");
       state.value.splice(action.payload,1);
          }
     }
})

export let {add,update,delet}=todoOperation.actions;

export default todoOperation.reducer;


