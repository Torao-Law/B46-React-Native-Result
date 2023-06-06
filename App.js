import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Props from './src/screens/props'

export default function App() {
  return (
    <View style={styles.container}>
      <Props />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
