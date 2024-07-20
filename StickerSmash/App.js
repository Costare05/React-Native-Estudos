import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
// https://docs.expo.dev/tutorial/image-picker/ -> Parei aqui
const placeholderImage = require('./assets/images/background-image.png')

export default function App() {
  return (
    <View style={styles.container}>
      <view style = {styles.imageContainer}>
        <ImageViewer placeholderImageSource={placeholderImage}/>
      </view>
      <View style={styles.footerContainer}>
        <Button label = "Choose a photo" theme="primary"/>
        <Button label = "Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center'
  },
});
