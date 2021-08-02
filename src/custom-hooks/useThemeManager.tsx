import React, {useState} from 'react';
import { 
    useColorScheme
} from 'react-native';

export const ThemeContext = React.createContext(null);

const useThemeManager = () => {
    const scheme = useColorScheme();
    const [isDarkTheme, setTheme] = useState(scheme === 'dark' ? true : false);
    const switchTheme = (theme:boolean) => setTheme(theme);

    return {
        isDarkTheme, switchTheme, ThemeContext
    }
}

export default useThemeManager;

