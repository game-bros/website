import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      purple: string;
      blue: string;
      red: string;
      green: string;
    }
  }
}

export const lightTheme: DefaultTheme = {
  colors: {
    purple: 'rgb(148, 92, 209)',
    blue: 'rgb(94, 92, 209)',
    red: 'rgb(209, 92, 92)',
    green: 'rgb(142, 209, 92)'
  }
};
