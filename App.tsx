import 'react-native-gesture-handler';
import {
  useColorScheme
} from 'react-native';
import React  from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Root from './src/navigation/Root';
import {
  THEME
} from './src/constants';

const App = () => {

  const scheme = useColorScheme();

  return(
    <NavigationContainer
      theme={scheme === 'light' ? THEME.LIGHT_THEME : THEME.DARK_THEME}
    >
      <Root />
    </NavigationContainer>
  );
}

export default App;