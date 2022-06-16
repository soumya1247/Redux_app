import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: 0, name: 'name 1' },
    { id: 1, name: 'name 2' },
    { id: 2, name: 'name 3' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
}) 

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer