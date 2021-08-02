import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { useColors } from '../custom-hooks';
import { FONTS, ICONS, IMAGES, THEME } from '../constants';

const Splash = () => {

    const colors = useColors();

    return(
        <View style={Styles._mainContainer}>
            <Image 
                source={IMAGES.LOGO}
                resizeMode='contain'
                style={Styles._logo}
            />
            <Image 
                source={ICONS.GREET_ICON}
                resizeMode='contain'
                style={Styles._icon}
            />
            <Text style={[Styles._text,{color: colors.primary}]}>Hello To React World</Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    _logo:{
        width: THEME.WP('60%'),
        height: THEME.HP('40%'),
    },
    _icon:{
        width: THEME.WP('20%'),
        height: THEME.HP('10%'),
    },
    _text:{
        ...FONTS.body2,
        fontWeight: 'bold',
        marginTop: THEME.SIZES.spacing_10
    },
});

export default Splash;