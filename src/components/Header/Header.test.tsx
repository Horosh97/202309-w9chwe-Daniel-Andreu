import { render, screen } from "@testing-library/react";
import Header from "./Header";
import GlobalStyle from "../../styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../../styles/mainTheme";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("It should create a 'ISDIgram' heading", () => {
      const expectedHeading = "ISDIgram";
      render(
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <GlobalStyle />
            <Header />
          </BrowserRouter>
        </ThemeProvider>,
      );

      const Heading = screen.getByRole("heading", { name: expectedHeading });

      expect(Heading).toBeInTheDocument();
    });
  });
});
