import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "../Components/Login";

test("email input should be rendered", () => {
  render(<Login />);
  const emailInput = screen.getByPlaceholderText(/Email/i);
  expect(emailInput).toBeInTheDocument();
});
test("password input should be rendered", () => {
  render(<Login />);
  const passwordInput = screen.getByPlaceholderText(/Password/i);
  expect(passwordInput).toBeInTheDocument();
});
test("button input should be rendered", () => {
  render(<Login />);
  const buttonInput = screen.getByRole("button");
  expect(buttonInput).toBeInTheDocument();
});

// test("should show email error message on invalid email", () => {
//   render(<Login />);

//       const emailErrorElement = screen.queryByText(/The email is invalid/);
//     const emailInputElement = screen.getByRole("textbox", {
//       name: /email/i,
//     });
//   const submitButtonElement = screen.getByRole("button", {
//     name: /submit/i,
//   });
//   expect(emailErrorElement).not.toBeInTheDocument();

//   userEvent.type(emailInputElement);
//   userEvent.click(submitButtonElement);

//   expect(emailErrorElement).toBeInTheDocument();
// });

// test("email input should change", () => {
//   render(<Login />);
//     const emailInput = screen.getByPlaceholderText(/Email/i);

//   const testValue = "test";

//   fireEvent.change(emailInput, { target: { value: testValue } });
//   expect(emailInput.value).toBe(testValue);
// });
// test("password input should change", () => {
//   render(<Login />);
//   const passwordInput = screen.getByPlaceholderText(/Password/i);
//   const testValue = "test";

//   fireEvent.change(passwordInput, { target: { value: testValue } });
//   expect(passwordInput.value).toBe(testValue);
// });

test("button should be disabled", () => {
  render(<Login />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeDisabled();
});
