import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import CheckBox from 'expo-checkbox';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'


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

export default ItemTask

const styles = StyleSheet.create({
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