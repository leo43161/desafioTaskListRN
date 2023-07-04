import { StyleSheet, View, Text } from 'react-native'
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
        setModalTaskVisible(true);
        setTaskActive(task);
    }

    const deletedHandler = (task) => {
        setModalDeleteVisible(true);
        setTaskDeleted(task);
    }

    const deleteTaskHandler = () => {
        const taskFilters = list.filter((item) => item.id !== taskDeleted.id);
        setList(taskFilters);
        console.log(taskFilters);
        console.log(list);
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
                deletedHandler={deletedHandler}
            />
            <ModalTask
                modalTaskVisible={modalTaskVisible}
                setModalTaskVisible={setModalTaskVisible}
                taskActive={taskActive}
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
        paddingTop: 35,
        backgroundColor: "#F5EFE7"
    },
    titleTask: {
        fontSize: 18,
        marginBottom: 10,
        paddingLeft: 10
    },
})