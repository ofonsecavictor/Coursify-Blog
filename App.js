import React from 'react';
import {View, StatusBar} from 'react-native';
import {MainStack} from './src/routes/MainStack';

export default function App() {
  return (
    <View style={{flex: 1}}>
<StatusBar
   backgroundColor="white"
   translucent={true}
   barStyle = "dark-content" 
/>
      <MainStack />
    </View>
  );
}
