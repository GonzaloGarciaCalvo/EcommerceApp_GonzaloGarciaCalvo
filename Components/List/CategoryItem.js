import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../../Styles/colors'

const CategoryItem = ({category}) => {
  return (
    <View style={styles.container}>
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
    /* justifyContent: 'flex-end',
    alignItems: 'flex-end', */
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

/* source={require('../../assets/images/Spirits.jpg')} */
{/* <image 
          source={{uri:'https://picsum.photos/200/300'}}
          style={{width:100, height:100}}
      /> */}

   {/* <ImageBackground source={{uri:category}} resizeMode='cover' style={styles.screen}> 
			<View style={styles.container}>
      <Text style={styles.text}>{category.category}</Text>
    </View>
   </ImageBackground> */} 
   {/* <Image  source={require('../../assets/images/Spirits.jpg')} style={styles.image} /> */}