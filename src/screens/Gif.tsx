import React from 'react';
import { Text, View } from 'react-native';
import { GifScreenProps } from '../types';
import { styles } from './styles';
import FastImage from 'react-native-fast-image';

const GifScreen: React.FC<GifScreenProps> = () => {
  return (
    <View style={styles.container}>
      <FastImage
        source={{ uri: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWJua2VldTRrb28ybmQ1dW0wNWZqMGtxeGtpaGNqNnRzdnlobWlmaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JIX9t2j0ZTN9S/giphy.gif' }}
        style={styles.video}
        resizeMode={FastImage.resizeMode.contain}
        />
        <Text>Do some development and then come back to the video </Text>
    </View>
  );
};
export default GifScreen;
