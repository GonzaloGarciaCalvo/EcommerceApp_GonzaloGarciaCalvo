import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import Searcher from '../Components/Searcher';
import { Entypo } from '@expo/vector-icons';
import { PRODUCTS } from '../Data/products';
import Header from '../Components/Header';
import { colors } from '../Styles/colors';
import List from '../Components/List';

const ProductsScreen = ({category = {id: 1, category: "Ropa"}, handleCategory}) => {

    const [input, setInput] = useState("");
    const [initialProducts, setInitialProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([])

    const handleErase = () => {
        setInput("")
    }

    //Buscar productos según el input.
    useEffect(()=> {
        if(initialProducts.length !== 0){
            if (input === "") setProductsFiltered(initialProducts)
            else {
                const productosFiltrados = initialProducts.filter(product => product.description.toLowerCase().includes(input.toLowerCase()))
                setProductsFiltered(productosFiltrados)
            }
        }
    }, [input, initialProducts])

    //Realiza el filtro inicial de productos por categoría
    useEffect(()=>{
        const productosIniciales = PRODUCTS.filter(product => product.category === category.id)
        setInitialProducts(productosIniciales);
    }, [])

    console.log(initialProducts);
    console.log(productsFiltered);

    return (
        <>
            <Header title={category.category}/>
            <View style={styles.container}>
                <Searcher additionalStyles={{
                    /* backgroundColor: "white", width:'80%', flexDirection:'row' */
                }}>
                    <TextInput
                        style={styles.input}
                        value={input}
                        onChangeText={setInput}
                        keyboardType="default"
                        placeholder = "Ingrese producto a buscar"
                    />
                    <TouchableOpacity onPress={handleErase}>
                        <Entypo name="eraser" size={30} color="black" />
                    </TouchableOpacity>
                </Searcher>
                <View style={styles.listContainer}>
                    <List data={productsFiltered} itemType ={"Producto"} onPress={()=> {}}/>
                    <Button title='Go back' onPress={()=>handleCategory(null)}/>
                </View>
            </View>

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
    }
})