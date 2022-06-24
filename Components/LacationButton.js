import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LocationButton({onPress, title, additionalStyles, moreStyles}) {
  return (
		<TouchableOpacity onPress={onPress} style={{...styles.touchable, ...additionalStyles}}>
			<View>
				<Text style={{...styles.text, ...moreStyles}}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
    touchable:{
        width:210,
        height:35,
        backgroundColor:'#2E9AFE',
        borderRadius:3,
        alignSelf:'center',
        justifyContent:'center',
        marginVertical:5,
    },
    text: {
        color:'white',
        textAlign:'center',
        fontSize:18,
    }
})