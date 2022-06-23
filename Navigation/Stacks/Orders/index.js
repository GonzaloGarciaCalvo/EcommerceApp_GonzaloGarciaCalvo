import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrdersScreen from '../../../Screens/OrdersScreen';
import { colors } from '../../../Styles/colors';

const Stack = createNativeStackNavigator();

const OrdersStack = () => {
  return (
    <Stack.Navigator initialRouteName=""
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.colorHeader
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: "PoppinsRegular",
            fontSize: 26,
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name= "Orders"
          component={OrdersScreen}
          options={{
            title: "Ordenes"
          }}
        >
        
        </Stack.Screen> 
    
    </Stack.Navigator>
  )
}

export default OrdersStack

const styles = StyleSheet.create({})