import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './navigation/index'
import ConnectionScreen from './containers/connection';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Tabs/> */}
      <ConnectionScreen />
    </NavigationContainer>
  );
}

export default App;