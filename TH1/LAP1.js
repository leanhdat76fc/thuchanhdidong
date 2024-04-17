import React from "react";
import { View,Text,StyleSheet } from "react-native-web";

const App = ()=>
{
    return(
        <View style={
            MyStyle.ViewStyle
        }>
            <Text style={MyStyle.TextStyle}>Hello Word</Text>
        </View>
    );
}
var MyStyle = StyleSheet.create(
    {
        ViewStyle:{
            while:100,
            height:100,
            backgroundColor:'aqua',
            alignItems:'center',
            justifyContent:'center',
        },
        TextStyle:
        {
            color:'black'
        }
    }
)
export default App;