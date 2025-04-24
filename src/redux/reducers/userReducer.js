import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        removeUser: (state, action) => {
            return state.filter(u => u.id !== action.payload);
        },
        editUser: (state, action) => {
            return state.map(user => {
                if (user.id === action.payload.id) {
                    // Return the new user object from payload
                    return action.payload;
                }
                return user;
            });
        }
    }
});

export const { addUser, removeUser, editUser } = userSlice.actions;
export default userSlice.reducer;