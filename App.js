import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EmbedExpression from './src/screens/embedExpression'

export default function App() {
  return (
    <View style={styles.container}>
      <EmbedExpression />
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
