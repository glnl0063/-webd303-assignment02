// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {Alert, SafeAreaView, ScrollView, StyleSheet} from "react-native";

// import custom components from component folder 
import CategoryHeader from "../components/CategoryHeader";
import FavouriteCard from "../components/FavouriteCard";

// import flat list icon from gesture handler library
import {FlatList} from "react-native-gesture-handler";

// import firebase credentials
import firebase from "../firebase"; 

// import animatable
import * as Animatable from "react-native-animatable";


/* COLLECTION SCREEN */ 
export default class CollectionsScreen extends Component {

    // set reference to firebase database
    favDatabase = firebase.database();

    // initial states and bind functions
    constructor(props) {
        super(props); 
        this.state = {
          isLoading: true,
          favDrinks: [], 
        }
        this.deleteFavourite=this.deleteFavourite.bind(this);    
    }

    // created function that takes data and deletes card
    deleteFavourite(data) {

      // created constant that refers to URL with the clicked drink's id
      const favReference = this.favDatabase.ref("favourites").child(data["idDrink"]); 
      
      // read through the firebase data once
      favReference.once("value").then(snapshot => { 

        // if there is a URL with an ID that matches the clicked drink
        if (snapshot.val()) {

          // show alert message
          Alert.alert(
            "Confirm Deletion",
            "Are you sure you want to delete " + data["strDrink"] + "?",
            [
              // if user clicks cancel, return to page
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              // if user clicks okay, delete clicked beverage from database
              {
                text: 'OK', 
                onPress: () => this.favDatabase.ref("favourites/" + data["idDrink"]).set(null)
              },
            ],
            {cancelable: false},
          );

        // if there is no URL with an ID that matches the clicked drink           
        } else {

          // show an alert
          Alert.alert("You have no favourite beverages");
        
        }

      })      

    }

    componentDidMount() {

      // listen for data changes in favourites database
      this.favDatabase.ref("favourites").on("value", favDrinks => {
        
        // declare constant that extracts a JavaScript value from snapshot in firebase 
        const favJSON = favDrinks.val();

        // if there is something in the real time database
        if (favJSON) {

          // convert data from snapshot to a list of items
          const favList = Object.keys(favJSON).map(key => ({
            ...favJSON[key],
            uid: key
          })); 

          // set the fav drink array to the converted list of items
          this.setState({
            favDrinks: favList
          });           
        
        // if there is nothing in the real time database
        } else {
          
          // set the fav drink array to empty
          this.setState({
            favDrinks: []
          });            
        }

      }); 

    }

  render() {

    // return the following
    return (

      // pass data from parent to child component (VerticalRestaurantCard.js)          
      <SafeAreaView style={style.container}>
        <ScrollView>

          <CategoryHeader 
            headerName="Favourite Drinks"
          />            

          <FlatList style={style.drinksContainer}
            columnWrapperStyle={{justifyContent:'space-between'}}
            numColumns={2}
            data={this.state.favDrinks}
            renderItem={({item, index}) =>

              // each card has a delayed animation; data passed from parent to child component
              <Animatable.View animation="fadeInUp" delay={100 * index} useNativeDriver={true}>
                <FavouriteCard           
                  deleteFunction={() => {this.deleteFavourite(item)}}
                  drinkId={item.idDrink}
                  drinkImage={item.strDrinkThumb}
                  drinkName={item.strDrink}
                  drinkType={item.drinkCategory}
                />
              </Animatable.View>        

            }
            // this gives each card an unique key
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