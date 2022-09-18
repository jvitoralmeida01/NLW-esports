import { FlatList, Image, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import logoImg from '../../assets/logo-nlw-esports.png'
import { styles } from './styles';
import { GamePageParams } from '../../@types/navigation';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { AdCard, AdCardProps } from '../../components/AdCard';
import { useEffect, useState } from 'react';
import { Loading } from '../../components/Loading';

export function Game() {

    const route = useRoute(); 
    const game = route.params as GamePageParams;

    const navigation = useNavigation();
    const handleGoBack = () => navigation.goBack()

    const [loading, setLoading] = useState<boolean>(true);
    const [ads, setAds] = useState<AdCardProps[]>([]);

    useEffect(() => {

      setLoading(true)

      fetch(`http://192.168.15.106:3333/games/${game.id}/ads`)
        .then(res => res.json())
        .then(data => {
          setAds(data);
          setLoading(false);
        })
        .catch(e => console.log(e))

    }, [])

    if (loading) return <Loading />
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Entypo 
                        name="chevron-thin-left"
                        color={THEME.COLORS.CAPTION_300}
                        size={20}
                    />
                </TouchableOpacity>

                <Image 
                    source={logoImg}
                    style={styles.logo}
                />

                <View style={styles.rightSpacing}/>
            </View>

            <Image 
                source={ { uri: game.bannerUrl} }
                style={styles.banner}
                resizeMode="cover"
            />

            <Heading
                title={game.title}
                subtitle='Conecte-se e comece a jogar!'
            />

            <FlatList 
                data={ads}
                keyExtractor={item => item.gameId}
                renderItem={({item}) => (
                    <AdCard 
                        data={item}
                        onConnect={() => {}}
                    />
                )}
                horizontal
                style={styles.containerList}
                contentContainerStyle={ads.length === 0 ? styles.emptyListContent : styles.contentList}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyListText}>Não há anúncios publicados :(</Text>
                )}
            />

        </SafeAreaView>
    );
}