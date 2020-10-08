import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import List from "./List";
import Card from "./Card.js";

describe("List component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<List name="List" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the UI as expected with no unreads", () => {
    const tree = renderer.create(<List name="List" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
