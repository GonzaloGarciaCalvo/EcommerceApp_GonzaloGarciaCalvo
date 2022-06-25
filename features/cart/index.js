import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DB_URL} from "../../Constants/firebase"
import { PRODUCTS } from "../../Data/products";

const initialState = {  
    value: {
        cart: [],
        response:'',
        loading: false,
        error: false,
        total:'',
    }
}

export const confirmPurchase = createAsyncThunk(
    'cart/confirm',
    async (items, asyncThunk) => {
        try {
            const res = await fetch(
                `${DB_URL}orders.json`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        date: new Date().toLocaleDateString(),
                        items: items,
                        id: Date.now(),
                        user:asyncThunk.getState().auth.value.user.email,
                        total:asyncThunk.getState().cart.value.total,
                    })
                }
    
            )
            const data = res.json();
            return data;
        } catch (error) {
            return rejectWithValue('Opps there seems to be an error')
            
        }
    }
)

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            const productoRepetido = state.value.cart.find(producto => producto.id === action.payload.id)
            if (productoRepetido) {
                state.value.cart.map(item => {
                    if (item.id === action.payload.id) item.quantity++
                    return item
                })
            }
            else {
                const producto = PRODUCTS.find(producto => producto.id === action.payload.id);
                state.value.cart.push({ ...producto, quantity: 1 })
            }
        },
        removeItem: (state, action) => {
            const productoamodificar = state.value.cart.find(producto => producto.id === action.payload.id)
            
            if (productoamodificar.quantity >1) {
                console.log('producto repetido antes de romover item',productoamodificar);
                state.value.cart.map(item => {
                    if (item.id === action.payload.id) item.quantity--
                    return item
                })
            }
            else if (productoamodificar.quantity = 1) {
                let aux =state.value.cart.filter(producto => producto.id !== action.payload.id)
                state.value.cart = aux
            }
        },
        calcularTotal: (state,action) =>{
            const importeTotal = state.value.cart.reduce((prev, current) => (prev) + (current.price*current.quantity),0)
            function round(num) {
                var m = Number((Math.abs(num) * 100).toPrecision(15));
                return Math.round(m) / 100 * Math.sign(num);
            }
            state.value.total = round(importeTotal)
        },
        emptyCart:(state, action)=>{
            const aux=[]
            state.value.cart = aux
        },
        resetOrderId:(state, action) =>{
            state.value.response = ''
        }
    },
    extraReducers: {
        [confirmPurchase.pending]: (state) => {
            state.value.loading = true

        },
        [confirmPurchase.fulfilled]: (state, {payload}) => {
            state.value.response = payload
            state.value.loading = false
        },
        [confirmPurchase.rejected]: (state) => {
            state.value.loading = false
            state.value.error = true
        }
    }
})
export const orderId = state => state.cart.value.response
export const total = state => state.cart.value.total

export const { addItem, removeItem, emptyCart, resetOrderId, calcularTotal } = cartSlice.actions

export default cartSlice.reducer