import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';

import { expect } from 'chai';

import App from '../src/public/components/app.js';

var jsdom = require('mocha-jsdom');

global.document = jsdom({
  url: 'http://localhost:8000'
});

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('App component', () => {
  it('should return hello world', () => {
    act(() => {
      ReactDOM.render(<App />, container);
    });

    expect(container.querySelector("h1").textContent).to.equal("Cardano Jima, a secure and scalable AWS based stakepool hosted in Tokyo.");
  });
});
