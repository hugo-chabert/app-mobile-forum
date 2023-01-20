import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './navigation/index'
import ConnectionScreen from './containers/connection';
import SignUpScreen from './containers/SignUpScreen';
import NewPostscreen from './containers/Newpost';

const App = () => {
  return (
    <NavigationContainer>
      <Tabs/>
      {/* <ConnectionScreen /> */}
      {/* <SignUpScreen/> */}
      {/* <NewPostscreen/> */}
    </NavigationContainer>
  );
}

export default App;