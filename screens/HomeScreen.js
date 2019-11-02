// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {ScrollView, SafeAreaView, StyleSheet} from "react-native";

// import custom components from component folder 
import CategoryButton from "../components/CategoryButton";
import CategoryHeader from "../components/CategoryHeader";
import Hero from "../components/Hero";

// import constants - provides system information (deviceName, platform & model, statusBarHeight, systemFonts, etc.)
import Constants from "expo-constants";

// import animatable
import * as Animatable from "react-native-animatable";


/* HOMESCREEN */
export default class HomeScreen extends Component {

    render() {

    // return the following...
    return (
     
      <SafeAreaView style={style.container}>
        <ScrollView>

            <Hero/>

            <CategoryHeader 
                headerName="Categories"
            />

            <Animatable.View animation="fadeInLeftBig" delay={100 * 1} useNativeDriver={true}>
                <CategoryButton
                    // pass props to child component to make beer category button
                    navigationPath={() => {this.props.navigation.navigate("Beers"); }}
                    buttonImage={{uri: "https://images.unsplash.com/photo-1518099074172-2e47ee6cfdc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1425s&q=50"}}
                    categoryName="Beers"
                    beverageTotal="13"
                />
            </Animatable.View>

            <Animatable.View animation="fadeInLeftBig" delay={100 * 2} useNativeDriver={true}>
                <CategoryButton
                    // pass props to child component to make cocktails category button
                    navigationPath={() => {this.props.navigation.navigate("Cocktails"); }}
                    buttonImage={{uri: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1425&q=80"}}
                    categoryName="Cocktails"
                    beverageTotal="95"
                />  
            </Animatable.View>            

            <Animatable.View animation="fadeInLeftBig" delay={100 * 3} useNativeDriver={true}>
                <CategoryButton
                    // pass props to child component to make cocoa category button
                    navigationPath={() => {this.props.navigation.navigate("Cocoa"); }}
                    buttonImage={{uri: "https://images.unsplash.com/photo-1488153074946-0d3b1bcd029c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}}
                    categoryName="Cocoa"
                    beverageTotal="9"
                />
            </Animatable.View>   

            <Animatable.View animation="fadeInLeftBig" delay={100 * 4} useNativeDriver={true}>
                <CategoryButton
                    // pass props to child component to make party drinks category button
                    navigationPath={() => {this.props.navigation.navigate("PartyDrinks"); }}
                    buttonImage={{uri: "https://images.unsplash.com/photo-1560963689-49e1effbf59b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1086&q=80"}}
                    categoryName="Punch/Party Drinks"
                    beverageTotal="39"
                />   
            </Animatable.View>

            <Animatable.View animation="fadeInLeftBig" delay={100 * 5} useNativeDriver={true}>
                <CategoryButton
                    // pass props to child component to make shots category button
                    navigationPath={() => {this.props.navigation.navigate("Shots"); }}
                    buttonImage={{uri: "https://images.unsplash.com/photo-1541975902628-b157a9411603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80"}}
                    categoryName="Shots"
                    beverageTotal="51"
                />
            </Animatable.View>                                                   

        </ScrollView>
      </SafeAreaView>
      
    );

  }
  
}

/* STYLESHEET */
const style = StyleSheet.create({

    // container of whole page
    container: {
        flex: 1, 
        marginTop: Constants.statusBarHeight
    }
   
});