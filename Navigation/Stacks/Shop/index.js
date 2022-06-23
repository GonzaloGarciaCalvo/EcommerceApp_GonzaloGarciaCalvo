import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../../../Screens/CategoriesScreen';
import ProductsScreen from '../../../Screens/ProductsScreen';
import DetailScreen from '../../../Screens/DetailScreen';
import { colors } from '../../../Styles/colors';

const Stack = createNativeStackNavigator();

function ShopNavigator() {
  return (
      <Stack.Navigator initialRouteName="Categories"
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
          name="Categories"
          component={CategoriesScreen}
          options={
            {
              title: "Khimera Spirits",
            } 
          }
        />
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ route }) => ({
            title: route.params.categoryTitle,
            headerStyle: {
              backgroundColor: colors.colorHeader
            },
            headerBackVisible:false,
          })
          }
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({
            title: route.params.productTitle,
            headerBackVisible:false,
          })
          }
        />
      </Stack.Navigator>
  )
}

export default ShopNavigator;

const styles = StyleSheet.create({})