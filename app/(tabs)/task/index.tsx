import { Text, View, StyleSheet } from 'react-native';
import Button from '@/components/Button';
import { useNavigation } from 'expo-router';
import { RootStackParamList } from '@/types/navigation';
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export default function TaskScreen() {

  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task screen</Text>
      <Button
        label="Crear Tarea"
        onPress={()=>{navigation.navigate("task/CreateTask")}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
