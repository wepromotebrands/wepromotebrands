import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoardingWelcomeScreen from  './screens/OnBoardingWelcomeScreen';
import OnBoardingFindScreen from './screens/OnBoardingFindScreen';
import OnBoardingAudioScreen from './screens/OnBoardingAudioScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="OnBoardingWelcomeScreen" component={OnBoardingWelcomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="OnBoardingFindScreen" component={OnBoardingFindScreen} />
        <Stack.Screen options={{ headerShown: false }} name="OnBoardingAudioScreen" component={OnBoardingAudioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}