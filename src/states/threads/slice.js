const { createSlice } = require("@reduxjs/toolkit");

const threadSlice = createSlice({
  name: 'threads',
  initialState: {
    loading: false,
    error: null,
    threads: []
  },
  reducers: {
    getInitialData(state, action) {
      state.loading = true
      state.error = null
      state.threads = []
    },
    getSuccessData(state, action) {
      state.loading = false
      state.error = null
      state.threads = action.payload
    },
    getErrorData(state, action) {
      state.loading = false
      state.error = action.payload
      state.threads = []
    },
    getToggleUpThread(state, action) {
      state.threads = action.payload
    }
  }
})

export const threadReducer = threadSlice.reducer
export const threadAction = threadSlice.actions