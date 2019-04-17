
"use strict";

const expect = require("chai").expect;

const Processor = require("../src/Processor");

describe("Procesor Tests", function () {
  describe("Basic handling of of empty instruction array", function () {
    it("returns an empty string when an empty array is passed in", function () {
      let processor = new Processor();

      let actualResult = processor.convertToMIPS({"instructions": []});
      expect(actualResult).to.deep.equal([]);
    });      
  });

  describe("Handling of a block without nested instructions", function () {
    it("from one instruction returns a single line with the MIPS instruction", function() {
      let processor = new Processor();

      let actualResult = processor.convertToMIPS({"instructions": [ { "type": "yield" } ]});
      expect(actualResult).to.deep.equal([ "YIELD" ]);
    });

    it("from two instructions returns two lines with the MIPS instructions", function() {
      let processor = new Processor();
  
      let actualResult = processor.convertToMIPS({"instructions": [ { "type": "yield" }, { "type": "yield" } ]});
      expect(actualResult).to.deep.equal([ "YIELD", "YIELD" ]);
    });  
  });
});