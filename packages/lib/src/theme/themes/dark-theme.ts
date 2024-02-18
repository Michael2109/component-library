import type { Theme } from '../theme';

export const DEFAULT_FONT_FAMILY =
  '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji';

export const DARK_THEME: Theme = {
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: '24px',
  colors: {
    whiteText: '#000',
    blackText: '#fff',
    primary: {
      background: '#87edc3',
      border: '#87edc3',
      hover: '#87edc3'
    },
    gray: {
      background: '#DCDCDC',
      border: '#DCDCDC',
      hover: '#DCDCDC'
    },
    red: {
      background: '#f00',
      border: '#f00',
      hover: '#f00'
    },
    orange: {
      background: '#FFA500',
      border: '#FFA500',
      hover: '#FFA500'
    },
    yellow: {
      background: '#FFA500',
      border: '#FFA500',
      hover: '#FFA500'
    },
    green: {
      background: '#0f0',
      border: '#0f0',
      hover: '#0f0'
    },
    teal: {
      background: '#008080',
      border: '#008080',
      hover: '#008080'
    },
    blue: {
      background: '#00f',
      border: '#00f',
      hover: '#00f'
    },
    cyan: {
      background: '#00FFFF',
      border: '#00FFFF',
      hover: '#00FFFF'
    },
    purple: {
      background: '#800080',
      border: '#800080',
      hover: '#800080'
    },
    pink: {
      background: '#FFC0CB',
      border: '#FFC0CB',
      hover: '#FFC0CB'
    },
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
  code: {
    backgroundColor: '#353535'
  },
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
