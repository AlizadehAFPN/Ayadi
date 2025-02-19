import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Video: { videoUrl: string };
  Gif: undefined;
};

export interface VideoState {
  url: string | null;
  lastPosition: number;
  paused:boolean
}

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type VideoScreenProps = NativeStackScreenProps<RootStackParamList, 'Video'>;
export type GifScreenProps = NativeStackScreenProps<RootStackParamList, 'Gif'>;
export type VideoRouteProps = RouteProp<RootStackParamList, 'Video'>
