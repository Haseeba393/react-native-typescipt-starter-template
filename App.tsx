import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Root from './src/navigation/Root';
import {
  THEME
} from './src/constants';
import useThemeManager from './src/custom-hooks/useThemeManager';
import useTranslation from './src/custom-hooks/useTranslation';

const App = () => {

  const {
    ThemeContext,
    isDarkTheme,
    switchTheme
  } = useThemeManager();

  const {
    selectedLanguage,
    languages,
    languageName,
    _switchLanguage,
    LanguageContext
  } = useTranslation();

  return(
    <LanguageContext.Provider
      value={{
        selectedLanguage, languages, languageName, _switchLanguage
      }}
    >
      <ThemeContext.Provider
        value={{
          isDarkTheme, switchTheme
        }}
      >
        <NavigationContainer
          theme={!isDarkTheme ? THEME.LIGHT_THEME : THEME.DARK_THEME}
        >
          <Root />
        </NavigationContainer>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;