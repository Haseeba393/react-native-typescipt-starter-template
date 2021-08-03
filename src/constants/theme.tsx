import {
    Dimensions,
    Platform,
} from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

const MOBILE_WIDTH = Dimensions.get('screen').width;
const MOBILE_HEIGHT = Dimensions.get('screen').height;
const PLATFORM = Platform;
const WP = widthPercentageToDP;
const HP = heightPercentageToDP;

const SIZES = {
    spacing_10: 10,
    spacing_15: 15,
    spacing_20: 20,
    radius_10: 10,
    radius_15: 15,
    radius_20: 20,
    tab_icon_size: 24,
    header_icon_size: 24,
}

const LIGHT_THEME = {
    dark: false,
    colors: {
        primary: 'rgb(255, 45, 85)',
        background: 'rgb(242, 242, 242)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
        whiteColor: '#fff',
        blackColor: '#000',
        redColor: 'red',
        blueColor: 'blue',
        greenColor: 'green',
        headerTextColor: '#fff',
        bottomTabTextColor: 'rgb(255, 45, 85)',
        bottomTabIconColor: 'rgb(255, 45, 85)',
        bottomTabBackground: '#fff',
        switchThumbColor: 'rgb(255, 45, 85)',
        switchTrackFalseColor: 'rgb(199, 199, 204)',
        switchTrackTrueColor: 'rgb(255, 69, 58)',
        modalBackground: 'rgb(255,255,255)',
    },
}

const DARK_THEME = {
    dark: false,
    colors: {
        primary: 'rgb(255, 45, 85)',
        background: 'rgb(0, 0,0)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(255, 255, 255)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
        whiteColor: '#fff',
        blackColor: '#000',
        redColor: 'red',
        blueColor: 'blue',
        greenColor: 'green',
        headerTextColor: '#fff',
        bottomTabTextColor: 'rgb(255, 45, 85)',
        bottomTabIconColor: '#fff',
        bottomTabBackground: '#000',
        switchThumbColor: 'rgb(255, 45, 85)',
        switchTrackFalseColor: 'rgb(199, 199, 204)',
        switchTrackTrueColor: '#fff',
        modalBackground: 'rgba(255,255,255,0.2)',
    },
}

export default {
    MOBILE_WIDTH,
    MOBILE_HEIGHT,
    PLATFORM,
    WP,
    HP,
    SIZES,
    LIGHT_THEME,
    DARK_THEME,
};