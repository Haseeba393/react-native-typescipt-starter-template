/**
 * File that contains all functions related to navigation between screens
 */

import { ROUTES } from "../constants";

export const _gotoHomeScreen = (navigation: any) => {
    navigation.navigate(ROUTES.MAIN_HOME);
}