import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../Components/TopBar';
import Lista from '../Components/Lista';
import ModalTask from '../Components/ModalTask';
import ModalDeleted from '../Components/ModalDelete';

const MainScreens = () => {
    const [list, setList] = useState([]);
    const [inputAdd, setInputAdd] = useState("");
    const [modalTaskVisible, setModalTaskVisible] = useState(false);
    const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
    const [taskActive, setTaskActive] = useState({});
    const [taskDeleted, setTaskDeleted] = useState({});

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

    const taskChangeHandler = ({ key, value, id }) => {
        const taskSelected = list.find(task => task.id === id);
        const remainTasks = list.filter(taskList => taskList.id !== taskSelected.id);
        const orderedList = [
            ...remainTasks,
            {
                ...taskSelected,
                [key]: value
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

    const taskHandler = (task) => {
        setModalTaskVisible(true);
        setTaskActive(task);
    }

    const deletedModalHandler = (task) => {
        setModalDeleteVisible(true);
        setTaskDeleted(task);
    }

    const deleteTaskHandler = () => {
        const taskFilters = list.filter((item) => item.id !== taskDeleted.id);
        setList(taskFilters);
        setModalDeleteVisible(false);
    }
    const deleteCompletedHandler = () => {
        const taskFilters = list.filter((item) => item.completed !== true);
        setList(taskFilters);
    }

    return (
        <View style={styles.mainContainer}>
            <TopBar
                inputAdd={inputAdd}
                setInputAdd={setInputAdd}
                onAddTask={onAddTask}
            ></TopBar>
            <View style={styles.titleTaskContainer}>
                <Text style={styles.titleTask}>Todas las tareas</Text>
                <TouchableOpacity style={styles.taskDeletedButton} onPress={deleteCompletedHandler}>
                    <Text style={styles.textButton}>Eliminar completadas</Text>
                </TouchableOpacity>
            </View>
            <Lista
                taskChangeHandler={taskChangeHandler}
                taskHandler={taskHandler}
                list={list}
                deletedModalHandler={deletedModalHandler}
            />
            <ModalTask
                modalTaskVisible={modalTaskVisible}
                setModalTaskVisible={setModalTaskVisible}
                taskActive={taskActive}
                taskChangeHandler={taskChangeHandler}
                deletedModalHandler={deletedModalHandler}
            />
            <ModalDeleted
                modalDeleteVisible={modalDeleteVisible}
                setModalDeleteVisible={setModalDeleteVisible}
                taskDeleted={taskDeleted}
                deleteTaskHandler={deleteTaskHandler}
            />
        </View>
    )
}

export default MainScreens

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: "#F5EFE7"
    },
    titleTaskContainer: {
        flexDirection: "row",
        paddingHorizontal: 11,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 13,
    },
    titleTask: {
        fontSize: 18,
    },
    textButton: {
        color: "#FFFFFF",
        fontSize: 13,
        fontWeight: "bold",
    },
    taskDeletedButton: {
        borderRadius: 10,
        paddingHorizontal: 10,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#DC3545",
    },
})