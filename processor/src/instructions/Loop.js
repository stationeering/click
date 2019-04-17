module.exports = function (processor) {
  processor._registerInstruction("loop", _instruction_loop);
};

/* eslint no-unused-vars: 0 */ 

function _instruction_loop(instruction) {
  let loopId = this._loopCounter++;

  let loop = [];
  loop = loop.concat("LoopStart" + loopId + ":");
  loop = loop.concat(this._parseInstructionBlock(instruction.blocks[0].instructions));
  loop = loop.concat("j LoopStart" + loopId);

  return loop;
}