import React, {useContext, useState} from 'react';
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
import { LanguageModal } from '../components';

const Settings = () => {

    const [isLangModal, setLanguageModal] = useState(false);

    const colors = useColors();
    const { isDarkTheme, switchTheme } = useContext(ThemeContext);
    const { 
        selectedLanguage,
        languageName,
        languages,
    } = useContext(LanguageContext);

    // Switch Language Modal
    const _toggleLangModal = () => {
        setLanguageModal(!isLangModal);
    }

    return(
        <View style={[Styles._mainContainer]}>

            <LanguageModal 
                visibility={isLangModal}
                languages={languages}
                closeLangModal={()=>{
                    _toggleLangModal();
                }}
            />

            <View style={Styles._row}>
                <Text style={[Styles._info,{color: colors.text}]}>{selectedLanguage.darkMode}</Text>
                <Switch 
                    thumbColor={colors.primary}
                    trackColor={{
                        false: colors.switchTrackFalseColor,
                        true: colors.switchTrackTrueColor
                    }}
                    value={isDarkTheme}
                    onValueChange={(value)=>{
                        switchTheme(value);
                    }}
                />
            </View>

            <View style={Styles._row}>
                <Text style={[Styles._info,{color: colors.text}]}>{selectedLanguage.langueSwitchHeading}</Text>
                <TouchableOpacity
                    onPress={()=>{
                        _toggleLangModal();
                    }}
                >
                    <Text style={[Styles._info,{color: colors.text}]}>{languageName}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        padding: THEME.SIZES.spacing_20
    },
    _row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: THEME.SIZES.spacing_20,
    },
    _info:{
        ...FONTS.body3,
    },
});

export default Settings;