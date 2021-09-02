import React,{useCallback, useEffect, useState} from 'react';
import { FlatList,StyleSheet, Text, View , SafeAreaView, Platform, TextInput, Button, Alert} from 'react-native';
import TodoItem from '../components/TodoItem';
import Row from "../components/Row"
import Padding from "../components/Padding"
import AsyncStorage from '@react-native-async-storage/async-storage';
import produce from "immer"

function updateStorage(data){
    return AsyncStorage.setItem('todo-list',JSON.stringify(data))
  }

export default function TodoList(){
    const [list,setList] =useState([
        {key:"1", content:"할 일1"},
        {key:"2", content:"할 일2"}
    ])
    const [inputText,setInputText]=useState("")
    const addItem= useCallback(()=>{
        const item={
        key:new Date().toString(), 
        content:inputText,
        isDone:false
        }
        const newData=[...list,item]
        setList(newData)
        updateStorage(newData)
        setInputText("")
    },[list,inputText])
    const deleteItem=useCallback((key)=>{
        const newData =list.filter(item=>item.key !==key)
        setList(newData)
        updateStorage(newData)
    },[list])
    const updateItem = useCallback((key,value)=>{
        const newList=produce(list,draft=>{
        const index=list.findIndex(item=>item.key===key)
        draft[index].isDone=value
        })
        setList(newList)
        updateStorage(newList)
    },[list])
    
    useEffect(()=>{
        AsyncStorage.getItem('todo-list').then(rawData=>{
        if(rawData){
            setList(JSON.parse(rawData))
        }else{
            setList([])
        }
        })
    },[])
    return(
        <Padding padding={20} style={{flex:1}}>
            <FlatList
                data={list}
                renderItem={item =>
                    <TodoItem 
                        id={item.item.key}
                        label={item.item.content} 
                        deleteItem={deleteItem}
                        isDone={item.item.isDone}
                        onSwitchChange={updateItem}
                    /> 
                }
                style={{flex:1}}
                />
            <Row>
                <TextInput 
                style={styles.input}
                value={inputText}
                onChangeText={text=>setInputText(text)}
                />
                <Button title="Send" onPress={addItem}/>
            </Row>
        </Padding>
    )
}
const styles = StyleSheet.create({
    input:{
      flex:1,
      borderWidth:1,
      borderColor:"#000000"
    }
  });
  