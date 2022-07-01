import { KeyboardAvoidingView, TouchableWithoutFeedback, Platform, StyleSheet, TextInput, TouchableOpacity, View, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react';
import Searcher from '../Components/Searcher';
import { Entypo } from '@expo/vector-icons';
import { PRODUCTS } from '../Data/products';
import { colors } from '../Styles/colors';
import List from '../Components/List';
import MyButton from '../Components/MyButton';
import { useDispatch, useSelector } from 'react-redux';
import { setProductSelected } from '../features/products';

const ProductsScreen = ({category = {id: 1, category: "Spirits"}, navigation, route}) => {

    const [input, setInput] = useState("");
    const [initialProducts, setInitialProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([])
    const {productsByCategory} = useSelector(state => state.products.value)
    const dispatch = useDispatch()

    const {categoryId} = route.params

    const handleErase = () => {
        setInput("")
    }

    useEffect(()=> {
        if(productsByCategory.length !== 0){
            if (input === "") setProductsFiltered(productsByCategory)
            else {
                const productosFiltrados = productsByCategory.filter(product => product.description.toLowerCase().includes(input.toLowerCase()))
                setProductsFiltered(productosFiltrados)
            }
        }
    }, [input, productsByCategory])

    useEffect(()=>{
        const productosIniciales = PRODUCTS.filter(product => product.category === categoryId)
        setInitialProducts(productosIniciales);
    }, [])

    const handleDetailProduct = (product) => {
        dispatch(setProductSelected(product.id))
        navigation.navigate("Detail",{
            categoryTitle: category.category
        })
    }

    const handleBack = () => {
        navigation.goBack();
    }

    return (
        <>
            
            
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboardAvoid}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Searcher additionalStyles={{
                        backgroundColor: "white"
                    }}>
                        <TextInput
                            value={input}
                            onChangeText={setInput}
                            keyboardType="default"
                            style={styles.input}
                            placeholder="Ingrese producto a buscar"
                        />
                        <TouchableOpacity onPress={handleErase}>
                            <Entypo name="erase" size={30} color="black" />
                        </TouchableOpacity>
                    </Searcher>

                    <View style={styles.listContainer}>
                        <List data={productsFiltered} 
                            itemType={"Producto"} 
                            onPress={handleDetailProduct} 
                        />     
                        <MyButton handleBack={handleBack}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </>
    )
}
export default ProductsScreen

const styles = StyleSheet.create({
    keyboardAvoid: {
        flex: 1,
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: colors.grisMarron,
    },
    input: {
        width: '75%',
        padding: 10,
        backgroundColor: 'black',
        color:'white',
        height: 40,
        margin: 8,
        borderRadius: 8,

    },
    listContainer: {
        flex: 1,
    },

})

