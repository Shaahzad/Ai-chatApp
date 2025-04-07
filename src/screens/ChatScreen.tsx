import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import MessageBubble from '../components/MessageBubble'
import InputBox from '../components/InputBox'
import { Message } from '../types/message'
import { GeminiAiResponse } from '../services/GeminiApi'

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)

  const HandleSend = async (text: string) => {
    const userMsg: Message = {
        text: text,
        sender: 'user'
    }
    setMessages(prev => [...prev, userMsg])
    setLoading(true)
    const aiText = await GeminiAiResponse(text) as string
    const aiMsg: Message = {
        text: aiText,
        sender: 'ai'
    }
    setMessages(prev => [...prev, aiMsg])
    setLoading(false)
  }

  return (
    <View style={styles.Container}>
    <FlatList
    data={messages}
    renderItem={({item}) => <MessageBubble message={item}/>}
    keyExtractor={(_,index) => index.toString()}
    contentContainerStyle={{padding: 10}}
    />
    {
      loading && <ActivityIndicator size="large" color="blue"/>
    }
    <InputBox onSend={HandleSend}/>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  Container:{
    height: '100%',
  }

})