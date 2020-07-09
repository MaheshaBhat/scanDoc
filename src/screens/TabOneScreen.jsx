import React, { createRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  captureBtnContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  captureBtn: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',
    margin: 10
  },
  captureLabel: {
    fontSize: 12
  }
});

const TabOneScreen = ({ navigation }) => {
  const cameraRef = createRef();
  const takePicture = useCallback(async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const photo = await cameraRef.current.takePictureAsync(options);
      // console.log(data.uri);
      navigation.push('preview', { photo });
    }
  }, [cameraRef, navigation]);

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel'
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel'
        }}
        // onGoogleVisionBarcodesDetected={({barcodes}) => {
        //   console.log(barcodes);
        // }}
        captureAudio={false}
      />
      <View style={styles.captureBtnContainer}>
        <TouchableOpacity onPress={takePicture} style={styles.captureBtn}>
          <Text style={styles.captureLabel}> CAPTURE </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

TabOneScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

export default TabOneScreen;
