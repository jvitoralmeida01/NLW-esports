import { useEffect } from 'react';
import { View, Text, ColorValue, FlatList, TouchableOpacity } from 'react-native';
import { GameController } from 'phosphor-react-native'

import { styles } from './styles';
import { AdInfo } from './info.AdCard';
import { THEME } from '../../theme';

export interface AdCardProps {
    gameId          : string
    name            : string
    discord         : string
    weekDays        : string[]
    useVoiceChannel : boolean
    yearsPlaying    : number
    hourStart       : string
    hourEnd         : string
}

export interface Props {
    data        : AdCardProps
    onConnect   : () => void
}

export function AdCard({data, onConnect} : Props) {

    return (
        <View style={styles.container}>

            <AdInfo 
                label="Nome"
                value={data.name}
            />

            <AdInfo 
                label="Anos Jogando"
                value={`${data.yearsPlaying} ano(s)`}
            />

            <AdInfo 
                label="Disponibilidade"
                value={`${data.weekDays.length} dia(s) • ${data.hourStart} - ${data.hourEnd}`}
            />

            <AdInfo 
                label="Chamada de Audio"
                value={data.useVoiceChannel ? 'Sim' : 'Não'}
                colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
            />

            <TouchableOpacity 
                style={styles.button}
                onPress={onConnect}
            >
                <GameController
                    color={THEME.COLORS.TEXT}
                    size={20}
                />
                <Text style={styles.buttonTitle}>
                    Conectar
                </Text>
            </TouchableOpacity>

        </View>
    );
}