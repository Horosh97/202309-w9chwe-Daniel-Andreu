import usersMock from "../../mocks/usersMock";
import renderWithProviders from "../../testUtils/renderWithProviders";
import UserCard from "./UserCard";
import { screen } from "@testing-library/react";

describe("Given a UserCard component", () => {
  describe("When it receives 'Juan Antonio Velasco'", () => {
    test("Then it should create a 'Juan Antonio Velasco' heading");
    const user = usersMock[0].name;
    renderWithProviders(<UserCard user={usersMock[0]} />, usersMock);

    const heading = screen.getByRole("heading", { name: user });

    expect(heading).toBeInTheDocument();
  });
});
