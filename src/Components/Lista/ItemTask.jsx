import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import CheckBox from 'expo-checkbox';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'

const ItemTask = ({
    task,
    taskChangeHandler,
    taskHandler,
    deletedModalHandler
}) => {
    return (
        <Pressable onPress={() => taskHandler(task)}>
            <View style={styles.taskContainer} onPress={() => taskHandler(task)}>
                <View style={styles.taskTitleCheck}>
                    <CheckBox
                        style={styles.checkboxTask}
                        value={task.completed}
                        onValueChange={(value) => taskChangeHandler({ key: "completed", value, id: task.id })}
                        color={task.completed ? '#213555' : undefined}
                    />
                    <Text style={[styles.taskText, task.completed && styles.taskTextCompleted]}>{task.task}</Text>
                </View>
                <TouchableOpacity style={styles.taskDeletedButton} onPress={() => deletedModalHandler(task)}>
                    <FontAwesomeIcon icon={faTrash} size={18} color='#F5EFE7' />
                </TouchableOpacity>
            </View>
        </Pressable>
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
        marginBottom: 15,
        maxHeight: 200
    },
    taskTitleCheck: {
        flexDirection: "row",
        alignItems: "center",
        flexShrink: 1,
        paddingEnd: 10
    },
    taskText: {
        fontSize: 20,
        fontWeight: "500",
        color: "#F5EFE7",
        flexShrink: 1
    },
    taskTextCompleted: {
        color: "#D8C4B6",
        textDecorationLine: "line-through"
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