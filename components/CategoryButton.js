// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {Text, View, TouchableHighlight, ImageBackground, StyleSheet} from "react-native";

// import icons from Ionicons
import {Ionicons} from "@expo/vector-icons";


/* CATEGORY BUTTON */
export default class CategoryButton extends Component {

    render() {

    // return the following...
    return (

        // when user clicks button, navigate to specific screen in stack navigation
        <TouchableHighlight onPress={this.props.navigationPath}>
            <ImageBackground style={style.backgroundImage} source={this.props.buttonImage}>
                <View style={style.buttonContainer}>
                    <View style={style.titleContainer}>
                        <Text style={style.buttonTitle}>{this.props.categoryName}</Text>
                    </View>
                    <View style={style.infoContainer}>
                        <Text style={style.selectionTotal}>{this.props.beverageTotal}</Text>
                        <Text style={style.buttonSubtitle}>Drinks</Text>
                    </View>
                    <View style={style.arrowContainer}>
                        <Ionicons name="ios-arrow-forward" size={32} color="#CD9800"/>
                    </View>                          
                </View>
            </ImageBackground>
        </TouchableHighlight>

    );

  }

}

/* STYLESHEET */ 
const style = StyleSheet.create({

    // button background
    backgroundImage: {
        height: 100, 
        width: "100%"
    }, 

    // button container w black transparent background
    buttonContainer: {
        alignItems: "center", 
        backgroundColor: "rgba(0,0,0,.4)",
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "flex-start", 
        height: 100, 
        width: "100%"
    },   

    // title section
    titleContainer: {
        marginLeft: 10, 
        width: "75%"
    }, 

    buttonTitle: {
        color: "white", 
        fontWeight: "bold",
        fontSize: 25
    }, 

    // details section
    selectionTotal: {
        color: "#d3d3d3", 
        fontSize: 20, 
        fontWeight: "bold"
    }, 

    buttonSubtitle: {
        color: "#d3d3d3"
    }, 

    // container w arrow
    arrowContainer: {
        marginLeft: 15
    }
 
});