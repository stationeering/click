
"use strict";

const expect = require("chai").expect;

const Processor = require("../src/Processor");

describe("Procesor Tests", function () {
  describe("Basic handling of of empty instruction array", function () {
    it("returns an empty string when an empty array is passed in", function () {
      let processor = new Processor();

      let actualResult = processor._parseInstructionBlock([]);
      expect(actualResult).to.equal("");
    });      
  });
});