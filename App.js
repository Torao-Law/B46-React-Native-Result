import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import State from './src/screens/state'

export default function App() {
  return (
    <View style={styles.container}>
      <State />
      
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
});
