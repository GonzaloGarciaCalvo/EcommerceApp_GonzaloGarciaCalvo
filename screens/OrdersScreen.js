import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import OrderItem from '../Components/OrderItem'
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
	const filteredOrderByUser = orders.filter(item => item.user === USUARIO) 
	
	const dispatch = useDispatch()

	useEffect(()=> {
		if (reloadOrder) {
			dispatch(getOrders()) 
			dispatch(setReload(false))

		}
	
	},[reloadOrder])

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