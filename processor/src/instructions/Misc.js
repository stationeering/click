module.exports = function (processor) {
  processor._registerInstruction("yield", _instruction_yield);
};

/* eslint no-unused-vars: 0 */ 

function _instruction_yield(instruction) {
  return [ "YIELD" ];
}