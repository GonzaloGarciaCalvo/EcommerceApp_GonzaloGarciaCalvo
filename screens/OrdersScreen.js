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
	/* const {order} = useSelector(state => state.order) */
	console.log(ORDERS)
	const dispatch = useDispatch()
	useEffect(()=> {
			dispatch(getOrders({id: 2, elemento: "Vino elemento"}))
	},[])

	return (
			<View style={styles.container}>
				<FlatList
					data={ORDERS}
					keyExtractor={(item) => item.id}
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