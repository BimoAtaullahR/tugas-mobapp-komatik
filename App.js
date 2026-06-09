import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import FormScreen from './src/screens/FormScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Form" component={FormScreen} options={{ title: 'Form Tugas' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail Tugas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
