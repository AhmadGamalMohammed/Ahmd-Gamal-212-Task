import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  Image
} from 'react-native';
import Colors from '../constants/Colors'
const IntroScreen = props => {

  return (
    <View style={styles.screen}>
      <View>
        <Image
        style={styles.logo}
          source={require('../img/icon.png')}
        />
      </View>

      <View style={styles.introTextContainer}>
        <Text style={styles.introText}>
          Showcase&Descover Creative Work
        </Text>
      </View>

      <View style={styles.startButtonContainer}>
        <Button
          title="Get Started"
          color={Colors.primary}
          uppercase={false}
          style={styles.startButton}
          borderRadius={50}
          onPress={() => {
            props.navigation.navigate('Auth');
          }}
        />
      </View>
    </View>
  );
};

IntroScreen.navigationOptions = navData => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'

  },
  logo:{
    width:100,
    height:100,
    marginTop:'30%'
  },  
  introTextContainer:{
    marginTop:'5%',
  },
  introText:{
    fontSize:20,
    color:'#7e7e8a'
  },
  startButtonContainer: {
    position: 'absolute',
    bottom: 15,
    width: "95%",
  },
  startButton: {
    borderRadius:30
  }
});

export default IntroScreen;
