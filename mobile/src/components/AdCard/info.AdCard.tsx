import { View, Text, ColorValue } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';

interface DuoInfoProps {
    label: string;
    value: string | number;
    colorValue?: ColorValue;
}

export const AdInfo = ({ label, value, colorValue = THEME.COLORS.TEXT} : DuoInfoProps) => {
    return (
        <View style={styles.info}>

            <Text style={styles.label}>
                {label}
            </Text>

            <Text 
                style={[styles.value, {color: colorValue}]}
                numberOfLines={1}
            >
                {value}
            </Text>
            
        </View>
    )
}