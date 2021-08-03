import React, { useContext } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import { LanguageModalProps } from '../interfaces/interfaces';
import Modal from 'react-native-modal';
import { FONTS, THEME } from '../constants';
import { useColors } from '../custom-hooks';
import { LanguageContext } from '../custom-hooks/useTranslation';

const LanguageModal = (props: LanguageModalProps) => {

    const colors = useColors();
    const {
        selectedLanguage,
        _switchLanguage
    } = useContext(LanguageContext);

    return (
        <Modal 
            animationIn='slideInUp'
            animationInTiming={700}
            animationOut='slideOutDown'
            animationOutTiming={700}
            isVisible={props.visibility}
            onBackButtonPress={()=>{ props.closeLangModal() }}
            onBackdropPress={()=> { props.closeLangModal() }}
            style={Styles._modalStyle}
        >
            <View style={[Styles._mainContainer, {backgroundColor: colors.modalBackground}]}>
                <View style={Styles._row}>
                    <Text style={[Styles._heading,{ color: colors.primary }]}>{selectedLanguage.chooseLanguage}</Text>
                    <Text onPress={()=>{ props.closeLangModal() }} style={[Styles._close,{ color: colors.text }]}>{selectedLanguage.close}</Text>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: THEME.SIZES.spacing_10,
                        flex: 1,
                    }}
                >
                    {
                        props.languages.map((item, index)=>{
                            return(
                                <TouchableOpacity 
                                    onPress={()=>{
                                        _switchLanguage(item.tag)
                                    }}
                                    style={{
                                        marginBottom: THEME.SIZES.spacing_10,
                                    }}
                                    key={item.key}
                                >
                                    <Text style={[Styles._language,{color: colors.text}]}>{item.name} ({item.tag})</Text>
                                </TouchableOpacity>
                            );
                        })
                    }
                </ScrollView>
            </View>
        </Modal>
    )
}

const Styles = StyleSheet.create({
    _modalStyle:{
        width: '100%',
        margin: 0,
        position: 'absolute',
        bottom: 0,
    },
    _mainContainer:{
        height: THEME.HP('50%'),
        borderTopLeftRadius: THEME.SIZES.radius_20,
        borderTopRightRadius: THEME.SIZES.radius_20,
        padding: THEME.SIZES.spacing_20,
    },
    _row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    _close:{
        ...FONTS.body5,
    },
    _heading:{
        ...FONTS.body2,
    },
    _language:{
        ...FONTS.body4,
    },
});

export default LanguageModal;
