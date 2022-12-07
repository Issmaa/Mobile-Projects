import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({ navigation }) => {
  return(
    <View>
      <Button 
      title="Black Panther" 
      onPress={() => navigation.navigate('Profile', { name: 'Black Panther'})}
      />
      <Button 
      title="Black Widow" 
      onPress={() => navigation.navigate('Profile', { name: 'Black Widow'})}
      />
      <Button 
      title="Home" 
      onPress={() => navigation.navigate('Home')}
      />
      <Button 
      title="Push Home" 
      onPress={() => navigation.push('Home')}
      />
      <Button 
      title="Go back" 
      onPress={() => navigation.goBack()}
      />
      <Button 
      title="First Screen" 
      onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

const ProfileScreen = ({ route }) => {
  return (
    <Text>This is {route.params.name}'s profile</Text>
  )
}

const Stack = createStackNavigator();
export default function App() {


  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Welcome amigo',
        headerStyle: {
          backgroundColor: '#DA9'
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
      />
      <Stack.Screen 
      name="Profile"
      component={ProfileScreen}
      />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

// export default function App() {

//   const [text, setText] = useState('')
//   return (
//     <View style={{flex:1}}>
//       <Image source={require('./assets/favicon.png')}/>
//       <TextInput 
//       placeholder='Tap your text'
//       onChangeText={(text) => setText(text)}
//       defaultValue={text}
//       />
//       <Text style={styles.font}>{text.toUpperCase()}</Text>
//       <StatusBar style="auto" />
//         <Text style={styles.red}>{text.toUpperCase()}</Text>
//         <Button 
//         onPress={() => {alert('You click me!')}} 
//         title='Push me'
//         style={styles.font}/>
//         <Pressable style={styles.button} onPress={() => {alert('You click me!')}}>
//       <Text style={styles.text}>Push me</Text>
//     </Pressable>
//     </View>
//   );
// }

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
    height: '20%',
    color: 'white'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
