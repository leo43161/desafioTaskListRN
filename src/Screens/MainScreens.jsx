import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'

const MainScreens = ({ taskList }) => {
    const [list, setList] = useState(taskList);
    const [inputAdd, setInputAdd] = useState("");

    const onAddTask = () => {
        setList([
            ...list,
            {
                id: list.length + 1,
                task: inputAdd,
                completed: false,
                deleted: false
            }
        ]);
        setInputAdd("")
    }
    return (
        <View style={styles.mainContainer}>
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
            <View style={styles.topBarContainer}>
            </View>
        </View>
    )
}

export default MainScreens

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: "#F5EFE7"
    },
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