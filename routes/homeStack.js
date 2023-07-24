import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import GPAcalculator2 from "../src/components/GPAcalculator2";
import GPAcalculator from "../src/screens/GPAcaculator";
import infoScreen from "../src/screens/infoScreen";
import React from "react";
import Header from "../src/shared/header";
import Home from "../src/screens/IntroScreen";
import Year1 from '../src/shared/Year1'
import Year2 from "../src/shared/Year2";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: () => <Header />,
            
        }
    },

    Year3: {
        screen: GPAcalculator,
        navigationOptions: {
            headerTitle: () => <Year1 />
            
        }
    },

    Year1: {
        screen: GPAcalculator2,
        navigationOptions: {
            headerTitle: () => <Year2 />
        }
    },

    info: {
        screen: infoScreen
    }
}
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#2096F3',
            

        }
    }
    
});

export default createAppContainer(HomeStack);