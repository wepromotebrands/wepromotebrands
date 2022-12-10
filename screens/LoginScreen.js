import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import InputButtonLong from '../components/InputButtonLong'
import InputButtonLongGoogle from '../components/InputButtonLongGoogle'

import { Platform, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

function LoginScreen({ navigation }) {
  function handelGoogle(){
    let email = "dennis@test.de"
    let password = "123456789"
  }
  
  return(
    



  <ImageBackground source={require('../assets/images/background_blur.png')} resizeMode='cover' style={[styles.container, {backgroundColor: '#F9F9FF'}]}>        
      <StatusBar style='dark'  />
      <SafeAreaView style={[styles.container, {}]}>
   
      <View style={styles.containerTop}>
          {Platform.select({ios: <View style={styles.iconBox}><Ionicons name="arrow-back" size={24} color="black" /></View>,})}
          <View><Text style={styles.signin}>Sign-In:</Text></View>
          <View></View>
        </View>





        <View style={styles.containerImage}>
          <Image style={styles.bild} source={require('../assets/images/Illustration.png')} />
        </View>
        <View style={styles.container2}>
          <View style={styles.containerMitte}>
     
 
            <View style={styles.marginBottom15}></View>

            <InputButtonLong onPress={() => {navigation.navigate("WelcomeScreen")}}>Login</InputButtonLong>

            <InputButtonLongGoogle onPress={handelGoogle}>Login with Google</InputButtonLongGoogle>

            <View style={styles.marginBottom}></View>
        </View>

        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default LoginScreen

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  containerTop: {
    marginTop: Platform.select({ios: 15,android: 46}),
    alignItems: 'center',
    flexDirection: 'row',
    minWidth: Platform.select({ios: '100%',android: '1%'}),
    paddingLeft: Platform.select({ios: 20,android: 0})
  },
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
    paddingTop: 30,
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
  },
  signin:{
    fontSize: 22,
    lineHeight: 26,
    color: '#363D4E',
    paddingLeft: Platform.select({ios: ((deviceWidth/4)),android: 0})

  },
  iconBox: {
    alignSelf: 'flex-start',
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginBottom15: {
    marginBottom: 15,
  }
});  