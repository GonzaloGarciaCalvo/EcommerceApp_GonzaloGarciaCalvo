import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DB_URL } from "../../Constants/firebase";

const initialState = {
    value: {
        orders: [],
        loading: false,
        error: false,
        reload: true,
    }
}

export const getOrders = createAsyncThunk(
    'orders/getOrders',
    async (_,asyncThunk) => {
        try {
            const res = await fetch (`${DB_URL}orders.json`);
            const data = Object.values( await res.json()) 
            return data
        } catch (error) {
            return console.log("pedido rechazado")/* (rejectWithValue('Opps there seems to be an error') */
            
        }
    }
)

export const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        setReload: (state, {payload}) => {
            state.value.reload = payload
        }
    },
    extraReducers: {
        [getOrders.pending]: (state) => {
            state.value.loading = true
        },
        [getOrders.fulfilled]: (state, {payload}) => {
            state.value.loading = false
            state.value.orders = payload
            console.log('orders llegan', state.value.orders)
        },
        [getOrders.rejected]: (state) => {
            state.value.loading = false
            state.value.error = true
            console.log("orders, pedido rechazado")
        }
    }
})
export const reload = state => state.orders.value.reload
export const {setReload} = ordersSlice.actions
export default ordersSlice.reducer