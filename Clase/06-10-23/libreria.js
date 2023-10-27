let sumar = function (num1, num2) {
  let res = num1 + num2;
  return res;
};
let restar = function (num1, num2) {
  let res = num1 - num2;
  return res;
};
let multiplicar = function (num1, num2) {
  let res = num1 * num2;
  return res;
};
let dividir = function (num1, num2) {
  let res = num1 / num2;
  return res;
};

function operacion(opera, num1, num2) {
  return opera(num1, num2);
}
