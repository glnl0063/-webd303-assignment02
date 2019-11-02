// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {ImageBackground, View, Text, StyleSheet} from "react-native";


/* HERO CONTENT */ 
export default class Hero extends Component {

    render() {

    // return the following...
    return (

        <ImageBackground style={style.backgroundImage} source={{uri: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"}}>
            <View style={style.container}>
                <Text style={style.companyName}>Potus</Text>            
                <Text style={style.heroText}>Discover and add your favourite alcohol and cocktails</Text>                   
            </View>
        </ImageBackground>

    );

  }

}

/* STYLESHEET */ 
const style = StyleSheet.create({

    // background image
    backgroundImage: {
        height: 300,  
        width: "100%"
    },

    // content w transparent black background
    container: {
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,.4)",
        display: "flex",
        height: 300,  
        justifyContent: "center",        
        width: "100%"
    },

    // company name
    companyName: {
        color: "#CD9800",
        fontSize: 20, 
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "capitalize",
        width: "75%",
    },  

    // hero details
    heroText: {
        color: "white",
        fontSize: 40, 
        fontWeight: "bold",
        textAlign: "center",
        width: "85%",
    },  
   
});