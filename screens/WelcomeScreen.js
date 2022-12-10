import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import PrimaryButtonLong from '../components/PrimaryButtonLong'
import AccentPurpleButtonLong from '../components/AccentPurpleButtonLong'

function WelcomeScreen({ navigation }) {
  return(
    <ImageBackground source={require('../assets/images/background_blur.png')} resizeMode='cover' style={[styles.container, {backgroundColor: '#F9F9FF'}]}>        
      <StatusBar style='dark'  />
      <SafeAreaView style={[styles.container, {}]}>
        <View style={styles.containerImage}>
          <Image style={styles.bild} source={require('../assets/images/Nearby.png')} />
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
            <PrimaryButtonLong onPress={() => {navigation.navigate("LoginScreen")}}>Login</PrimaryButtonLong>
            <View style={styles.marginBottom20}></View>
            <AccentPurpleButtonLong onPress={() => {navigation.navigate("RegisterScreen")}}>Register</AccentPurpleButtonLong>
            <View style={styles.marginBottom}></View>
          </View>
          <View style={styles.containerEnde}>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>   
  )
}

export default WelcomeScreen

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
    color: '#A6A3B8',
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
  },
  marginBottom20: {
    marginBottom: 20,
  }
});  