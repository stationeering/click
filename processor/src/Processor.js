"use strct";

const LoopInstructions = require("./instructions/Loop.js");
const MiscInstructions = require("./instructions/Misc.js");

module.exports = class Processor {
  constructor() {
    this._typeRegistry = {};    

    LoopInstructions(this);
    MiscInstructions(this);
  }

  convertToMIPS(clickProgram) {
    this._loopCounter = 0;

    return this._parseInstructionBlock(clickProgram.instructions);
  }

  _parseInstructionBlock(instructions) {
    return instructions.reduce((acc, instruction) => acc.concat(this._callInstruction(instruction)), []);
  }

  _callInstruction(instruction) {
    let func = this._typeRegistry[instruction.type];
    return func(instruction);
  }

  _registerInstruction(name, func) {
    func = func.bind(this);
    this._typeRegistry[name] = func;
  }
};