import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {      // initalState is a object
        items: [],
    },
    reducers: {
        addItem : (state, action) => {
        
       // Vaniall(older) Redux => DON'T MUTATE STATE, returning was mandatory
       // This was prohabited
        // const newState = [...state];
        // newState.items.push(action.payload);
        // return newState;

        // Redux Toolkit user immer BTS
        // We Have to mutate the state 
        state.items.push(action.payload);
       
        },
        removeItem: (state, action) =>{
            state.items.pop();
        },
        // originalState = {items: ["pizza"]}
         clearCart : (state, action) => {

         //   RTK - either Mutate the existing state or return a new State
         // state.items.length = 0;  // originalState = ["pizza"]

         return{items: []}; // this new object will be replaced inside originalState= {items: []}
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
