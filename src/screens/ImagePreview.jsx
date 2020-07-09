import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, View } from 'react-native';

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
