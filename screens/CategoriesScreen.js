import { StyleSheet, TextInput, TouchableOpacity, View, image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Searcher from '../Components/Searcher'
import { colors } from '../Styles/colors'
import List from '../Components/List'
import { CATEGORIES } from '../Data/categories';
import { Entypo } from '@expo/vector-icons';

const CategoriesScreen = ({handleCategory}) => {

    const [input, setInput] = useState("")
    const [categoriesFilter, setCategoriesFilter] = useState(CATEGORIES)

    useEffect(()=> {
        if (input === "") setCategoriesFilter(CATEGORIES)
        else {
            console.log("Se ejecuta el efecto");
            let categoriasFiltradas = CATEGORIES.filter(category => category.category.toLowerCase().includes(input.toLowerCase()))
            setCategoriesFilter(categoriasFiltradas)
        }
    }, [input])

    const handleErase = () => {
        setInput("");
    }

    const handleSelectedCategory = (category) => {
        // console.log(category);
        handleCategory(category)
    }

    return (
        <>
            <Header />
            <View style={styles.container}>
                <Searcher additionalStyles={{
                    /* backgroundColor: "white", width:'80%', flexDirection:'row' */
                    // el flexDirection y width solo me los tomo en línea, no en el componente
                }}>
                    <TextInput
                        value={input}
                        onChangeText={setInput}
                        keyboardType="default"
                        style={styles.input}
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
        /* flex:1, */
        width: '75%',
        height: 40,
        margin: 8,
        backgroundColor: 'black',
        borderRadius: 8,
        color: 'white',
        
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