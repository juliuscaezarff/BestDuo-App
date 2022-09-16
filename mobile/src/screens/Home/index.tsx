import { useEffect } from 'react'
import { View, Image, FlatList } from 'react-native'

import logoImg from '../../assets/logo-nlw-esports.png'

import { Heading } from '../../components/Heading'
import { GameCard } from '../../components/GameCard'

import { GAMES } from '../../utils/games'

import { styles } from './styles'

export function Home() {
  useEffect(() => {
    fetch('http://10.0.0.206:3333/games')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading
        title="Encontre se duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  )
}
