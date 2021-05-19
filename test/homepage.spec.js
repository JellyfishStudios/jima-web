import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';

import { expect } from 'chai';

import Footer from '../src/public/components/footer.js';

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
  it('should show correct footer loc ID', () => {
    act(() => {
      ReactDOM.render(<Footer />, container);
    });

    expect(container.querySelector("p").textContent).to.equal("footersection.copyright");
  });
});
