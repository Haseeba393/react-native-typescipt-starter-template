import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Root from './src/navigation/Root';
import {
  THEME
} from './src/constants';
import useThemeManager from './src/custom-hooks/useThemeManager';

const App = () => {

  const {
    ThemeContext,
    isDarkTheme,
    switchTheme
  } = useThemeManager();

  return(
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
  );
}

export default App;