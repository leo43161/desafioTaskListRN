import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import ItemTask from './ItemTask'

const Lista = ({
    taskChangeHandler,
    list,
    taskHandler,
    deletedModalHandler
}) => {
    return (
        <View style={styles.taskListContainer}>
            <FlatList
                data={list}
                keyExtractor={(task) => task.id}
                renderItem={({ item }) => ItemTask({ task: item, taskChangeHandler, taskHandler, deletedModalHandler })}
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