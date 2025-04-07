import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Message } from '../types/message'

type Props = {
    message: Message
}
const MessageBubble: React.FC<Props> = ({message}) => {
    const isUser = message.sender === "user"
  return (
    <View style={[styles.bubble, isUser ? styles.user : styles.ai]}>
      <Text style={styles.text}>{message.text}</Text>
    </View>
  )
}

export default MessageBubble

const styles = StyleSheet.create({
    bubble:{
        maxWidth: '80%',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,    
    },
    user:{
        alignSelf: 'flex-end',
        backgroundColor: '#DCF8C5',
    },
    ai:{
        alignSelf: 'flex-start',
        backgroundColor: '#F1F0F0',
    },
    text: {
        fontSize: 16,
    }
})