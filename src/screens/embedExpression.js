import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function EmbedExpression() {
  const getMajor = () => {
    return "Full Stack Developer"
  }

  const companyName = "Dumbways.ID"

  return (
    <View>
      <Text>Welcome to {companyName} Class {getMajor()}</Text>
      <StatusBar />
    </View>
  );
}