import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View , SafeAreaView, Platform, TextInput, Button} from 'react-native';
import  Constants  from 'expo-constants';
import TodoItem from './components/TodoItem';
import Row from "./components/Row"
import Padding from "./components/Padding"
export default function App() {
  const [list,setList] =useState([
    "할일 1", "할일 2"
  ])
  return (
    <SafeAreaView style={styles.container}>
      <Padding padding={20}>
        {list.map((item)=><TodoItem key={item} label={item}/>)}
        <Row>
          <TextInput style={styles.input}/>
          <Button title="Send" onPress={()=>{}}/>
        </Row>
      </Padding>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS ==='android'?Constants.statusBarHeight : 0
  },
  input:{
    flex:1,
    borderWidth:1,
    borderColor:"#000000"
  }
});
