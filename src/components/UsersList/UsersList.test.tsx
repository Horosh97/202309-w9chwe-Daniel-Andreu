import { screen } from "@testing-library/react";

import UsersList from "./UsersList";
import usersMock from "../../mocks/usersMock";
import renderWithProviders from "../../testUtils/renderWithProviders";

describe("Given a MoviesList component", () => {
  describe("When it receives an array of movies with 'The exorcist' and 'Texas Chain Saw Massacre'", () => {
    test("Then it should create 2 MovieCards", () => {
      const expectedListItems = 3;
      const users = usersMock;

      renderWithProviders(<UsersList />, users);
      const listItems = screen.getAllByRole("listitem").length;

      expect(listItems).toBe(expectedListItems);
    });
  });
});
