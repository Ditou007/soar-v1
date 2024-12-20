import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Card {
  id: number
  name: string
  balance: number
  cardNumber: string
}

interface DashboardState {
  cards: Card[]
  transactions: string[]
}

const initialState: DashboardState = {
  cards: [],
  transactions: [],
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload
    },
    setTransactions: (state, action: PayloadAction<string[]>) => {
      state.transactions = action.payload
    },
  },
})

export const { setCards, setTransactions } = dashboardSlice.actions
export default dashboardSlice.reducer
