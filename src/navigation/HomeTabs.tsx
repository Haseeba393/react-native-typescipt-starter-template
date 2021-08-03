import React, { useContext } from 'react';
import {
    Image,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import {
    Home,
    Settings
} from '../screens';

import { useColors } from '../custom-hooks';
import { FONTS, ICONS, ROUTES, THEME } from '../constants';
import { LanguageContext } from '../custom-hooks/useTranslation';

const Tabs = createBottomTabNavigator();

const HomeTabs = () => {

    const colors = useColors();
    const {
        selectedLanguage,
    } = useContext (LanguageContext);

    return (
        <Tabs.Navigator
            initialRouteName={ROUTES.HOME_TAB}
            screenOptions={{
                headerStyle:{
                    backgroundColor: colors.primary,
                },
                headerTintColor: colors.headerTextColor,
                tabBarLabelStyle:{
                    ...FONTS.body5,
                    fontWeight: 'bold',
                },
                tabBarStyle:{
                    backgroundColor: colors.bottomTabBackground
                },
            }}
            sceneContainerStyle={{
                backgroundColor: colors.background,
            }}
        >
            <Tabs.Screen
                name={ROUTES.HOME_TAB}
                component={Home}
                options={{
                    headerTitle: selectedLanguage.home,
                    tabBarLabel: selectedLanguage.home,
                    tabBarIcon: ({color})=>(
                        <Image 
                            source={ICONS.HOME_TAB_ICON}
                            resizeMode='contain'
                            style={{
                                width: THEME.SIZES.tab_icon_size,
                                height: THEME.SIZES.tab_icon_size,
                                tintColor: color
                            }}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name={ROUTES.SETTINGS_TAB}
                component={Settings}
                options={{
                    headerTitle: selectedLanguage.settings,
                    tabBarLabel: selectedLanguage.settings,
                    tabBarIcon: ({color})=>(
                        <Image 
                            source={ICONS.SETTINGS_TAB_ICON}
                            resizeMode='contain'
                            style={{
                                width: THEME.SIZES.tab_icon_size,
                                height: THEME.SIZES.tab_icon_size,
                                tintColor: color
                            }}
                        />
                    )
                }}
            />
        </Tabs.Navigator>
    )
}

export default HomeTabs
