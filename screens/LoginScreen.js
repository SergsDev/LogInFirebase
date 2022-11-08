import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, {useState, useEffect} from 'react'
import { withSafeAreaInsets } from 'react-native-safe-area-context'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('Home')
            }
        })

        return unsuscribe
    }, [])

    //metodo para manejar registro
    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))

    }
    //metodo para manejar log in
    const handleLogIn = () => {
        auth
        .signInWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Sesion iniciada como: ', user.email)
        })
        .catch(error => alert(error.message))
    }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
            <TextInput placeholder='Correo Electronico' 
            value={email} onChangeText={text => setEmail(text)}
            style={styles.input}
            />

            <TextInput placeholder='Contraseña'
            value={password} onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
            />
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity 
            onPress={handleLogIn} 
            style={styles.button}>

                <Text style={styles.buttonText}>Iniciar Sesion</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={handleSignUp}
             style={[styles.button, styles.buttonOutline]}>

                <Text style={styles.buttonOutlineText}>Registrarse</Text>
            </TouchableOpacity>     
        </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#3E6E8C',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#3E6E8C',
        borderWidth: 2,
    },
    buttonText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 18,
    },
    buttonOutlineText: {
        color: '#3E6E8C',
        fontWeight: '700',
        fontSize: 18,
    },


})