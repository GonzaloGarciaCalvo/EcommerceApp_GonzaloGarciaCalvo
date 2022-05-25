import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function MyButton({handleBack}) {
  return (
		<TouchableOpacity onPress={handleBack} style={styles.touchable}>
			<View>
				<Text style={styles.text}>GO BACK</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
    touchable:{
        width:120,
        height:40,
        /* backgroundColor:'#0033CC', */
        /* backgroundColor:'#0d47a1', */
        backgroundColor:'#1565c0',
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