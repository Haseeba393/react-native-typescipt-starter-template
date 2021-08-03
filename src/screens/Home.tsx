import React, {useContext} from 'react';
import {
    StyleSheet,
    View,
    Switch,
    Text,
    TouchableOpacity
} from 'react-native';
import { FONTS } from '../constants';

import { useColors } from '../custom-hooks';
import { LanguageContext } from '../custom-hooks/useTranslation';

const Home = () => {

    const colors = useColors();
    const {
        selectedLanguage
    } = useContext(LanguageContext);

    return(
        <View style={[Styles._mainContainer]}>
            <Text style={[Styles._heading,{color: colors.text}]}>{selectedLanguage.homeTab}</Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    _heading:{
        ...FONTS.h4,
    },
});

export default Home;