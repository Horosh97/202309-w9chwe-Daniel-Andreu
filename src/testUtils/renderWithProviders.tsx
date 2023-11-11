import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../styles/mainTheme";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { UserStructure } from "../store/features/users/types";
import { usersReducer } from "../store/features/users/usersSlice";

const renderWithProviders = (
  children: React.ReactElement,
  mocksList: UserStructure[],
) => {
  const mockStore = configureStore({
    reducer: {
      usersState: usersReducer,
    },
    preloadedState: { usersState: { users: mocksList } },
  });

  render(
    <BrowserRouter>
      <Provider store={mockStore}>
        <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
      </Provider>
    </BrowserRouter>,
  );
};
export default renderWithProviders;
