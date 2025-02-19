import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GifScreen from './Gif';
import HomeScreen from './Home';
import VideoScreen from './Video';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Video" component={VideoScreen} />
      <Stack.Screen name="Gif" component={GifScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
