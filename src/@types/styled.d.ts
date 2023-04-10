import 'styled-components';

/*
  Fill in theses interfaces as the application accepts new base configs
  on it's theme
*/

declare module 'styled-components' {
  export interface Colors {
    primary: string;
    primaryLighter: string;
    grayBorder: string;
    disabled: string;
    action: string;
    actionHover: string;
    actionInvertedHover: string;
    actionText: string;
    informativeColor: string;
    informativeText: string;
    validText: string;
    valid: string;
    invalid: string;
    invalidHover: string;
    invalidBrighter: string;
    otherColor: string;
    otherHover: string;
    otherText: string;
    textPrimary: string;
    textSecondary: string;
    textPlaceholder: string;
    textSpecial: string;
    textSpecialBrighter: string;
    transparent: string;
    background: string;
  }

  interface Fonts {
    roboto: string;
    poppins: string;
  }

  interface Gradients {
    lighter: string;
    darker: string;
    select: string;
  }

  interface BoxShadows {
    light: string;
    medium: string;
    strong: string;
    hover: string;
    button: string;
  }

  export interface DefaultTheme {
    colors: Colors;
    fonts: Fonts;
    gradients: Gradients;
    boxShadows: BoxShadows;
  }
}
