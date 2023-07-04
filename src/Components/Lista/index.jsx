import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import ItemTask from './ItemTask'

const Lista = ({
    checkboxHandler,
    list,
    taskHandler,
    deletedHandler
}) => {
    return (
        <View style={styles.taskListContainer}>
            <FlatList
                data={list}
                keyExtractor={(task) => task.id}
                renderItem={({ item }) => ItemTask({ task: item, checkboxHandler, taskHandler, deletedHandler })}
            />
        </View>
    )
}

export default Lista

const styles = StyleSheet.create({
    taskListContainer: {
        flex: 16,
        paddingHorizontal: 10,
    },
})