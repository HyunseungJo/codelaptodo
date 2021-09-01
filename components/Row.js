import React from "react"
import {View,StyleSheet} from "react-native"
function Row({children,style}){
    const defaultStyle={flexDirection:"row"}
    return(
        <View style={[styles.row, style]}>
            {children}
        </View>
    )
}
export default Row

const styles= StyleSheet.create({
    row:{
        flexDirection:"row"
    },

})