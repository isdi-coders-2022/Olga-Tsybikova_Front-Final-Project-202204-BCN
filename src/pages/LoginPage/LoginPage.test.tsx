import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import LoginPage from "./LoginPage";

describe("Given a Login Page component", () => {
  describe("When it is instatiated", () => {
    test("Then it should render a login form", () => {
      render(
        <BrowserRouter>
          <Provider store={{ ...store }}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      const loginForm = screen.getByText("Password");
      expect(loginForm).toBeInTheDocument();
    });
  });
});
