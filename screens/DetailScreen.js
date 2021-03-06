import { StyleSheet, Text, View, Image, Dimensions, Button, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../Styles/colors'
import MyButton from '../Components/MyButton';
import LocationButton from '../Components/LacationButton'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, calcularTotal } from '../features/cart'

const DetailScreen = ({ 
    route,
    navigation 
}) => {

    const {productSelected} = useSelector(state => state.products.value)
    const {height, width} = useWindowDimensions();
    const [orientation, setOrientation] = useState("portrait")
    const dispatch = useDispatch();

    useEffect(()=> {
        setOrientation( height > width ? "portrait" : "landscape")
    }, [height, width])

    const handleBack = () => {
        navigation.goBack();
    }

    const handleAdd = (id) => {
        dispatch(addItem({id: id}))
        dispatch(calcularTotal())
    }

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
							source={productSelected?.image }
							style={styles.image}
							resizeMode="cover"
						/>
						<Text style={styles.text}>
                            {productSelected?.description}
                        </Text>
						<Text style={styles.text}>
                            $ {productSelected?.price}
                        </Text>
                        <LocationButton 
                            onPress={()=>handleAdd(productSelected.id)} 
                            title="Add to cart" 
                            additionalStyles={{width:120, marginTop:20, marginBottom:20}}
                        />
                        <MyButton handleBack={handleBack}/>
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