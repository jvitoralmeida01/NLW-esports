import { useEffect, useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';
import { Loading } from '../../components/Loading';

import { styles } from './styles';
import { GAMES } from '../../utils/games'; 
import GameResponse from '../../@types/gameResponse';

export function Home() {

  const [games, setGames] = useState<GameResponse[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {

    setLoading(true)

    fetch('http://192.168.15.106:3333/games')
      .then(res => res.json())
      .then(data => {
        setGames(data);
        setLoading(false);
      })
      .catch(e => console.log(e))

  }, [])

  const navigation = useNavigation();

  const handleGameClick = ( {id, title, bannerUrl} : GameResponse ) => {
    navigation.navigate('game', { id, title, bannerUrl })
  }

  return (
    <SafeAreaView style={styles.container}>

      <Image 
        source={logoImg}
        style={styles.logo}
      />
      <Heading 
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja"
      />

      {loading ?
          <Loading />
        :
          <FlatList
            data={games}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <GameCard 
                data={item}
                onPress={ () => handleGameClick(item) }
              />
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentList}
            horizontal
          />
      }

    </SafeAreaView>
  );
}