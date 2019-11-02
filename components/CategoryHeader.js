// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {View, Text, StyleSheet} from "react-native";


/* CATEGORY HEADER */ 
export default class CategoryHeader extends Component {

    render() {

    // return the following...
    return (

        <View style={style.container}>
            <Text style={style.headerName}>{this.props.headerName}</Text>            
        </View>

    );

  }

}

/* STYLESHEET */ 
const style = StyleSheet.create({

    // content w transparent black background
    container: {
        // alignItems: "center",
        backgroundColor: "rgba(3,3,2,0.9)",
        display: "flex",
        height: 30,  
        justifyContent: "center",        
        width: "100%"
    },

    // header
    headerName: {
        color: "#d3d3d3",
        fontSize: 20, 
        fontWeight: "bold",
        marginLeft: 10,
        textTransform: "capitalize",
    }
   
});