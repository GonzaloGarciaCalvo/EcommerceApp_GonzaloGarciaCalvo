import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/colors'

const Searcher = ({children, additionalStyles}) => {
    return (
        <View style={{...styles.searcherContainer, ...additionalStyles}}>
            
            {children}
        </View>
    )
}

export default Searcher

const styles = StyleSheet.create({
    searcherContainer: {  //  NO está tomando los estilos desde acá
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        marginVertical:20,
        backgroundColor: "white", 
        width:'80%', 
        flexDirection:'row'
        /* marginVertical: 10, */
        /* shadowColor: "#000", */
    
        /* shadowOffset: {
            width: 0,
            height: 6,
        }, */
        /* shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        borderRadius: 12, */
    }
})


{/* <View style={{...styles.searcherContainer, ...additionalStyles}}>
            
            {children}
        </View> */}