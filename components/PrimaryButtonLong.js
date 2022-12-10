import { StyleSheet, TextInput, View, Text, Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function PrimaryButtonLong(props) {
    function pressHandler(){
        props.onPress(props.screenName)
    }
    return(
        <View style={styles.outerContainer}>


            <LinearGradient colors={['#FF9FC7', '#F32878']} start={[0.0, 0.5]} end={[0.8, 0.5]} locations={[0.0, 1.0]}>

           
        <Pressable 
            style={({pressed}) => pressed ? [styles.container,styles.pressed] : styles.container} 
            onPress={pressHandler} android_ripple={{color: '#640233a'}}>
                <Text style={styles.buttonText}>
                    {props.children}
                </Text>
            </Pressable>


            </LinearGradient>
        </View>
    )
}

export default PrimaryButtonLong

const styles = StyleSheet.create({
    outerContainer: {
        minWidth: '90%',
        borderRadius: 25,
        overflow: 'hidden'
    },
    container: {
        elevation: 2,
    },
    buttonText: {
        paddingVertical:15,
        paddingHorizontal: 72.5,
        fontSize: 18,
        lineHeight:21,
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.5,
    }

})