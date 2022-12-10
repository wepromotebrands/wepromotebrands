import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import PrimaryButton from '../components/PrimaryButton'
import AccentButton from '../components/AccentButton'

function OnBoardingWelcomeScreen({ navigation }) {
  return(
    <ImageBackground source={require('../assets/images/background_blur.png')} resizeMode='cover' style={[styles.container, {backgroundColor: '#F9F9FF'}]}>        
      <StatusBar style='dark'  />
      <SafeAreaView style={[styles.container, {}]}>
        <View style={styles.containerImage}>
          <Image style={styles.bild} source={require('../assets/images/group56755.png')} />
        </View>
        <View style={styles.container2}>
          <View style={styles.containerAnfang}>
          </View>
          <View style={styles.containerMitte}>
            <Text style={styles.text}>Welcome to</Text> 
            <Text style={styles.text}>Datex Online App</Text>
            <View style={styles.text2View}>
              <Text style={styles.text2}>Reference site about Lorem</Text>
              <Text style={styles.text2}>Ipsum, giving information origins</Text>
            </View>
            <PrimaryButton onPress={() => {navigation.navigate('OnBoardingFindScreen')}}>Get Started</PrimaryButton>
            <View style={styles.marginBottom}></View>
          </View>
          <View style={styles.containerEnde}>
          </View>
        </View>
        <View style={styles.accentButtonContainer}>
          <AccentButton onPress={() => {navigation.navigate("WelcomeScreen")}}>Skip</AccentButton>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default OnBoardingWelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerImage: {
    marginTop: 80,
    marginBottom: 30,
  },
  text: {
    color: '#FF4E98',
    fontSize: 30,
    lineHeight: 35,
  },
  container2: {
    flexDirection: 'row',
    width: '100%',
    alignContent: 'center'
  },
  containerMitte: {
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    minHeight: 280,
    width: '90%',
    borderRadius: 20,
  },
  containerEnde: {
    marginTop: 52.7,
    minHeight: 210,
    flex:1,
    maxHeight: 210,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  containerAnfang: {
    marginTop: 52.7,
    minHeight: 210,
    flex:1,
    maxHeight: 210,
    backgroundColor: '#FFFFFF',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  text2: {
    height:21,
    fontSize: 18,
    lineHeight:21,
    color: '#4E4B66',
  },
  text2View: {
    marginTop: 20,
    marginBottom: 38,
  },
  marginBottom: {
    marginBottom:30
  },
  accentButtonContainer: {
    marginTop:34,
  }
});  