import { FlatList, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import React, {useEffect, useState} from 'react'
import { colors } from '../Styles/colors'
import CartItem from '../Components/CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../features/cart'
import { confirmPurchase, emptyCart } from '../features/cart';
import { SafeAreaView } from 'react-native-safe-area-context';
import { orderId, total, resetOrderId, calcularTotal } from '../features/cart';
import { setReload,reload } from '../features/orders'



const CartScreen = ({navigation}) => {
    const [compraConfirmada, setCompraConfirmada] = useState(false)
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.cart.value)
    const [orderString, setOrderString] = useState("")
    const order = useSelector(orderId) 
    const importeTotal = useSelector(total)
    console.log("orden de CartScreen ", order)
    const handleDelete = (id) => { 
        dispatch(removeItem({id: id}))
        dispatch(calcularTotal());
    }
    const reloadOrder  = useSelector(reload)

    const handleConfirm = () => {
        if (cart.length !== 0) {
            dispatch(calcularTotal());
            dispatch(confirmPurchase(cart));
            setCompraConfirmada(true);
            dispatch(emptyCart(cart));
            console.log("Cart luego del finalizar compra con handleConfirm",cart)
            dispatch(setReload(true))
            /* console.log("reloadOrder en Cartscreen  ",reloadOrder) */
        }
    };
    const renderItem = (data) => (
        <CartItem item={data.item} onDelete={handleDelete} />
    )
    /* const total = cart.reduce((prev, current) => (prev) + (current.price*current.quantity),0) */
    console.log("total en Cartscreen", total)
    const handleResetOrderId = ()=>{
        dispatch(resetOrderId(cart));
        console.log("order en Cartscreen luego de Finalizar:  ",order )
        console.log("Cart luego de finalizar",cart)
    }

    return (
			<View style={styles.container}>
				{cart.length !==0 ? (
                //solo con cart no mostraba en Text del ternario
                <>
					<View style={styles.list}>
						<FlatList
							data={cart}
							keyExtractor={(item) => item.id}
							renderItem={renderItem}
						/>
					</View>
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.confirm} onPress={handleConfirm}>
                            <Text>Confirmar</Text>
                            <View style={styles.total}>
                                <Text style={styles.text}>Total</Text>
                                <Text style={styles.text}>${importeTotal}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    </>) : <Text style={styles.emptyCartMessege}>No hay productos en el carrito</Text>}
				{order? 
                    ( <><Text style={styles.order}>El Código de orden es:{order.name}</Text>
                        <Button title='Finalizar' onPress={handleResetOrderId} />
                    </>
                    ) : null
                } 
			</View>

			
		);
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.grisMarron,
        paddingBottom: 120,
        fontFamily: 'LatoRegular',
    },
    list: {
        /* flex: 0.7, */
        color:'white',
        
    },
    footer: {
        padding: 12,
        borderTopColor: colors.beige,
        borderTopWidth: 1,
    },
    confirm: {
        backgroundColor: colors.beige,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    total: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        fontFamily: 'LatoRegular',
        padding: 8,
    },
    order:{
        color:"white",
        fontSize:18
    },
    emptyCartMessege:{
        color:"white",
        fontSize:18,
        textAlign:'center'
    },
})
//state.cart.value.response? => mostrar modal con orden de compra
