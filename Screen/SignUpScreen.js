import React, {useState} from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { TokenContext, UsernameContext } from '../Context/Context'
import { signUp } from '../components/api/sign'

export default function SignUpScreen() {
    let password = ''

    const [error, setError] = useState(false)
    
    return (
        <TokenContext.Consumer>
            {([token, setToken]) => (
                <UsernameContext.Consumer>
                    {([username, setUsername]) => {
                        return (
                            <View style={styles.container}>
                                <Text style={styles.title}>Sign Up</Text>
                                <TextInput style={styles.input}
                                    placeholder='Username'
                                    onChangeText={text => setUsername(text)}
                                />
                                <TextInput style={styles.input}
                                    placeholder='Password'
                                    secureTextEntry={true}
                                    onChangeText={text => password = text}
                                />
                                <Button style={styles.button}
                                    title='Sign Up'
                                    onPress={() => {
                                        signUp(username, password)
                                            .then(token => {
                                                setToken(token)
                                                setUsername(username)
                                            })
                                            .catch(err => {
                                                console.error(err.message)
                                                setError(true)
                                            })
                                    }
                                    }
                                />
                                {error && <Text style={{ color: 'red', marginTop: 10 }}>Invalid username or password</Text>}
                            </View>
                        )
                    }}
                </UsernameContext.Consumer>
            )}
        </TokenContext.Consumer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#333',
    },
    input: {
        width: '75%',
        padding: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    button: {
        marginTop: 16,
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
    },
});