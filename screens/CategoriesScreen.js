import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Searcher from '../Components/Searcher'
import { colors } from '../Styles/colors'
import List from '../Components/List'
import { CATEGORIES } from '../Data/categories';
import { Entypo } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../features/categories'
import { setProductsByCategory } from '../features/products'

const CategoriesScreen = ({navigation}) => {

    const [input, setInput] = useState("")
    const [categoriesFilter, setCategoriesFilter] = useState()
    const {categories} = useSelector(state => state.categories.value)
    const dispatch = useDispatch();

    useEffect(()=> {
        if (input === "") setCategoriesFilter(categories)
        else {
            let categoriasFiltradas = CATEGORIES.filter(category => category.category.toLowerCase().includes(input.toLowerCase()))
            setCategoriesFilter(categoriasFiltradas)
        }
    }, [input])

    const handleErase = () => {
        setInput("");
    }

    const handleSelectedCategory = (category) => {

        dispatch(setProductsByCategory(category.id))
        dispatch(selectCategory(category.id));
        navigation.push("Products", {
            categoryId: category.id,
            categoryTitle: category.category,
        })
    }

    return (
        <>
            <View style={styles.container}>
                <Searcher additionalStyles={{
                }}>
                    <TextInput
                        value={input}
                        onChangeText={setInput}
                        keyboardType="default"
                        style={styles.input}
                        placeholder="Buscar producto"
                        placeholderTextColor="white"
                    />
                    <TouchableOpacity onPress={handleErase} style={styles.touchable}>
                        <Entypo name="eraser" size={24} color="black"  />
                    </TouchableOpacity>
                </Searcher>
                <View style={styles.listContainer}>
                    <List data={categoriesFilter} onPress={handleSelectedCategory}/>
                </View>
            </View>
        </>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: colors.grisMarron,
    },
    input: {
        width: '75%',
        height: 40,
        margin: 8,
        backgroundColor: 'black',
        borderRadius: 8,
        color: 'white',
        textAlign:'center'
    },
    listContainer:{
        flex: 1,
        width:'100%',
        alignItems:'center',
    },
    touchable:{
        
        width:28,
    }
})