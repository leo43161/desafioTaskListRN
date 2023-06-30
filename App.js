import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreens from './src/Screens/MainScreens';

export default function App() {
  const taskList = [
    {
      id: 1,
      task: "Regar plantas",
      completed: false,
      deleted: false
    },
    {
      id: 2,
      task: "Lavar platos",
      completed: false,
      deleted: false
    }, {
      id: 3,
      task: "Limpiar el baño",
      completed: false,
      deleted: false
    }, {
      id: 4,
      task: "Ir a comprar carne",
      completed: false,
      deleted: false
    }, {
      id: 5,
      task: "Comprar carbón",
      completed: false,
      deleted: false
    },
  ]
  return (
    <MainScreens />
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
