import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, Pressable } from 'react-native';

export default function App() {

  const [text, setText] = useState('')
  return (
    <View style={{flex:1}}>
      <Image source={require('./assets/favicon.png')}/>
      <TextInput 
      placeholder='Tap your text'
      onChangeText={(text) => setText(text)}
      defaultValue={text}
      />
      <Text style={styles.font}>{text.toUpperCase()}</Text>
      <StatusBar style="auto" />
        <Text style={styles.red}>{text.toUpperCase()}</Text>
        <Button 
        onPress={() => {alert('You click me!')}} 
        title='Push me'
        style={styles.font}/>
        <Pressable style={styles.button} onPress={() => {alert('You click me!')}}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
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
  font: {
    flex: 5,
    backgroundColor: 'powderblue',
    fontSize: 16,
    color: 'blue'
  },
  red:{
    backgroundColor: 'skyblue',
    flex: 3,
    color: 'red'
  },
  yellow: {
    flex: 3,
    color: 'yellow',
    backgroundColor: 'steelblue',
    height: '45%'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    height: '50%'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
