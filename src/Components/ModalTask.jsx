import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import { faXmark, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'

const ModalTask = ({
    modalTaskVisible,
    setModalTaskVisible,
    taskActive,
    taskChangeHandler,
    deletedModalHandler
}) => {
    const onCheckHandler = () => {
        taskChangeHandler({ key: "completed", value: true, id: taskActive.id });
        setModalTaskVisible(!modalTaskVisible);
    }
    const onDeleteHandler = () => {
        deletedModalHandler(taskActive);
        setModalTaskVisible(!modalTaskVisible);
    }
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalTaskVisible}
            onRequestClose={() => {
                setModalTaskVisible(!modalTaskVisible);
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
                            onPress={() => setModalTaskVisible(!modalTaskVisible)}>
                            <FontAwesomeIcon icon={faXmark} size={20} color='#F5EFE7'></FontAwesomeIcon>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonComplete]}
                            onPress={onCheckHandler}>
                            <FontAwesomeIcon icon={faCheck} size={20} color='#F5EFE7'></FontAwesomeIcon>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonDelete]}
                            onPress={onDeleteHandler}>
                            <FontAwesomeIcon icon={faTrash} size={20} color='#F5EFE7'></FontAwesomeIcon>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalTask

const styles = StyleSheet.create({
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