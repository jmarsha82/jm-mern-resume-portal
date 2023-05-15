// App.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Enzyme from "enzyme";

const { shallow } = Enzyme; //whatever you want to use here

it('renders without crashing', () => {
    shallow(<App />);
  });

test("component exists", () => {
expect(App).toBeDefined();
});