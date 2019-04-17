"use strict";

const expect = require("chai").expect;

const Processor = require("../../src/Processor");

describe("Loop Tests", function () {
  describe("Loop instruction with no conditions", function () {
    it("returns a program with a loop around instructions in it's body", function () {
      let processor = new Processor();

      let program = {
        "instructions": [{
          "type": "loop",
          "blocks": [{
            "instructions": [{
              "type": "yield"
            }]
          }]
        }]
      };

      let actualResult = processor.convertToMIPS(program);
      expect(actualResult).to.deep.equal([ "LoopStart0:", "yield", "j LoopStart0" ]);
    });      
  });

  describe("Loop instruction nested in another loop", function () {
    it("returns a program with a loop around instructions of a second loop with different jump labels", function () {
      let processor = new Processor();

      let program = {
        "instructions": [{
          "type": "loop",
          "blocks": [{
            "instructions": [{
              "type": "loop",
              "blocks": [{
                "instructions": [{
                  "type": "yield"
                }]
              }]
            }]
          }]
        }]
      };

      let actualResult = processor.convertToMIPS(program);
      expect(actualResult).to.deep.equal([ "LoopStart0:", "LoopStart1:", "yield", "j LoopStart1", "j LoopStart0" ]);
    });      
  });
});