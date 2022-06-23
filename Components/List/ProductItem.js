import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductItem = ({product}) => {
  
  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image}/>
      <Text style={styles.text}>{product.description}</Text>
    </View>
  )
}
export default ProductItem

const styles = StyleSheet.create({
  container:{
    marginBottom:40,
  },
  image: {
    width: 250,
    height: 250,
    marginTop:30,
  },
  text:{
    backgroundColor:'white',
    textAlign:'center',
    fontSize:20,
  }
})

/* source={{uri: product.image}} */