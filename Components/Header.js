import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/colors'

const Header = ({title = "Khimera Spirits"}) => {
  return (
    <View style={styles.container} >
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.colorHeader,
        height: 70,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    text: {
        fontSize: 28,
        color: 'white',
        /* fontFamily: 'Koulen', */
        fontFamily:'PoppinsRegular',
        textAlign:"center",
        paddingTop:5,
    }
})