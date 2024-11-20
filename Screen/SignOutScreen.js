import React from 'react'
import { StyleSheet ,Button, View, Text } from 'react-native'

import {TokenContext, UsernameContext} from '../Context/Context'

export default function SignOutScreen({ navigation, route }) {
    return (
        <TokenContext.Consumer>
            {([token, setToken]) => (
                <UsernameContext.Consumer>
                    {([username, setUsername]) => {
                        return (
                            <View style={styles.container}>
                                <View style={styles.containerText}>
                                    <Text style={styles.textDisc}>🇫🇷 Vous allez vous deconnecter</Text>
                                    <Text style={styles.textDisc}>🇬🇧 You will disconnect</Text>
                                </View>
                                <Button
                                    style={styles.button}
                                    title='Sign out'
                                    onPress={() => {
                                        setUsername(null)
                                        setToken(null)
                                    }}
                                />
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
        marginTop: 80,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    button: {
        marginTop: 16,
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 25,
    },
    containerText: {
        padding: 10,
        marginTop: 20,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textDisc: {
        fontSize: 14,
        fontWeight: 'bold',
    }
});