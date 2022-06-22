import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../../../Styles/colors';
import AuthScreen from '../../../Screens/AuthScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
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
          // headerTransparent: true,
          // header: () => {
          //   return <Header/>
          // }
        }}
      >
        <Stack.Screen
          name= "auth"
          component={AuthScreen}
          options={{
            title: "Khimera Spirits",
            fontFamily:"PoppinsRegular"
          }}
        >
        
        </Stack.Screen> 
    
    </Stack.Navigator>
  )
}

export default AuthStack;

const styles = StyleSheet.create({})