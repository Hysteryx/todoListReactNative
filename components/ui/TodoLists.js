import React from "react"
import {FlatList, StyleSheet, View} from 'react-native'

import TodoListItem from "./TodoListItem"

export default function TodoLists(props) {
    return (
        <View style={styles.container}>
            <FlatList  
                data={props.data}
                renderItem={({ item }) => <TodoListItem item={item} delete={props.delete} navigation={props.navigation} />}
                numColumns={3}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})