import { StyleSheet, View, Text, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import { faXmark, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import TopBar from '../Components/TopBar';
import Lista from '../Components/Lista';
import ModalTask from '../Components/ModalTask';

const MainScreens = () => {
    const [list, setList] = useState([]);
    const [inputAdd, setInputAdd] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [taskActive, setTaskActive] = useState({});

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

    const taskHandler = (task) => {
        setModalVisible(true);
        setTaskActive(task);
    }



    return (
        <View style={styles.mainContainer}>
            <TopBar
                inputAdd={inputAdd}
                setInputAdd={setInputAdd}
                onAddTask={onAddTask}
            ></TopBar>
            <Text style={styles.titleTask}>Todas las tareas</Text>
            <Lista
                checkboxHandler={checkboxHandler}
                taskHandler={taskHandler}
                list={list}
            />
            <ModalTask
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                taskActive={taskActive}
            />
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
    titleTask: {
        fontSize: 18,
        marginBottom: 10,
        paddingLeft: 10
    },
    /* Modal Styles */
    taskText: {
        fontSize: 20,
        fontWeight: "500",
        color: "#213555",
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: 300,
        minHeight: 180,
        maxHeight: 400,
        justifyContent: 'space-evenly',
        backgroundColor: '#213555',
        borderRadius: 10,
        paddingHorizontal: 25,
        paddingVertical: 18,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTaskContainer: {
        minHeight: 180,
        maxHeight: 400,
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#D8C4B6',
        width: "100%"
    },
    modalButtonContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: "row",
        width: "100%"
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#6c757d',
    },
    buttonComplete: {
        backgroundColor: '#28a745',
    },
    buttonDelete: {
        backgroundColor: '#DC3545',
    },
})