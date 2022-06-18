import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ImagePropTypes } from "react-native";
import { DB_URL} from "../../Constants/firebase"
import { PRODUCTS } from "../../Data/products";
import { useDispatch, useSelector } from 'react-redux';



/* const user = useSelector(state => state.auth.value.user.userId) */

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
    async (items, importeTotal, asyncThunk) => {

        try {
            const res = await fetch(
                `${DB_URL}orders.json`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        date: new Date().toLocaleDateString(),
                        items: items,
                        id: Date.now(),
                        /* importeTotal: importeTotal, */
                        /* importeTotal: dispatch(calcularTotal) */ //MAL
                        /* user:user, */
                        /* para identificar orden con usuario
                         */
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
        },
        emptyCart:(state, action)=>{
            //vacia el carrito al confirmar compra
            const aux=[]
            state.value.cart = aux
        },
    },
    extraReducers: {
        [confirmPurchase.pending]: (state) => {
            state.value.loading = true

        },
        [confirmPurchase.fulfilled]: (state, {payload}) => {
            state.value.response = payload
            state.value.loading = false
            console.log('respuesta de firebase ', state.value.response) //Object {"name": "-N4iXnTA9U9EgJ5qtBSC", }
        },
        [confirmPurchase.rejected]: (state) => {
            state.value.loading = false
            state.value.error = true
            console.log("fallo la compra")
        }
    }
})

export const { addItem, removeItem, emptyCart } = cartSlice.actions

export default cartSlice.reducer