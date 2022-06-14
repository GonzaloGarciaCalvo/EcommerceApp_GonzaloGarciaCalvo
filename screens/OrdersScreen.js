import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import OrderItem from '../Components/OrderItem'
import { ORDERS } from '../Data/order'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../Styles/colors'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../features/orders'

const renderItem = ({item}) => (
    <OrderItem 
        item={item}
    />
)

const OrdersScreen = () => {
	//ACTAULIZAR el screen con useEffect, navigation, routeparams?
	const {orders} = useSelector(state => state.orders.value)  // no llega a orders
	console.log("orders en OrderScreen  ",orders)
	
	/* console.log(ORDERS) */
	const dispatch = useDispatch()
	useEffect(()=> {
			dispatch(getOrders({id: 2, elemento: "Vino elemento"}))
			orders.forEach(element => {
				console.log("order item", element.items)
			});
	},[])

	return (
			<View style={styles.container}>
				<FlatList
					data={orders}
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