// import react and the component components from react
import React, {Component} from "react";

// import create app container from react navigation library 
import {createAppContainer} from "react-navigation";

// import stack navigtor from react navigation library 
import {createStackNavigator} from "react-navigation-stack"; 

// import bottom tab navigator from react navigation for tabs library 
import {createBottomTabNavigator} from "react-navigation-tabs";

// import icons from FontAwesome
import {FontAwesome} from "@expo/vector-icons";

// import screens from screen folder
import HomeScreen from './screens/HomeScreen';
import CollectionsScreen from './screens/CollectionsScreen';

// import screens that will be stacked in home screen 
import BeersScreen from "./screens/BeersScreen";
import CocktailScreen from "./screens/CocktailsScreen"; 
import PartyDrinksScreen from "./screens/PartyDrinksScreen"; 
import CocoaScreen from "./screens/CocoaScreen";
import ShotsScreen from "./screens/ShotsScreen";

// combined all screens used for stack navigation and assign to constant
const HomeStack = createStackNavigator({

  Home: {
    // navigate to homepage component
    screen: HomeScreen,
    navigationOptions: {
      // hide header for the homepage by default
      header: null
    }    
  },

  Beers: {
    // navigate to beer component
    screen: BeersScreen,
    navigationOptions: {
      // header text
      headerTintColor: "#FFFAFB",       
      headerTitle: "Beers",
      // header background 
      headerStyle: {
        backgroundColor: "#030302"
      }      
    }
  },

  Cocktails: {
    // navigate to cocktail component
    screen: CocktailScreen,
    navigationOptions: {
      // header text
      headerTintColor: "#FFFAFB", 
      headerTitle: "Cocktails",
      // header background 
      headerStyle: {
        backgroundColor: "#030302"
      }
    }
  }, 

  Cocoa: {
    // navigate to cocoa component
    screen: CocoaScreen,
    navigationOptions: {
      // header text
      headerTintColor: "#FFFAFB",       
      headerTitle: "Cocoa",
      // header background
      headerStyle: {
        backgroundColor: "#030302"
      }
    }
  },  

  PartyDrinks: {
    // navigate to party drink component
    screen: PartyDrinksScreen,
    navigationOptions: {
      // header text      
      headerTintColor: "#FFFAFB",       
      headerTitle: "Punch/Party Drinks",
      // header background     
      headerStyle: {
        backgroundColor: "#030302"
      }      
    }
  }, 

  Shots: {
    // navigate to shots component
    screen: ShotsScreen,
    navigationOptions: {
      // header text
      headerTintColor: "#FFFAFB",       
      headerTitle: "Shots",
      // header background
      headerStyle: {
        backgroundColor: "#030302"
      }      
    }
  },      
  

});


const CollectionStack = createStackNavigator({

  Collections: {
    // navigate to homepage component
    screen: CollectionsScreen,
    navigationOptions: {
      // header text
      headerTintColor: "#FFFAFB",       
      headerTitle: "Collections",
      // header background
      headerStyle: {
        backgroundColor: "#030302"
      }      
    }
  }

});

// create a bottom tab navigator and assign it to constant
const TabNavigator = createBottomTabNavigator ({

  // [name of tab] : [location of screen files]
  Home: HomeStack,
  // Profile: ProfileScreen,
  Collections: CollectionStack 
}, 

{
  // options for navigation
  defaultNavigationOptions: ({navigation}) => ({

    // for the tab bar icons, do the following...
    tabBarIcon: ({tintColor}) => {

      // declared variable and assign the navigation state
      const {routeName} = navigation.state; 

      // declared variable for icon component and set it to font awesome
      let IconComponent = FontAwesome; 

      // declared variable
      let iconName; 

      // if the Home tab is active
      if (routeName === "Home") {

        // set the icon's name to home 
        iconName = "home"; 

      // else if the Profile tab is active
      } else if (routeName === "Collections") {

        // set the icon's name to user
        iconName = "bookmark"; 

      }

      // return icon component with attributes
      return <IconComponent name={iconName} size={25} color={tintColor}/>
    }

  }),

  // option for tab bar 
  tabBarOptions: {
    activeTintColor: "#FFFAFB", 
    labelStyle: {
      fontSize: 12, 
      fontWeight: "bold"
    },
    inactiveTintColor: "#9C6914",
    showIcon: true, 
    style: {
      backgroundColor: "#030302"
    }
  }

}

);

// export the app container and pass in the tab navigator
export default createAppContainer(TabNavigator);