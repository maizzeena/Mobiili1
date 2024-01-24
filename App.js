import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [message1, setMessage1] = useState('');
  const [message2, setMessage2] = useState('');
  const [message3, setMessage3] = useState('')
  const showAlert1 = () => {
    Alert.alert(message1 + message2);
  }
  const showAlert2 = () => {
    Alert.alert(message1 - message2);
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Result: </Text>
        <TextInput
          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => setMessage1(text)}
          inputMode='numeric'
        />
        <TextInput
          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => setMessage2(text)}
          inputMode='numeric'
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <Button title="+" onPress={showAlert1} color="#e7a7fa" />
          <Button title="-" onPress={showAlert2} />
          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
