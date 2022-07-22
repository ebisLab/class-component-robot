import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import userEvent from "@testing-library/user-event";
// const swapi = require("./script2"); //not node package so we need to give it a path

// it("calls swapi to get people async", () => {
//   App.getPeopleAsync(fetch).then((data) => expect(data.count).toEqual(87));
// });

export const data = [
  { id: 1, name: "Nature best" },
  { id: 2, name: "collage" },
  { id: 3, name: "udemy" },
];
it("expect to render App", () => {
  expect(render(<App data={data} />)).toMatchSnapshot();
});
