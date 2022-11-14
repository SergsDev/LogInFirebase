import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
    .signOut()
    .then (() => {
      navigation.replace('Login')
    })
    .catch(error => alert(error.message))

  }

  const changeDeliveryScreen = () => {
    navigation.navigate('deliveryScreen')
  }
  return (
    <View style={styles.container}>
      <Text>Esta es la homescreen de: {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={changeDeliveryScreen}>
        <Text style={styles.buttonText}>Cambiar a DeliveryScreen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    backgroundColor: '#3E6E8C',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40
},

buttonText:{
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
},
})