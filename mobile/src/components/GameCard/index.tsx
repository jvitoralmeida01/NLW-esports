import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import GameResponse from '../../@types/gameResponse';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface GameCardProps {
    id      : string;
    name    : string;
    ads     : string;
    cover   : ImageSourcePropType
}

interface Props extends TouchableOpacityProps {
    data : GameResponse;
}


export function GameCard( { data, ...rest } : Props ) {

    
  return (
    <TouchableOpacity style={styles.container} {...rest}>

        <ImageBackground 
            style={styles.cover}
            source={{uri: data.bannerUrl}}
        >

            <LinearGradient 
                colors={THEME.COLORS.FOOTER}
                style={styles.footer}
            >
                <Text style={styles.name}>
                    {data.title}
                </Text>
                <Text style={styles.ads}>
                    {`${data._count.ads} anúncios`}
                </Text>
            </LinearGradient>

        </ImageBackground>

    </TouchableOpacity>
  );
}