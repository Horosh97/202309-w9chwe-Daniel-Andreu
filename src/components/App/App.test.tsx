import { render, screen } from "@testing-library/react";
import GlobalStyle from "../../styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../../styles/mainTheme";
import App from "./App";

describe("Given a App component", () => {
  describe("When it renders", () => {
    test("It should create a Header component with a heading", () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <GlobalStyle />
            <App />
          </BrowserRouter>
        </ThemeProvider>,
      );

      const Heading = screen.getByRole("heading");

      expect(Heading).toBeInTheDocument();
    });
  });
});
