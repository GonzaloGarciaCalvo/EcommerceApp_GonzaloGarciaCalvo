import { StyleSheet, Text, View, Image, Dimensions, Button, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { PRODUCTS } from '../Data/products'
import { colors } from '../Styles/colors'
import MyButton from '../Components/MyButton';
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../features/cart'
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
    /* const {productId} = route.params
    const [product, setProduct] = useState(null) */
    const {productSelected} = useSelector(state => state.products.value)
    const {height, width} = useWindowDimensions();
    const [orientation, setOrientation] = useState("portrait")
    const dispatch = useDispatch();

    useEffect(()=> {
        setOrientation( height > width ? "portrait" : "landscape")
    }, [height, width])

    // console.log(orientation);

    const handleBack = () => {
        navigation.goBack();
    }

    const handleAdd = (id) => {
        dispatch(addItem({id: id}))
    }

    /* useEffect(()=> {
        const productSelected = PRODUCTS.find(product => product.id === productId);
        console.log(productSelected);
        setProduct(productSelected);
    }, [productId]) */

    return (
        productSelected && (
				<>
					
					<View
						style={
							orientation === "portrait"
								? styles.containerVertical
								: styles.containerHorizontal
						}
					>
						<Image
							source={{ uri: productSelected?.image }}
							style={styles.image}
							resizeMode="cover"
						/>
						<Text style={styles.text}>
                            {productSelected?.description}
                            </Text>
						<Text style={styles.text}>
                            $ {productSelected?.price}
                        </Text>
                        <MyButton handleBack={handleBack}/>
                        <Button onPress={()=>handleAdd(productSelected.id)} title="Add to cart" />
						{/* <Button onPress={handleBack} title="Go back" /> */}
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