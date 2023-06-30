import { StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native'
import CheckBox from 'expo-checkbox';
import React, { useState } from 'react'
import TopBar from '../Components/TopBar';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';



const ItemTask = ({ task }) => {
    return (
        <View style={styles.taskContainer}>
            <View style={styles.taskTitleCheck}>
                <CheckBox
                    style={styles.checkboxTask}
                    value={task.completed}
                    /* onValueChange={setChecked} */
                    color={task.completed ? '#213555' : undefined}
                />
                <Text style={styles.taskText}>{task.task}</Text>
            </View>
            <TouchableOpacity style={styles.taskDeletedButton}>
                <FontAwesomeIcon icon={faTrashAlt} size={18} color='#F5EFE7' />
            </TouchableOpacity>
        </View>
    )
}

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
    const checkboxHandler = ({ check, id }) => {
        
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
                <FlatList
                    data={list}
                    keyExtractor={(task) => task.id}
                    renderItem={({ item }) => ItemTask({ task: item })}
                />
                <View style={styles.taskContainer}>
                    <View style={styles.taskTitleCheck}>
                        <CheckBox
                            style={styles.checkboxTask}
                            value={true}
                            onValueChange={(value) => completedHandler({ check: value, id: 1 })}
                            color={isChecked ? '#213555' : undefined}
                        />
                        <Text style={styles.taskText}>Tarea 1</Text>
                    </View>
                    <TouchableOpacity style={styles.taskDeletedButton}>
                        <FontAwesomeIcon icon={faTrashAlt} size={18} color='#F5EFE7' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default MainScreens

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 35,
        backgroundColor: "#F5EFE7"
    },
    taskListContainer: {
        flex: 16,
        paddingHorizontal: 10,
    },
    taskContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#4F709C",
        borderRadius: 10,
        paddingVertical: 13,
        paddingHorizontal: 15,
        marginBottom: 15
    },
    taskTitleCheck: {
        flexDirection: "row",
        alignItems: "center",
    },
    taskTitleCheck: {
        flexDirection: "row",
        alignItems: "center",
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
    taskDeletedButton: {
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#DC3545",
    },
})