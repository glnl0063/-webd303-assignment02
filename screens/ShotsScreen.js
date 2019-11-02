// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {Alert, SafeAreaView, ScrollView, StyleSheet} from "react-native";

// import custom components from component folder 
import BeverageCard from "../components/BeverageCard";

// import flat list icon from gesture handler library
import {FlatList} from "react-native-gesture-handler";

// import firebase credentials
import firebase from "../firebase"; 

// import animatable
import * as Animatable from "react-native-animatable";


/* SHOTS SCREEN */ 
export default class ShotsScreen extends Component {

    // set reference to firebase database
    favDatabase = firebase.database();

    // initial states and bind functions
    constructor(props) {
      super(props); 
      this.state = {
        isLoading: true,
        favDrinks: {}, 
      }
      this.addFavourite=this.addFavourite.bind(this); 
    }

    // created function that takes data and adds beverage to favourites in collection screen
    addFavourite(data) {

      // created constant that refers to URL with the clicked drink's id
      const favReference = this.favDatabase.ref("favourites").child(data["idDrink"]); 
      
      // read through the firebase data once
      favReference.once('value').then(snapshot => { 

        // if there is no URL with an ID that matches the clicked drink
        if (snapshot.val() === null ) {

          // add the clicked beverage to the database
          this.favDatabase.ref("favourites/" + data["idDrink"]).set({
            idDrink: data["idDrink"], 
            strDrink: data["strDrink"], 
            strDrinkThumb: data["strDrinkThumb"],
            drinkCategory: "Shots"
          });

          // show alert message
          Alert.alert("Drink Added", data["strDrink"] + " is added in your favourites list!");          
        
        // if there is a URL with an ID that matches the clicked drink           
        } else {

          // show alert message 
          Alert.alert("Drink Found", data["strDrink"] + " is already in your favourites list!");
        }

      })      

    }

    componentDidMount() {

      // listen for data changes in favourites database
      this.favDatabase.ref("favourites").on("value", favDrinks => {

        // declare constant that extracts a JavaScript value from snapshot in firebase 
        const favJSON = favDrinks.val(); 
        
        // set the fav drink array to data from firebase or nothing if firebase is empty
        this.setState({
          favDrinks: favJSON === null ? {} : favJSON 
        }); 

      }); 

      // fetch data from cocktail database api and filter to show only drinks from shot category 
      // take response anad parse body text to json
      // set json to datasource variable
      // if there is an error, console log the error
      fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?c=Shot", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
          "x-rapidapi-key": "88e4d4f893msh3f275f0ac0ee03bp1d529ejsnccaa14f65abb"
        },
      })
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({
            isloading: false, 
            dataSource: responseJson.drinks
          });
      })
      .catch((error) => {
            console.error(error); 
      })

    }

  render() {

    // return the following...
    return (

      <SafeAreaView style={style.container}>
        <ScrollView>

          <FlatList
            columnWrapperStyle={{justifyContent:'space-between'}}
            numColumns={2}
            data={this.state.dataSource}
            renderItem={({item, index}) =>

              // each card has a delayed animation; data passed from parent to child component
              <Animatable.View animation="fadeInUp" delay={100 * index} useNativeDriver={true}>
                <BeverageCard 
                  cardFunction={() => {this.addFavourite(item)}}
                  drinkId={item.idDrink}
                  drinkImage={item.strDrinkThumb}
                  drinkName={item.strDrink}
                  iconType="bookmark-border"
                />              
              </Animatable.View> 
      
            }
            // this gives each item an unique key
            keyExtractor={({id}, index) => index.toString()}
          /> 

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
  }

});