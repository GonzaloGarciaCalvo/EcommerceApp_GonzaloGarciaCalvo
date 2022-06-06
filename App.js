import { ActivityIndicator, StyleSheet, View } from 'react-native';
import {useFonts} from 'expo-font';
import MainNavigator from './Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import store from './Store';
import { Provider } from 'react-redux'


export default function App() {

  const [loaded] = useFonts({
    Koulen: require('./assets/Fonts/Koulen/Koulen-Regular.ttf'),
    LatoRegular: require('./assets/Fonts/Lato/Lato-Regular.ttf'),
    PoppinsRegular: require('./assets/Fonts/Poppins/Poppins-Regular.ttf'),
  });
  
  if (!loaded) {
    return <ActivityIndicator/>;
  }
  console.log(' ----- CORRE APP ------')
  return (
    //<SafeAreaView style={{ flex: 1 }}>
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
    //</SafeAreaView>
  );
  
  }


