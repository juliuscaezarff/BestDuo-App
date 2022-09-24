import { useEffect, useState } from 'react'
import { Image, TouchableOpacity, Text   } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GameController } from 'phosphor-react-native'

import logoImg from '../../assets/logo-nlw-esports.png'

import { Heading } from '../../components/Heading'
import { Background } from '../../components/Background'

import { styles } from './styles'

export function SignIn() {

  async function handleDiscordSignIn() {

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
        color={}
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
