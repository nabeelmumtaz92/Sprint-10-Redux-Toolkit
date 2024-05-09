// ✨ create your `quotesSlice` in this module
import { createSlice } from "@reduxjs/toolkit"

let id = 1
const getNextId = () => id++
const initialState = {
  displayAllQuotes: false,
  highlightedQuote: 2,
  quotes: [
    {
      id: getNextId(),
      quoteText: "Don't cry because it's over, smile because it happened.",
      authorName: "Dr. Seuss",
      apocryphal: true,
    },
    {
      id: getNextId(),
      quoteText: "So many books, so little time.",
      authorName: "Frank Zappa",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "Be yourself; everyone else is already taken.",
      authorName: "Oscar Wilde",
      apocryphal: false,
    },
  ],
}

export const quoteSlice = createSlice({
  name: 'quotes', 
  initialState, 
  reducers: {
    toggleVisibility(state,action) {

    },

    deleteQuote(state, action) {
      state.quotes = state.quotes.filter(qt => qt.id!== action.payload)
    }, 

    editQuoteAuthenticity(state, action) {

  },
  setHighlightedQuote(state,action) {

),

CreateQuote (state, action) {

    }
  }
})


export const {
  createQuote, 
  deleteQuote, 
  editQuoteAuthenticity, 
  setHighlightedQuote, 
  toggleVisibility, 
} = quoteSlice.actions

export default quoteSlice.reducer