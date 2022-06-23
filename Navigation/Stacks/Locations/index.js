import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../../../Styles/colors';
import LocationsScreen from '../../../Screens/LocationsScreen';
import SaveLocationScreen from '../../../Screens/SaveLocationScreen';
import { Ionicons } from '@expo/vector-icons'; 
import GetLocationScreen from '../../../Screens/GetLocationScreen'
import SetLocationScreen from '../../../Screens/SetLocationScreen'

const Stack = createNativeStackNavigator();

const LocationStack = () => {
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
          name= "Locations"
          component={LocationsScreen}
          options={({navigation}) => ({
            title: "Direcciones",
            headerRight: () => {
                return(
                    <TouchableOpacity onPress={()=> navigation.navigate("Save-location")}>
                        <Ionicons name="add-circle-outline" size={24} color="white" />
                    </TouchableOpacity>
                )
            }
          })}
        >
        </Stack.Screen> 

        <Stack.Screen
            name="Save-location"
            component={SaveLocationScreen}
            options={
                {
                    title: "Save directions",
                    headerBackVisible:false,
                }
                
            }
        />

<Stack.Screen
        name="Get-location"
        component={GetLocationScreen}
        options={
          {
            title: "Get location"
          }
        }
      />

      <Stack.Screen
        name="Set-location"
        component={SetLocationScreen}
        options={
          {
            title: "Definir una ubicación"
          }
        }
      />
    
    </Stack.Navigator>
  )
}

export default LocationStack

const styles = StyleSheet.create({})