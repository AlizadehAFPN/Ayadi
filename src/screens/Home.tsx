import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { HomeScreenProps } from '../types';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const isValidUrl = (url: string) => {
    const regex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/;
    return regex.test(url);
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const [video, setVideo] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const videoUrl = useSelector((state: RootState) => state.video.url);

    const onPressBtn = () => {
        if (!video.trim()) {
            setError('URL cannot be empty');
            return;
        }
        if (!isValidUrl(video)) {
            setError('Invalid URL. Please enter a valid link.');
            return;
        }
        setError(null);
        navigation.navigate('Video', { videoUrl: video }); // Pass the video URL
    };

    const handleTextChange = (text: string) => {
        setVideo(text);
        setError(null);
    };

    useEffect(() => {
        if (!videoUrl)
            {handleTextChange('');}
    }, [videoUrl]);
    console.log(video, 'video');
    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={handleTextChange}
                placeholderTextColor="gray"
                placeholder="Please Enter the Video URL"
                value={video}
                style={styles.input}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
            <TouchableOpacity onPress={onPressBtn} style={styles.saveButton}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
