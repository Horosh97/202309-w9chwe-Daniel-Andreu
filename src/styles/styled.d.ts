import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    typography: {
      fontFamily: string;
    };
    colors: {
      lightColor: string;
      darkColor: string;
      secondaryColor: string;
      mainColor: string;
      accentColor: string;
    };
  }
}
