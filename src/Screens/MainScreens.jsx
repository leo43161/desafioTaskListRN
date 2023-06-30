import { StyleSheet, TextInput, View, Text } from 'react-native'
import CheckBox from 'expo-checkbox';
import React, { useState } from 'react'
import TopBar from '../Components/TopBar';

const MainScreens = ({ taskList }) => {
    const [list, setList] = useState(taskList);
    const [inputAdd, setInputAdd] = useState("");
    const [isChecked, setChecked] = useState(false);

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
            <Text style={styles.titleTask}>Todas las tareas</Text>
            <View style={styles.taskListContainer}>
                <View style={styles.taskContainer}>
                    <CheckBox
                        style={styles.checkboxTask}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#213555' : undefined}
                    />
                    <Text style={styles.taskText}>Tarea 1</Text>
                </View>
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
    taskListContainer: {
        flex: 16,
        paddingHorizontal: 10,
    },
    taskContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#4F709C",
        borderRadius: 10,
        paddingVertical: 13,
        paddingHorizontal: 15,
    },
    taskText: {
        fontSize: 20,
        fontWeight: "500",
        color: "#F5EFE7",
    },
    titleTask: {
        fontSize: 18,
        marginBottom: 10,
        paddingLeft: 10
    },
    checkboxTask: {
        backgroundColor: "#F5EFE7",
        borderColor: "#D8C4B6",
        marginRight: 10,
        width: 23,
        height: 23,
    },
})