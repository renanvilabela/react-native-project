import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreens.js';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* Adicione mais telas aqui conforme necessário */}
    </Stack.Navigator>
  );
};

export default AppNavigator;