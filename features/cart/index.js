import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ImagePropTypes } from "react-native";
import { DB_URL} from "../../Constants/firebase"
import { PRODUCTS } from "../../Data/products";

const initialState = {
    value: {
        cart: [],
        response: {},
        loading: false,
        error: false,
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
                        importeTotal: importeTotal,
                        /* poner user.id para identificar orden con usuario */
                    })
                }
    
            )
            const data = res.json();
            return data;
        } catch (error) {
            console.log('error en carga')
            return rejectWithValue('Opps there seems to be an error')
            
        }
    }
)

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            // console.log(state.value.products);
            const productoRepetido = state.value.cart.find(producto => producto.id === action.payload.id)
            /* console.log('producto repetido',productoRepetido); */
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
                /* ****************************************************************
                ERROR
                AL BORRAR ELEMENTO DEL CARRITO, DETAIL QUEDA como primer stack y 
                ********************************************************************/
                console.log("  cart en el else  ", state.value.cart)
            }
        },
        calcularTotal: (state,action) =>{
            const importeTotal = state.value.cart.reduce((prev, current) => (prev) + (current.price*current.quantity),0)
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
            console.log("fallo la compra")
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer