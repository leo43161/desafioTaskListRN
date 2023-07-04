import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'

const ModalDeleted = ({
    modalDeleteVisible,
    setModalDeleteVisible,
    taskDeleted,
    deleteTaskHandler
}) => {
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalDeleteVisible}
            onRequestClose={() => {
                setModalDeleteVisible(!modalDeleteVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.titleText}>Desea eliminar esta tarea?</Text>
                    <View style={styles.modalTaskContainer}>
                        <Text style={styles.taskText}>{taskDeleted.task}</Text>
                    </View>
                    <View style={styles.modalButtonContainer}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalDeleteVisible(!modalDeleteVisible)}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonDelete]}
                            /* onPress={() => taskChangeHandler({ key: "deleted", value: true, id: taskDeleted.id })} */
                            onPress={deleteTaskHandler}
                        >
                            <Text style={styles.buttonText}>Eliminar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalDeleted

const styles = StyleSheet.create({
    /* Modal Styles */
    taskText: {
        fontSize: 20,
        fontWeight: "500",
        color: "#213555",
    },
    titleText: {
        fontSize: 21,
        fontWeight: "500",
        color: "#F5EFE7",
        marginBottom: 10
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "500",
        color: "#F5EFE7",
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