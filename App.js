
import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
} from 'react-native';

import WelcomeScreen from './src/components/welcomeScreen';
import QuizScreen from './src/components/quiz';
import ScoreCardScreen from './src/components/scorecard';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    <StatusBar barStyle="dark-content" />
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Score" component={ScoreCardScreen} /> 
      </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;
