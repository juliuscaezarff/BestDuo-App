import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tio lucas no react native</Text>

      <Button title='Aperte Aqui'/>

      <StatusBar style="auto" backgroundColor='purple'/>
    </View>
  );
}

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (  
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
