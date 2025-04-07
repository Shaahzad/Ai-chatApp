import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

type InputBoxProps = {
    onSend: (message: string) => void;
}
const InputBox: React.FC<InputBoxProps> = ({onSend}) => {
    const [text, setText] = useState('');

    const HandleSend = () => {
        if(text.trim()){
            onSend(text)
            setText('')
        }else{
          Alert.alert("Error", "Please enter a Prompt")
        }
    }
  return (
    <View style={styles.container}>
        <TextInput
        value={text}
        onChangeText={setText}
        placeholder='Ask me anything..'
        style={styles.Input}
        />
        <TouchableOpacity onPress={HandleSend} style={styles.SendBtn}>
            <Text style={styles.SendBtnText}>Send</Text>
        </TouchableOpacity>
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 10,
    },
    Input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginRight: 10,
      paddingHorizontal: 10,
    },
    SendBtn: {
      backgroundColor: '#007AFF',
      borderRadius: 5,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    SendBtnText: {
        color: '#fff',
        fontWeight: 'bold',
    }
  });