import type { Theme } from '../theme';

export const DEFAULT_FONT_FAMILY =
  '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji';

export const DARK_THEME: Theme = {
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: '24px',
  color: {
    whiteText: '#fff',
    blackText: '#000',
    primary: '#87edc3',
    gray: '#DCDCDC',
    red: '#f00',
    orange: '#FFA500',
    yellow: '#FFA500',
    green: '#0f0',
    teal: '#008080',
    blue: '#00f',
    cyan: '#00FFFF',
    purple: '#800080',
    pink: '#FFC0CB',
    surface: {
      900: '#05f5f5',
      800: '#e8e8e8',
      700: '#d5d5d5',
      600: '#a3a3a3',
      500: '#747474',
      400: '#555555',
      300: '#414141',
      200: '#292929',
      100: '#171717'
    }
  },
  button: {},
  input: {
    backgroundColor: '#ffffff',
    borderColor: '#fff',
    borderStyle: 'none'
  },
  typographies: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontWeight: '700',
    textWrap: 'wrap',
    h1: {
      fontSize: '34px',
      lineHeight: '1.3'
    },
    h2: {
      fontSize: '26px',
      lineHeight: '1.35'
    },
    h3: {
      fontSize: '22px',
      lineHeight: '1.4'
    },
    h4: {
      fontSize: '18px',
      lineHeight: '1.45'
    },
    h5: {
      fontSize: '16px',
      lineHeight: '1.5'
    },
    h6: {
      fontSize: '14px',
      lineHeight: '1.5'
    },
    p: {
      fontSize: '12px',
      lineHeight: '1.5'
    }
  }
};
