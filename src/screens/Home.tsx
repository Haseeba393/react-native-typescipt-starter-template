import React, {useContext} from 'react';
import {
    StyleSheet,
    View,
    Switch,
    Text,
} from 'react-native';

import { useColors } from '../custom-hooks';
import { FONTS, THEME } from '../constants';
import { ThemeContext } from '../custom-hooks/useThemeManager';

const Home = () => {

    const colors = useColors();
    const { isDarkTheme, switchTheme } = useContext(ThemeContext);

    return(
        <View style={[Styles._mainContainer,{backgroundColor: colors.background}]}>
            <Switch 
                value={isDarkTheme}
                onValueChange={(value)=>{
                    switchTheme(value);
                }}
            />
            <Text style={[Styles._info,{color: colors.text}]}>Switch {isDarkTheme ? 'back ' : null}to {isDarkTheme ? 'Light' : 'Dark'} Mode</Text>
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
});

export default Home;