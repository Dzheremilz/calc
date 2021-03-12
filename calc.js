const math = require('./operations')
const op = require('./constants')

exports.calc = (operator, nb1, nb2) => {
  switch (operator) {
    case op.ADD_OP:
      return math.add(nb1, nb2)
    case op.SUB_OP:
      return math.sub(nb1, nb2)
    case op.MUL_OP:
      return math.mul(nb1, nb2)
    case op.DIV_OP:
      return math.div(nb1, nb2)
    case op.MOD_OP:
      return math.modulo(nb1, nb2)
    case op.PWR_OP:
      return math.power(nb1, nb2)
    default:
      return `Unknow operator ${operator}`
  }
}