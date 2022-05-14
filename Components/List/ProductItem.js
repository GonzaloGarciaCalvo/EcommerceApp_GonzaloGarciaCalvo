import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductItem = ({product}) => {
  
  return (
    <View stayle={styles.container}>
      <Image source={{uri: product.image}} style={styles.image}/>
      <Text style={styles.text}>{product.description}</Text>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  container:{
    marginBottom:20,
  },
  image: {
    width: 200,
    height: 200,
  },
  text:{
    backgroundColor:'white'
  }
})

{/* <Image source={{uri: product.image}} style={styles.image}/> */}