import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mediaQueries: {
      tablet: string;
      laptop: string;
      desktop: string;
      xdesktop: string;
    }
    colors: {
      purple: string;
      blue: string;
      red: string;
      green: string;
    }
  }
}

export const lightTheme: DefaultTheme = {
  mediaQueries: {
    tablet: '(min-width: 600px)',
    laptop: '(min-width: 1024px)',
    desktop: '(min-width: 1920px)',
    xdesktop: '(min-width: 2560px)',
  },
  colors: {
    purple: 'rgb(148, 92, 209)',
    blue: 'rgb(94, 92, 209)',
    red: 'rgb(209, 92, 92)',
    green: 'rgb(142, 209, 92)'
  }
};
