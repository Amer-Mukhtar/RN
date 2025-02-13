import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{padding:50}}>
      <View style={styles.container}>
      <TextInput style={styles.inputStyle} placeholder='Enter text Here'/>
      <Button style={{}} title='Add Here'></Button>
      <StatusBar style="auto" />
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    backgroundColor: '#fff',
    justifyContent: "space-between",
  },
  inputStyle:{
    borderWidth:1,
    width:"80%",
    marginRight:5,
    padding:8
  },
});
