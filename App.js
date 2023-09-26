import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PersonsList from './screens/PersonsList';
import PersonDetails from './screens/PersonDetails';
import PersonPosts from './screens/PersonPosts';


export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="person-list" component={PersonsList} options={{ title: 'Lista de pessoas' }} />
        <Stack.Screen name="person-details" component={PersonDetails} options={{ title: 'Detalhes' }} />
        <Stack.Screen name="person-posts" component={PersonPosts} options={{ title: 'Posts' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}