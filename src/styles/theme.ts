import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#0695FD',
    primaryLighter: '#48B2FF',

    grayBorder: '#A9A9A9',

    disabled: '#EDEBEB',
    background: '#fff',

    action: '#000000',
    actionHover: '#696969',
    actionText: '#fff',
    actionInvertedHover: '#EDEBEB',

    informativeColor: '#424151',
    informativeText: '#0695FD',

    validText: '#fff',
    valid: '#19C29B',

    invalid: '#E47474',
    invalidHover: '#FFEAEA',
    invalidBrighter: '#E14141',

    otherColor: '#163567',
    otherHover: '#0A4672',
    otherText: '#fff',

    textPrimary: '#24282A',
    textSecondary: '#696969',
    textPlaceholder: '#979797',
    textSpecial: '#296795',
    textSpecialBrighter: '#0695FD',

    transparent: 'transparent',
  },

  gradients: {
    lighter: 'linear-gradient(135deg, #0A4672 0%, #1E5A85 100%)',
    darker: 'linear-gradient(135deg, #1E5A85 0%, #373A3D 100%)',
    select: 'linear-gradient(top to bottom, #fff, #EDEBEB, #fff)',
  },

  boxShadows: {
    light: '7px 7px 12px 3px rgba(102,102,102,0.04)',
    medium: '0px 2px 26px 2px rgba(41,103,149,0.15);',
    strong: '0px 2px 15px 2px rgba(0,0,0,0.15)',
    hover: '0px 2px 20px 0px rgba(102,102,102,0.20)',
    button: '0px 4px 15px 0px rgba(0, 0, 0, 0.15)',
  },

  fonts: {
    roboto: 'Roboto, sans-serif',
    poppins: 'Poppins, sans-serif',
  },
};
