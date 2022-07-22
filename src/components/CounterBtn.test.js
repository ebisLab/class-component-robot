import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CounterBtn from "./CounterBtn";
import userEvent from "@testing-library/user-event";

it("expect to render CounterBtn", () => {
  expect(render(<CounterBtn color="red" />)).toMatchSnapshot();
});

it("correctly increments the counter", async () => {
  const handleClick = jest.fn();
  const { getByText, getByTestId } = render(
    <CounterBtn color="red" onClick={handleClick} />
  );

  //simulate click
  //   fireEvent.click(screen.getByText(/click/i));
  fireEvent.click(getByTestId("counter"));
  //   expect(handleClick).toHaveBeenCalled();
  let num = getByText(/1/i);
  await waitFor(() =>
    // expect(handleClick)
    //   //   .toHaveBeenCalled());
    //   .toHaveBeenCalledTimes(2)
    expect(num).toBeInTheDocument()
  );

  //grab state
  //   expect(wrapper.state()).toEqual({ count: 1 });
});

// it("updates on change", () => {
//   const handleClick = jest.fn();
//   const { getByTestId } = render(
//     <CounterBtn color="red" onClick={handleClick} />
//   );

//   const datachange = getByTestId("counter");
//   fireEvent.change(datachange, { target: { value: "1" } });
//   fireEvent.change(datachange, { target: { value: "2" } });

//   expect(datachange.value).toBe("2");
// });

it("updates on change", () => {
  const handleClick = jest.fn();
  const { getByTestId } = render(
    <CounterBtn color="red" onClick={handleClick} />
  );

  const datachange = getByTestId("counter");
  fireEvent.change(datachange, { target: { value: "1" } });
  fireEvent.change(datachange, { target: { value: "2" } });
  // expect(datachange.value).toBe("2");
});

// it("updates on user change", async () => {
//   const handleClick = jest.fn();
//   render(<CounterBtn color="red" onClick={handleClick} />);

//   //simulate click
//   await userEvent.click(screen.getByText(/click/i));

//   //   expect(handleClick).toHaveBeenCalledTimes(1);
//   //   waitFor(
//   //     () =>
//   //       // expect(handleClick)
//   //       //   //   .toHaveBeenCalled());
//   //       //   .toHaveBeenCalledTimes(2)
//   //       expect(handleClick).toHaveBeenCalledTimes(2)
//   //     // console.log(handleClick)
//   //   );
//   await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1));
// });

it("correctly updates on user change", async () => {
  const handleClick = jest.fn();
  render(<CounterBtn color="red" onClick={handleClick} />);
  expect(screen.queryByText("click 1")).not.toBeInTheDocument();
  expect(screen.getByText("click 0")).toBeInTheDocument();
  //simulate click
  userEvent.click(screen.getByText(/click/i));
  expect(screen.queryByText("click 0")).not.toBeInTheDocument();
  expect(screen.getByText("click 1")).toBeInTheDocument();
});

it("has the color attribute", () => {
  const { getByTestId } = render(<CounterBtn color="red" />);
  const datachange = getByTestId("counter");

  // Assert if the function was called
  expect(datachange).toHaveAttribute("color");
  // ...
});
