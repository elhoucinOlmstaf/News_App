import React, {useRef, useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
// hello every one where did you the beer
// so the beer here is Haram .it means that it is forbidden
const {width, height} = Dimensions.get('window');
export default function Animation() {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    animation.current?.play();
  }, []);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: width / 1.5,
          height: 300,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../App/asset/animation/news.json')}
      />
    </View>
  );
}
                                                                                                                                        
const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: height / 3,
  },
});
