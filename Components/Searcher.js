import { StyleSheet, View } from 'react-native'
import React from 'react'


const Searcher = ({children, additionalStyles}) => {
    return (
        <View style={{...styles.searcherContainer, ...additionalStyles}}>
            
            {children}
        </View>
    )
}

export default Searcher

const styles = StyleSheet.create({
    searcherContainer: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        marginVertical:20,
        backgroundColor: "white", 
        width:'80%', 
        flexDirection:'row'
    }
})

