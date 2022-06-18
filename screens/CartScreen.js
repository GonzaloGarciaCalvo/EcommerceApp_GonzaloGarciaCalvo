import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { colors } from '../Styles/colors'
import CartItem from '../Components/CartItem'
import { PRODUCTSSELECTED } from '../Data/productsSelected';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../features/cart'
import { confirmPurchase, emptyCart } from '../features/cart';
import { SafeAreaView } from 'react-native-safe-area-context';

const handleConfirm = () => console.log("Se confirma la compra");

const CartScreen = ({navigation}) => {
    const [compraConfirmada, setCompraConfirmada] = useState(false)
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.cart.value)
    const {order} = useSelector(state => state.cart.value.response) //NUevo
    console.log("orden  ",order)
    setTimeout(()=>console.log("orden setTimeout",order),5000)// Da UNDEFINED
    /* const orderId = JSON.parse(order) || null */
    const handleDelete = (id) => { 
        dispatch(removeItem({id: id}))
        
    }
    
    const handleConfirm = () => {
        dispatch(confirmPurchase(cart));
        dispatch(emptyCart(cart));//NUEVO  borra contenido carrito
        setCompraConfirmada(true);//NUevo
        console.log("compra  ",compraConfirmada)
    };
    const renderItem = (data) => (
        <CartItem item={data.item} onDelete={handleDelete} />
    )
    const total = cart.reduce((prev, current) => (prev) + (current.price*current.quantity),0)

    useEffect(() => {

       /*  if (order) console.log('llega orderId', order) */
      /* const orderId = JSON.parse(order) || null */
      //no ctualiza al cambiar valor
        console.log("orden en useEfect",order)
    }, [order])


    return (
			<View style={styles.container}>
				{cart ? (
					<View style={styles.list}>
						<FlatList
							data={cart}
							keyExtractor={(item) => item.id}
							renderItem={renderItem}
						/>
					</View>
				) : null}
				<View style={styles.footer}>
					<TouchableOpacity style={styles.confirm} onPress={handleConfirm}>
						<Text>Confirmar</Text>
						<View style={styles.total}>
							<Text style={styles.text}>Total</Text>
							<Text style={styles.text}>${total}</Text>
						</View>
					</TouchableOpacity>
				</View>
				{order ? <text>Tu numero de orden es:</text> : null}  {/* {No actualiza!!!} */} 
			</View>

			//state.cart.value.response? => mostrar modal con orden de compra
		);
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.grisMarron,
        paddingBottom: 120,
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
        
    }
})