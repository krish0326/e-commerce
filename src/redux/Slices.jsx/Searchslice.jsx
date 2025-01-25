import  {createSlice} from '@reduxjs/toolkit'

const Searchslice = createSlice({
    name: 'search',
    initialState: {
        search: ""
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        }
    }
})

export const {setSearch} = Searchslice.actions
export default Searchslice.reducer 