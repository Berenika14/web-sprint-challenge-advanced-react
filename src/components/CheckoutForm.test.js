import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  const firstNameDisplay = screen.getByLabelText(/first name/i);
  const lastNameDisplay = screen.getByLabelText(/last name/i);
  const addressDisplay = screen.getByLabelText(/address/i);
  const cityDisplay = screen.getByLabelText(/city/i);
  const stateDisplay = screen.getByLabelText(/state/i);
  const zipDisplay = screen.getByLabelText(/zip/i);

  userEvent.type(firstNameDisplay, "Berenika");
  userEvent.type(lastNameDisplay, "Ahmetaj");
  userEvent.type(addressDisplay, "450 West 17th st");
  userEvent.type(cityDisplay, "New York");
  userEvent.type(stateDisplay, "New York");
  userEvent.type(zipDisplay, "10011");

  const button = screen.getByRole("button");
  userEvent.click(button);

  const displayFirstName = screen.queryByText("Berenika");
  const displayLastName = screen.queryByText("Ahmetaj");
  const displayAddress = screen.queryByText("450 West 17th st");
  const displayCity = screen.queryByText("New York");
  const displayState = screen.queryByText("New York");
  const displayZip = screen.queryByText("10011");

  const message = screen.getByTestId("successMessage");
  expect(message).toBeInTheDocument();
});
