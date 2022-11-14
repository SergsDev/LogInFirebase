import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
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
                navigation.replace('HomeScreen')
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
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? "padding" : "height"}>
        <View style={styles.inputContainer}>
            <Image 
            style={styles.logo}
            source={{uri: 'https://i.imgur.com/yWGIIZw.png'}}
            ></Image>

            <TextInput placeholder='Correo Electronico' placeholderTextColor={'#027373'}
            value={email} onChangeText={text => setEmail(text)}
            style={styles.input}
            />

            <TextInput placeholder='Contraseña' placeholderTextColor={'#027373'}
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
        backgroundColor: '#F2E7DC',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#0D0D0D'
    },
    
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#A9D9D0',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: '#f2f2f2',
        marginTop: 5,
        borderColor: '#A9D9D0',
        borderWidth: 2,
    },
    buttonText:{
        color: '#f2f2f2',
        fontWeight: '700',
        fontSize: 18,
    },
    buttonOutlineText: {
        color: '#A9D9D0',
        fontWeight: '700',
        fontSize: 18,
    },

    logo:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 300,
    },



})