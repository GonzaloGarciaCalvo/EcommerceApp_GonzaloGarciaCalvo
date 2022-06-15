import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function MyButton({handleBack}) {
  return (
		<TouchableOpacity onPress={handleBack} style={styles.touchable}>
			<View>
				<Text style={styles.text}>Go Back</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
    touchable:{
        width:120,
        height:35,
        /* backgroundColor:'#1565c0', */
        backgroundColor:'#2E9AFE',
        borderRadius:4,
        alignSelf:'center',
        justifyContent:'center',
    },
    text: {
        color:'white',
        textAlign:'center',
        fontSize:20,
    }
})