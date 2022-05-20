import { StyleSheet, Text, View, Image, Dimensions, Button, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { PRODUCTS } from '../Data/products'
import { colors } from '../Styles/colors'
/* import { Route } from 'react-router-dom'; */

const DetailScreen = ({ 
    route,
    navigation 
}) => {
     /*product =
    {
        id: 1,
        category: 1,
        description: "Whiskey",
        price: 39.99,
        image: "https://picsum.photos/200/300",
    }, */   
    const {productId} = route.params
    const [product, setProduct] = useState(null)
    const {height, width} = useWindowDimensions();
    const [orientation, setOrientation] = useState("portrait")

    useEffect(()=> {
        setOrientation( height > width ? "portrait" : "landscape")
    }, [height, width])

    // console.log(orientation);

    const handleBack = () => {
        navigation.goBack();
    }

    useEffect(()=> {
        const productSelected = PRODUCTS.find(product => product.id === productId);
        console.log(productSelected);
        setProduct(productSelected);
    }, [productId])

    return (
			product && (
				<>
					
					<View
						style={
							orientation === "portrait"
								? styles.containerVertical
								: styles.containerHorizontal
						}
					>
						<Image
							source={{ uri: product?.image }}
							style={styles.image}
							resizeMode="cover"
						/>
						<Text style={styles.text}>
                            {product?.description}
                            </Text>
						<Text style={styles.text}>
                            $ {product?.price}
                        </Text>
						<Button onPress={handleBack} title="Go back" />
					</View>
				</>
			)
		);
}

export default DetailScreen

const styles = StyleSheet.create({
    containerVertical: {
        flex: 1,
        flexDirection: 'column',
        alignItems:'center',
        backgroundColor:colors.grisMarron
    },
    containerHorizontal: {
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        width: 0.8 * Dimensions.get('window').width,
        height: 300,
        marginTop: 30,
    },
    text: {
        fontSize:24,
        color:'white'
    }
})