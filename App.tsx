import 'react-native-gesture-handler';
import {
  useColorScheme
} from 'react-native';
import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Root from './src/navigation/Root';
import {
  THEME
} from './src/constants';
export const ThemeContext = React.createContext();

const App = () => {

  const scheme = useColorScheme();
  const [isDarkTheme, setTheme] = useState(scheme === 'dark' ? true : false);
  const switchTheme = (theme:boolean) => setTheme(theme);

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