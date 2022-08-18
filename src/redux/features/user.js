import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:'token',
    initialState:{value:{token:null}},
    reducers:{
        login:(state, action)=>{
        state.value = action.payload
        }

    }       
})
export default userSlice.reducer;
export const selectUser =(state) =>state;
export const {login} = userSlice.actions;