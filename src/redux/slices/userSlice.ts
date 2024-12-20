// redux/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface UserState {
  id: string
  name: string
  email: string
  avatarUrl: string
}

const initialState: UserState = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatarUrl: '/avatar.jpeg',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateAvatar(state, action: PayloadAction<string>) {
      state.avatarUrl = action.payload
    },
    // Add more reducers as needed (e.g., updateProfile)
  },
})

export const { updateAvatar } = userSlice.actions
export const selectUser = (state: RootState) => state.user
export default userSlice.reducer
