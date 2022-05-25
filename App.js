import { ActivityIndicator, StyleSheet, View } from 'react-native';
import {useFonts} from 'expo-font';
import MainNavigator from './Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {

  const [loaded] = useFonts({
    Koulen: require('./assets/Fonts/Koulen/Koulen-Regular.ttf'),
    LatoRegular: require('./assets/Fonts/Lato/Lato-Regular.ttf'),
    PoppinsRegular: require('./assets/Fonts/Poppins/Poppins-Regular.ttf'),
  });
  
  if (!loaded) {
    return <ActivityIndicator/>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainNavigator/>
    </SafeAreaView>
  );
  
  }


