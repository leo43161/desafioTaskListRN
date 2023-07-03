import { StyleSheet, View, Text} from 'react-native'
import React, { useState } from 'react'
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
})