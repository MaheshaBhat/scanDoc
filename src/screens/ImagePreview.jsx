import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, View } from 'react-native';
import { toByteArray } from 'base64-js';

// function convertDataURIToBinary(base64) {
//   var raw = atob(base64);
//   var rawLength = raw.length;
//   var array = new Uint8Array(new ArrayBuffer(rawLength));

//   for (i = 0; i < rawLength; i++) {
//     array[i] = raw.charCodeAt(i);
//   }
//   return array;
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  image: { height: '100%', width: '100%' }
});

const ImagePreview = ({ route }) => {
  useEffect(() => {
    // console.log(route.params.base64);
    const rawData = toByteArray(route.params.photo.base64);
    const arr = [];
    let temp = [];
    for (let i = 0; i < rawData.length; i += 3) {
      temp = [];
      temp.push(rawData[i]);
      temp.push(rawData[i + 1]);
      temp.push(rawData[i + 2]);
      arr.push(temp);
    }
    // console.log(rawData.length);
    // console.log(route.params.photo.width);
    // console.log(route.params.photo.height);
  }, [route.params.photo.base64]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: route.params.photo.uri }} />
    </View>
  );
};

ImagePreview.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired
};

export default ImagePreview;
