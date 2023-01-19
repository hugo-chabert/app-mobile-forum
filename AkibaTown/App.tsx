import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './navigation/index'
import ConnectionScreen from './containers/connection';
import SignUpScreen from './containers/SignUpScreen';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Tabs/> */}
      {/* <ConnectionScreen /> */}
      <SignUpScreen/>
    </NavigationContainer>
  );
}

export default App;