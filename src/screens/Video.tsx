import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import Video, { VideoRef } from 'react-native-video';
import { useSelector, useDispatch } from 'react-redux';
import { setLastPosition, setPaused, setUrl } from '../redux/videoSlice';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { VideoRouteProps, VideoScreenProps } from '../types';
import { RootState } from '../redux/store';
import { styles } from './styles';

const VideoScreen: React.FC<VideoScreenProps> = ({ navigation }) => {

  const dispatch = useDispatch();
  const route = useRoute<VideoRouteProps>();
  const playerRef = useRef<VideoRef>(null);

  const { url: videoUrl, lastPosition, paused } = useSelector((state: RootState) => state.video);

  const [position, setPosition] = useState<number>(lastPosition);

  // Save position when navigating away
  useFocusEffect(
    useCallback(() => {
      dispatch(setPaused(false)); // Resume when screen is focused

      return () => {
        dispatch(setPaused(true)); // Pause when navigating away
        dispatch(setLastPosition(position));
      };
    }, [position, dispatch])
  );

  useEffect(() => {
    // Reset position if URL changes and update Redux state
    if (route.params?.videoUrl && videoUrl !== route.params.videoUrl) {
      setPosition(0);
      dispatch(setUrl(route.params.videoUrl));
    }
  }, [route.params?.videoUrl, videoUrl, dispatch]);

  const handleProgress = (data: { currentTime: number }) => {
    setPosition(data.currentTime);
  };

  return (
    <View style={{...styles.container , justifyContent:'flex-start'}}>
      <Video
        ref={playerRef}
        source={videoUrl ? { uri: videoUrl } : undefined}
        style={styles.video}
        onProgress={handleProgress} // Track video progress
        repeat
        resizeMode="contain"
        onLoad={() => playerRef.current?.seek(position)} // Resume last position
        paused={paused} // Use Redux paused state
        renderLoader={() => (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="red" />
          </View>
        )}
      />
      <View style={styles.buttonView}>
      <TouchableOpacity onPress={() => {
        dispatch(setUrl(null));
        navigation.goBack();
      }} style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        dispatch(setPaused(true)); // Pause the video
        navigation.navigate('Gif');
      }} style={{...styles.editButton , backgroundColor:'green'}}>
        <Text style={styles.editButtonText}>Gif Screen</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default VideoScreen;
