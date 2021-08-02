import React from 'react';
import { useState } from 'react';
import {
    useColorScheme,
} from 'react-native';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({children}) => {

    const scheme = useColorScheme();
    const [isDarkTheme, setTheme] = useState(scheme === 'dark' ? true : false);
    const switchTheme = (theme:boolean) => setTheme(theme);

    return(
        <ThemeContext.Provider
            value={{
                isDarkTheme, switchTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )

}