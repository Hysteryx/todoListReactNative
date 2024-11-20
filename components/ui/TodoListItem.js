import React from "react"
import {TouchableOpacity, StyleSheet} from 'react-native'

import Item from './Item'

export default function TodoListItem (props) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('Details', {id: props.item.id})}>
        <Item
            id={props.item.id}
            title={props.item.title}
            delete={() => props.delete(props.item.id)}
        />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        padding: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
        marginLeft: 10,
        marginRight: 10,
    }
})