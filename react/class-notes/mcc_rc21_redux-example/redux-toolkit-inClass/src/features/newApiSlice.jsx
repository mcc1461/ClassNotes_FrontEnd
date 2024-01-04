import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  newsData: [],
  error: false,
  loading: false,
}

export const getNewsData = createAsyncThunk(
  "getNews", //? type

  async () => {
    //? api istek fonksyionu
    const API_KEY = "1a1a999e0d7240a6bd2dead87bcca78e"
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    const data = await axios(url)
    console.log(data.data.articles)
    return data.data.articles
  }
)

const newApiSlice = createSlice({
  name: "newsApi",
  initialState,
  reducers: {
    clearNewsData: (state) => {
      state.newsData = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNewsData.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getNewsData.fulfilled, (state, action) => {
      state.newsData = action.payload
      state.loading = false
      state.error = false
    })
    builder.addCase(getNewsData.rejected, (state) => {
      state.loading = false
      state.error = true
    })
    builder.addMatcher(
      (action) => action.type.match(/newsApi/),
      (state, action) => {
        console.log(action)
      }
    )
  },  
})

export const {} = newApiSlice.actions

export default newApiSlice.reducer
