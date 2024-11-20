import React, { useState, useContext } from "react"
import {View, TextInput, Button, StyleSheet } from 'react-native'
import { createTodoList } from "../api/todoList"

import { UsernameContext, TokenContext } from "../../Context/Context"

export default function Input() {

    const [newTodoText, setNewTodoText] = useState('')
    const [username] = useContext(UsernameContext)
    const [token] = useContext(TokenContext)

    function prepareTodoList() {
        if (newTodoText === '') return
        createTodoList(username, newTodoText,token)
    }

    return (
        <View style={styles.container}> 
            <TextInput
                style={styles.input}
                placeholder="Ajouter une liste"
                onChangeText={(text) => setNewTodoText(text)}
            />
            <Button style={styles.button} title="Ajouter" onPress={prepareTodoList} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
})