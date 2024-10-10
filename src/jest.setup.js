// src/jest.setup.js
global.IntersectionObserver = class {
    constructor() {
      this.observe = jest.fn();
      this.unobserve = jest.fn();
      this.disconnect = jest.fn();
    }
  };
  