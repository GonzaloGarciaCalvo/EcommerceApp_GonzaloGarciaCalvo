import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect } from 'react'
import OrderItem from '../Components/OrderItem'
import { ORDERS } from '../Data/order'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../Styles/colors'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../features/orders'
import {USERID} from "../features/auth"
import { setReload, reload } from '../features/orders'

const renderItem = ({item}) => (
    <OrderItem 
        item={item}
    />
)

const OrdersScreen = () => {
	const {orders} = useSelector(state => state.orders.value)
	const {USEREMAIL} = useSelector(state => state.auth.value.user)
	const USUARIO = useSelector(USERID);
	const reloadOrder  = useSelector(reload)
  console.log ("reload en OrderScreen, entra desde CartScreen:   ",reloadOrder)
	/* console.log("USEREMAIL  ", USEREMAIL) */
	/* console.log("USERID en OrderScreen  ",USUARIO) */
	const filteredOrderByUser = orders.filter(item => item.user === USUARIO) 
	/*console.log("ordenes filtradas  ",filteredOrderByUser) */
	
	const dispatch = useDispatch()

	useEffect(()=> {
		if (reloadOrder) {
			/* console.log("ordenes filtradas  ",filteredOrderByUser) */
				// dispatch(getOrders({id: 2, elemento: "Vino elemento"})) 
			dispatch(getOrders()) 
			dispatch(setReload(false))

		}
	
	},[reloadOrder])
  // sin el [orders] como dependencia no actualiza, y con [orders] tira por consola costantemente, re renderiza sin parar
	return (
			<View style={styles.container}>
				<FlatList
					data={filteredOrderByUser}
					keyExtractor={(element) => element.id}
					renderItem={renderItem}
				/>
			</View>
	);
};

export default OrdersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.grisMarron
    }
})