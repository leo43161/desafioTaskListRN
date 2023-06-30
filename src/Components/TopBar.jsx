import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const TopBar = ({
    inputAdd,
    setInputAdd,
    onAddTask
}) => {
    return (
        <View style={styles.topBarContainer}>
            <TextInput
                placeholder="Comprar vacío"
                style={styles.inputTask}
                value={inputAdd}
                onChangeText={setInputAdd}
            />
            <TouchableOpacity style={styles.addButton} onPress={onAddTask}>
                <Text style={styles.addTextButton}>Agregar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    topBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        paddingHorizontal: 10,
        height: 40,
    },
    inputTask: {
        borderRadius: 10,
        paddingHorizontal: 10,
        flex: 3,
        backgroundColor: "#D8C4B6"
    },
    addButton: {
        borderRadius: 10,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "#213555",
        colorTint: "#FFFFFF",
    },
    addTextButton: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "bold",
    },
})