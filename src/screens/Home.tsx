import React, {useContext} from 'react';
import {
    StyleSheet,
    View,
    Switch,
    Text,
    TouchableOpacity
} from 'react-native';

import { useColors } from '../custom-hooks';
import { FONTS, THEME } from '../constants';
import { ThemeContext } from '../custom-hooks/useThemeManager';
import { LanguageContext } from '../custom-hooks/useTranslation';

const Home = () => {

    const colors = useColors();
    const { isDarkTheme, switchTheme } = useContext(ThemeContext);
    const { 
        language,
        _switchLanguage,
    } = useContext(LanguageContext);

    return(
        <View style={[Styles._mainContainer,{backgroundColor: colors.background}]}>
            <Switch 
                value={isDarkTheme}
                onValueChange={(value)=>{
                    switchTheme(value);
                }}
            />
            <Text style={[Styles._info,{color: colors.text}]}>{language.themeSwitchText}</Text>
            <Text style={[Styles._heading, {color: colors.text}]}>{language.langueSwitchHeading}</Text>
            <TouchableOpacity
                onPress={()=>{
                    _switchLanguage('en');
                }}
            >
                <Text style={[Styles._info,{color: colors.text}]}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                    _switchLanguage('fr');
                }}
            >
                <Text style={[Styles._info,{color: colors.text}]}>French</Text>
            </TouchableOpacity>
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    _info:{
        ...FONTS.body4,
        marginTop: THEME.SIZES.spacing_10
    },
    _heading:{
        ...FONTS.body2,
        fontWeight: 'bold',
        marginTop: THEME.SIZES.spacing_20
    },
});

export default Home;