import { StyleSheet, TextInput, View, Text, Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function AccentButton(props) {
    function pressHandler(){
        props.onPress()
    }
    return(
        <View style={styles.outerContainer}>

            <LinearGradient colors={['#ffe135', '#ffbf35',]} start={[0.1, 0.1]} end={[0.5, 1.0]} style={styles.linearGradient}>

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

export default AccentButton

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 17.5,
        overflow: 'hidden'
    },
    container: {
        elevation: 2,
    },
    buttonText: {
        paddingVertical:6,
        paddingHorizontal: 23,
        fontSize: 20,
        lineHeight:23,
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.5,
    }

})