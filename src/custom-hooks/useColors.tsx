import {
    useTheme
} from '@react-navigation/native';

const useColors = () => {
    const { colors } = useTheme();
    return colors;
}

export default useColors;