import { useEffect, useState } from 'react'
import * as AuthSession from 'expo-auth-session';
import { Image, TouchableOpacity, Text   } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GameController } from 'phosphor-react-native'

import { styles } from './styles'
import { THEME } from '../../theme'
import logoImg from '../../assets/logo-nlw-esports.png'

import { Heading } from '../../components/Heading'
import { Background } from '../../components/Background'


export function SignIn() {

  async function handleDiscordSignIn() {

   const response = await AuthSession.startAsync({
      authUrl: "https://discord.com/api/oauth2/authorize?client_id=1024345562872565811&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40julius_caezar%2Fmobile&response_type=token&scope=identify"
    })

    fetch('https://discord.com/api/users/@me', {
      headers: {
        'authorization': `Bearer ${response.params.access_token}`
      }
    })
    .then(response => response.json())
    .then()
    
  }

  return (
    <Background>
    <SafeAreaView style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading
        title="Entrar"
        subtitle="Encontre seu duo e bora jogar"
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={handleDiscordSignIn}
      >
      
      <GameController
        color={THEME.COLORS.TEXT}
        size={20}
      />

      <Text style={styles.buttonTitle}>
          Entrar com discord
      </Text>
      </TouchableOpacity>
    </SafeAreaView>
    </Background>
  )
}
