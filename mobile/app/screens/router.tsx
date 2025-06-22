import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ErrorBoundary from '@components/ErrorBoundary';
import Home from './Home';
import TaskDetails from './TaskDetails';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen
              name="TaskDetails"
              component={TaskDetails}
              options={{ title: 'Edit Task' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ErrorBoundary>
  );
};

export default App;
