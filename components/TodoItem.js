import React,{useState} from "react"
import {Text,Switch} from "react-native"
import Row from "./Row"
function TodoItem({label}){
    const [isDone,setIsdone] = useState(false)
    return(
        <>
            <Row style={{alignItems:"center", marginBottom:12}}>
                <Switch 
                    value={isDone} 
                    style={{marginRight:8}}
                    onValueChange={value =>setIsdone(value)}
                    />
                <Text style={{color:isDone?"#eee":"#000"}}>{label?label:"(내용없음)"}</Text>
            </Row>
            
        </>
    )
}
export default TodoItem