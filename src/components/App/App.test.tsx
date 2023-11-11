import { screen } from "@testing-library/react";
import App from "./App";
import renderWithProviders from "../../testUtils/renderWithProviders";
import usersMock from "../../mocks/usersMock";

describe("Given a App component", () => {
  describe("When it renders", () => {
    test("It should create a Header component with a heading 'ISDIgram'", () => {
      const expectedHeading = "ISDIgram";
      renderWithProviders(<App />, usersMock);

      const Heading = screen.getByRole("heading", { name: expectedHeading });

      expect(Heading).toBeInTheDocument();
    });
  });
});
