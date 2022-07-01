import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native';


const CategoryItem = ({category}) => {
  const {width, height} = useWindowDimensions();

  return (
    <View style={{
      ...styles.container, 
      maxWidth: 0.43 * width,
      maxHeight: 0.46 * width,
      margin: width < 330 ? 10: 15,
    }}>
      <Image  source={category.image} style={styles.image} />
      <Text style={styles.text}>{category.category}</Text>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 187,
    justifyContent:'center',
    alignItems:'center',
    padding: 10,
    backgroundColor: 'white',
    margin: 12,
    borderRadius: 0,
  },
  text: {
    fontSize: 16,
    /* fontFamily: 'LatoRegular', */
  },
  image:{
    width:160,
    height:160,
    paddingTop:0,
  },
})

