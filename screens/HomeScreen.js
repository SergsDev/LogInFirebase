import { StyleSheet, Text, TouchableOpacity, View, ImageBackground,Image } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'

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

  const image = {uri: 'https://i.imgur.com/Px03Guk.png'};

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.imagebg}>
        
      
      <Text style={styles.textGreet}>Tus medicamentos, Faciles!</Text>
      <TextInput placeholder='Buscar medicinas' style={styles.search}></TextInput>

      <Image style={styles.flyer} source={{uri: 'https://i.imgur.com/rsBfFNT.png'}}></Image>
      </ImageBackground>
      {/* <Text>Esta es la homescreen de: {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
      <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={changeDeliveryScreen}>
        <Text style={styles.buttonText}>Cambiar a DeliveryScreen</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    imagebg:{
      flex:1,
      width:'100%',
    },

    textGreet:{
      paddingTop: 100,
      width: '80%',
      fontFamily: 'Roboto',
      color: '#012030',
      fontWeight: 'bold',
      fontSize: 26,
      margin: 15,
    },
    search:{
      padding: 15,
      backgroundColor: '#f2f2f2',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '##012030',
      margin: 15,
    },

    flyer: {
      
      width: '100%',
      margin: 15,
      height: 150,
      borderWidth: 1,
      borderRadius: 10,
    }
})