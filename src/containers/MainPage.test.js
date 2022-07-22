import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
  //before each of our tests
  const mockProps = {
    onRequestData: jest.fn(),
    data: [],
    searchField: "",
    isPending: false,
  };
  wrapper = render(<MainPage {...mockProps} />);
});

// const mockChildComponent = jest.fn();
// jest.mock("./MainPage", () => (props) => {
//   mockChildComponent(props);
//   return <mock-childComponent />;
// });

it("renders MainPage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("renders MainPage without beforeach", () => {
  const mockProps = {
    onRequestData: jest.fn(),
    data: [],
    searchField: "",
    isPending: false,
  };
  const view = render(<MainPage {...mockProps} />);
  const buildComponentProps = () => ({
    isPending: false,
    searchField: "",
    data: [],
    onRequestData: jest.fn(),
  });
  expect(view).toMatchSnapshot();
});

it("has no data available", () => {
  const mockProps = {
    onRequestData: jest.fn(),
    data: [{ id: 1, name: "Leanne" }],
    searchField: "",
    isPending: false,
  };
  const { getByText } = render(<MainPage {...mockProps} />);
  const content = getByText(/Leanne/i);

  expect(content).toBeInTheDocument();
});
