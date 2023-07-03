import { StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native'
import CheckBox from 'expo-checkbox';
import React, { useState } from 'react'
import TopBar from '../Components/TopBar';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const ItemTask = ({ task, checkboxHandler }) => {
    return (
        <View style={styles.taskContainer}>
            <View style={styles.taskTitleCheck}>
                <CheckBox
                    style={styles.checkboxTask}
                    value={task.completed}
                    onValueChange={(value) => checkboxHandler({ check: value, id: task.id })}
                    color={task.completed ? '#213555' : undefined}
                />
                <Text style={[styles.taskText, task.completed && styles.taskTextCompleted]}>{task.task}</Text>
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
        const taskSelected = list.find(task => task.id === id);
        const remainTasks = list.filter(taskList => taskList.id !== taskSelected.id);
        const orderedList = [
            ...remainTasks,
            {
                ...taskSelected,
                completed: check
            }
        ].sort(function (a, b) {
            if (a.completed && !b.completed) {
                return 1;
            }
            if (!a.completed && b.completed) {
                return -1;
            }
            return 0;
        })
        setList(orderedList);
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
                    renderItem={({ item }) => ItemTask({ task: item, checkboxHandler })}
                />
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
    taskTextCompleted: {
        color: "#D8C4B6",
        textDecorationLine:"line-through"
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