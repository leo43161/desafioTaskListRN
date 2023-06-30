import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../Components/TopBar';

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
            <TopBar
                inputAdd={inputAdd}
                setInputAdd={setInputAdd}
                onAddTask={onAddTask}
            ></TopBar>
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
})