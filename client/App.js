import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSageMiddleware from 'redux-saga'
import reducers from './src/redux/reducers'
import mySaga from './src/redux/sagas'


const sagaMiddleware = createSageMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        visibility={false}
        hidden={true}
      />
      <NavigationContainer>
        <Provider store={store}>
          <StackNavigator />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
