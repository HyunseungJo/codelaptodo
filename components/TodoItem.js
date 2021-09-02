import React,{useState} from "react"
import {Text,Switch,Button} from "react-native"
import Row from "./Row"
function TodoItem({label,id,deleteItem,onSwitchChange,isDone}){
    return(
        <>
            <Row style={{alignItems:"center", marginBottom:12}}>
                <Switch 
                    value={isDone} 
                    style={{marginRight:8}}
                    onValueChange={value =>onSwitchChange(id,value)}
                    />
                <Text style={{color:isDone?"#eee":"#000",flex:1}}>{label?label:"(내용없음)"}</Text>
                <Button title="삭제" onPress={()=>deleteItem(id)}/>
            </Row>
            
        </>
    )
}
export default TodoItem