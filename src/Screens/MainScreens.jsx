import { StyleSheet, View, Text, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import { faXmark, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import TopBar from '../Components/TopBar';
import Lista from '../Components/Lista';

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
            <Lista checkboxHandler={checkboxHandler} taskHandler={taskHandler} list={list}></Lista>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalTaskContainer}>
                            <Text style={styles.taskText}>{taskActive.task}</Text>
                        </View>
                        <View style={styles.modalButtonContainer}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <FontAwesomeIcon icon={faXmark} size={20} color='#F5EFE7'></FontAwesomeIcon>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonComplete]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <FontAwesomeIcon icon={faCheck} size={20} color='#F5EFE7'></FontAwesomeIcon>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonDelete]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <FontAwesomeIcon icon={faTrash} size={20} color='#F5EFE7'></FontAwesomeIcon>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
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
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})