import React, {useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { useColors } from '../custom-hooks';
import { FONTS, ICONS, IMAGES, THEME } from '../constants';
import { _gotoHomeScreen } from '../navigation/service';
import { NavProps } from '../interfaces/interfaces';

const Splash = (props: NavProps) => {

    const colors = useColors();

    useEffect(()=>{
        setTimeout(() => {
            _gotoHomeScreen(props.navigation);
        }, 1500);
    },[])

    return(
        <View style={[Styles._mainContainer,{backgroundColor: colors.background}]}>
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
            <Text style={[Styles._text,{color: colors.primary}]}>Welcome To React Native</Text>
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