import React, {useState, useEffect} from "react";
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import memoize from "lodash.memoize"; // Use for caching/memoize for better performance

import {
    I18nManager,
} from "react-native";

export const LanguageContext = React.createContext(null);

const useTranslation = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [languageName, setLanguageName] = useState('');
    const languages = [
        {
            key: '0',
            name: 'English',
            tag: 'en',
        },
        {
            key: '1',
            name: 'French',
            tag: 'fr',
        }
    ];

    const translationGetters = {
        // lazy requires (metro bundler does not support symlinks)
        en: () => require("../translation/en.json"),
        fr: () => require("../translation/fr.json"),
    };

    const translate = memoize(
        (key, config) => i18n.t(key, config),
        (key, config) => (config ? key + JSON.stringify(config) : key)
    );

    // Function to switch language
    const _switchLanguage = (languageTag) => {
        switch (languageTag) {
            case 'en':
                setSelectedLanguage( require("../translation/en.json"));
                setLanguageName('English');
                break;
            case 'fr':
                setSelectedLanguage( require("../translation/fr.json"));
                setLanguageName('French');
                break;
            default:
                break;
        }
    }

    useEffect(()=>{
        // fallback if no available language fits
        const fallback = { languageTag: "en", isRTL: false };

        const { languageTag, isRTL } =
        RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
        fallback;
        
        // clear translation cache
        translate.cache.clear();
        // update layout direction
        I18nManager.forceRTL(isRTL);
        // set i18n-js config
        i18n.translations = { [languageTag]: translationGetters[languageTag]() };
        i18n.locale = languageTag;

        switch (languageTag) {
            case 'en':
                setSelectedLanguage( require("../translation/en.json"));
                setLanguageName('English');
                break;
            case 'fr':
                setSelectedLanguage( require("../translation/fr.json"));
                setLanguageName('French');
                break;
            default:
                break;
        }

    },[]);

    return {
        selectedLanguage,
        languages,
        languageName,
        _switchLanguage,
        LanguageContext,
    }

}

export default useTranslation;