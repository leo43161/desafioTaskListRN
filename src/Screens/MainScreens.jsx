import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'

const MainScreens = ({ taskList }) => {
    const [list, setList] = useState(taskList);
    const [input, setInput] = useState("")
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topBarContainer}>
                <TextInput
                    placeholder="Comprar vacío"
                    style={styles.inputTask}
                    value={input}
                    onChangeText={setInput}
                />
                <TouchableOpacity>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.topBarContainer}>
                <TextInput
                    placeholder="Comprar vacío"
                    style={styles.inputTask}
                    value={input}
                    onChangeText={setInput}
                />
                <TouchableOpacity>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MainScreens

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 20
    },
    topBarContainer: {
        flexDirection: 'row',
        width: "100%",
    },
    inputTask: {
        width: 250
    },
})