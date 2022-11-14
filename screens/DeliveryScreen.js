import { StyleSheet, Text, View,KeyboardAvoidingView } from 'react-native'
import React, {useState, useEffect} from 'react'

const DeliveryScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? "padding" : "height"}>
        <View>
            <Text>deliveryScreen</Text>
        </View>
    </KeyboardAvoidingView>
  )
}

export default DeliveryScreen

const styles = StyleSheet.create({})