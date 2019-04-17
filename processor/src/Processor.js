"use strct";

module.exports = class Processor {
  constructor() {
    this._typeRegistry = {};    
  }

  convertToMIPS(clickProgram) {
    this._loopCounter = 0;

    return this._parseInstructionBlock(clickProgram.instructions);
  }

  _parseInstructionBlock() {
    return "";
  }
};