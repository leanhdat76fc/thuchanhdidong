import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = (props) => (
    <TouchableOpacity
        onPress={props.onPress}
        style={{
            backgroundColor: '#ff637c',
            alignSelf: "center",
            padding: 10,
            margin: 10,
            ...props.ButtonStyle,
        }}
    >
        <Text style={{ color: "#fff" }}>{props.text}</Text>
    </TouchableOpacity>
);

export default () => (
    <View style={{ flex: 1, justifyContent: "center" }}>
        <CustomButton text="say hello" onPress={() => alert("Hello!")} />
        <CustomButton
            text="say goodbye"
            onPress={() => alert("goodbye")}
            ButtonStyle={{ backgroundColor: "#4dc2c2" }}
        />
    </View>
);
