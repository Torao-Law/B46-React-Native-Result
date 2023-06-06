import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Headers from './src/components/header'
import Content from './src/components/content'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Gendi brutal lagi minta jamuan dengan kakek zeus</Text>
      <Headers />
      <Content />
      <StatusBar style="auto" />
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
