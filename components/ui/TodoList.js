import React, {useState, useContext, useEffect} from "react"
import { View, TextInput, Button, Text, FlatList, StyleSheet} from 'react-native'

import { TokenContext } from '../../Context/Context'

import TodoItem from './TodoItem'
import ProgressBar from './ProgressBar'
import { createTodo,updateTodo, deleteTodo } from "../api/todo"
import { exportHTML } from "../../utils/export/exportHTML"

export default function TodoList(props) {

    const [todos, setTodoData] = useState([])
    const [cpt, setCpt] = useState(0)
    const [newTodoText, setNewTodoText] = useState('')
    const [filter, setFilter] = useState('all')

    const [token] = useContext(TokenContext)

    useEffect(() => {
        setTodoData(props.data)
        setCpt(props.data.filter((item)=>item.done).length)
    }, [props.data])

    const refreshNumber = (id, state) => {
        todos.find((item) => item.id === id).done = state
        setCpt(todos.filter((item)=>item.done).length)
        updateTodo(id, state, token)
    }

    const deleteHandler = (id) => {
        const newTodo = todos.filter((item) => item.id !== id)
        setTodoData(newTodo)
        setCpt(newTodo.filter((item)=>item.done).length)
        deleteTodo(id, token)
    }

    const addNewTodo = async () => {
        if(newTodoText === '') return
        const newTodo = await createTodo(newTodoText, props.listId, token)
        console.log(JSON.stringify(newTodo))
        setTodoData([...todos, newTodo])
        setNewTodoText('')
        
    }

    const filterTodos = () => {
        switch(filter) {
            case 'all':
                return todos
            case 'done':
                return todos.filter((item) => item.done)
            case 'undone':
                return todos.filter((item) => !item.done)
        }
    }

    const putAllToAState = (state) => {
        setTodoData(todos.map((item) => {
            item.done = state
            return item 
        }))
        setCpt(state ? todos.length : 0)
    }

    const Spacer = ({ size = 10}) => <View style={{ height: size, width: size}} />;

    return (
        <View style={styles.container}>
            <Spacer/>
            <Button title="Afficher tout" onPress={() => {setFilter("all")}} />
            <Spacer/>
            <Button title="Afficher les complétés" onPress={() => {setFilter("done")}} />
            <Spacer/>
            <Button title="Afficher les non complétés" onPress={() => {setFilter("undone")}} />
            <Spacer size={20}/>
            <View style={styles.btnContainer}>
                <Button title="Cocher tout" onPress={() => {putAllToAState(true)}} />
                <Spacer/>
                <Button title="Decocher tout" onPress={() => {putAllToAState(false)}} />
            </View>

            <FlatList
                style={{ margin: 10 }}
                data={filterTodos()}
                renderItem={({item}) => (
                    <TodoItem item={item} refreshNumber={refreshNumber} onDelete={deleteHandler}/>
            )}/>

            <ProgressBar 
                progress = {((cpt/todos.length)*100).toFixed(0)}
            />
            <Text>{cpt} done</Text>


            <TextInput
                style={styles.input}
                onChangeText={setNewTodoText}
                placeholder='saisir ici un nouvel item'
                onSubmitEditing={addNewTodo}
                value={newTodoText}
            />
            <Button 
                title="Ajouter un item" 
                onPress={addNewTodo} 
            />
            <Spacer/>
            <Button
                title="Export"
                onPress={() => {exportHTML(todos) }}
            />
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
    btn: {
        padding: 10,
    },
    btnContainer : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        margin: 10,
    }
})