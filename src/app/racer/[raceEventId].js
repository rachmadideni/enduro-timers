import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router';

export default function RacerPage() {
  const { raceEventId } = useLocalSearchParams();
  return (
    <View>
      <Text>RacerPage</Text>
      <Text>{JSON.stringify(raceEventId)}</Text>
    </View>
  )
}