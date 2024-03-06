import type { Theme } from '../theme';

export const DEFAULT_FONT_FAMILY =
  '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji';

export const LIGHT_THEME: Theme = {
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: '24px',
  colors: {
    black: {
      background: '#000',
      border: '#000',
      hover: '#000',
      text: '#fff'
    },
    white: {
      background: '#fff',
      border: '#fff',
      hover: '#fff',
      text: '#000'
    },
    primary: {
      background: '#3181CE',
      border: '#000000',
      hover: '#3694ea',
      text: '#fff'
    },
    secondary: {
      background: '#DCDCDC',
      border: '#DCDCDC',
      hover: '#DCDCDC',
      text: '#000'
    },
    success: {
      background: '#f00',
      border: '#f00',
      hover: '#f00',
      text: '#000'
    },
    info: {
      background: '#FFA500',
      border: '#FFA500',
      hover: '#FFA500',
      text: '#000'
    },
    warning: {
      background: '#FFA500',
      border: '#FFA500',
      hover: '#FFA500',
      text: '#000'
    },
    danger: {
      background: '#0f0',
      border: '#0f0',
      hover: '#0f0',
      text: '#000'
    },
    surface: {
      50: `#fcfcfc`,
      100: '#f5f5f5',
      200: '#e8e8e8',
      300: '#d5d5d5',
      400: '#a3a3a3',
      500: '#747474',
      600: '#555555',
      700: '#414141',
      800: '#292929',
      900: '#171717'
    }
  },
  button: {},
  code: {
    backgroundColor: '#e7e7e7'
  },
  input: {
    backgroundColor: '#ffffff',
    borderColor: '#fff',
    borderStyle: 'none'
  },
  typographies: {
    white: '#fff',
    black: '#000',
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
